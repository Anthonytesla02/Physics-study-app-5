import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import { z } from "zod";

function parseWithLogging<T>(schema: z.ZodSchema<T>, data: unknown, label: string): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    console.error(`[Zod] ${label} validation failed:`, result.error.format());
    throw result.error;
  }
  return result.data;
}

export function useProgress(userId?: number) {
  return useQuery({
    queryKey: [api.progress.list.path, userId],
    queryFn: async () => {
      if (!userId) return [];
      const url = buildUrl(api.progress.list.path, { userId });
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch progress");
      const data = await res.json();
      return parseWithLogging(api.progress.list.responses[200], data, "progress.list");
    },
    enabled: !!userId,
  });
}

export function useToggleProgress() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ userId, lessonId, completed }: { userId: number; lessonId: number; completed: boolean }) => {
      const url = buildUrl(api.progress.toggle.path, { userId, lessonId });
      const payload = api.progress.toggle.input.parse({ completed });
      
      const res = await fetch(url, {
        method: api.progress.toggle.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      if (!res.ok) throw new Error("Failed to update progress");
      const data = await res.json();
      return parseWithLogging(api.progress.toggle.responses[200], data, "progress.toggle");
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: [api.progress.list.path, variables.userId] });
    },
  });
}
