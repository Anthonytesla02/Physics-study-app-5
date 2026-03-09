import { useQuery } from "@tanstack/react-query";
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

export function useLessons() {
  return useQuery({
    queryKey: [api.lessons.list.path],
    queryFn: async () => {
      const res = await fetch(api.lessons.list.path);
      if (!res.ok) throw new Error("Failed to fetch lessons");
      const data = await res.json();
      return parseWithLogging(api.lessons.list.responses[200], data, "lessons.list");
    },
  });
}

export function useLesson(id: number) {
  return useQuery({
    queryKey: [api.lessons.get.path, id],
    queryFn: async () => {
      const url = buildUrl(api.lessons.get.path, { id });
      const res = await fetch(url);
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch lesson");
      const data = await res.json();
      return parseWithLogging(api.lessons.get.responses[200], data, "lessons.get");
    },
    enabled: !!id,
  });
}
