import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { useAuthContext } from "@/lib/auth-context";
import { z } from "zod";

function parseWithLogging<T>(schema: z.ZodSchema<T>, data: unknown, label: string): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    console.error(`[Zod] ${label} validation failed:`, result.error.format());
    throw result.error;
  }
  return result.data;
}

export function useLogin() {
  const { login } = useAuthContext();

  return useMutation({
    mutationFn: async (username: string) => {
      // 1. Try to login
      try {
        const payload = api.users.login.input.parse({ username });
        const res = await fetch(api.users.login.path, {
          method: api.users.login.method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (res.status === 404) {
          // User not found, fallback to creating
          throw new Error("NOT_FOUND");
        }

        if (!res.ok) throw new Error("Failed to login");

        const data = await res.json();
        return parseWithLogging(api.users.login.responses[200], data, "users.login");
      } catch (err: any) {
        if (err.message === "NOT_FOUND") {
          // 2. Create user instead
          const createPayload = api.users.create.input.parse({ username });
          const createRes = await fetch(api.users.create.path, {
            method: api.users.create.method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(createPayload),
          });

          if (!createRes.ok) throw new Error("Failed to create user");

          const createData = await createRes.json();
          return parseWithLogging(api.users.create.responses[201], createData, "users.create");
        }
        throw err;
      }
    },
    onSuccess: (data) => {
      login(data);
    },
  });
}
