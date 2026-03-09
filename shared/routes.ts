import { z } from 'zod';
import { insertUserSchema } from './schema';

export const errorSchemas = {
  notFound: z.object({ message: z.string() }),
  internal: z.object({ message: z.string() }),
};

const lessonSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  chapter: z.string(),
  order: z.number(),
  content: z.string(),
});

const lessonListSchema = lessonSchema.omit({ content: true });

const userProgressSchema = z.object({
  id: z.number(),
  userId: z.number(),
  lessonId: z.number(),
  completed: z.boolean(),
  completedAt: z.union([z.string(), z.date(), z.null()]).optional(),
});

export const api = {
  users: {
    create: {
      method: 'POST' as const,
      path: '/api/users' as const,
      input: insertUserSchema,
      responses: { 201: z.object({ id: z.number(), username: z.string() }) }
    },
    login: {
      method: 'POST' as const,
      path: '/api/login' as const,
      input: z.object({ username: z.string() }),
      responses: {
        200: z.object({ id: z.number(), username: z.string() }),
        404: errorSchemas.notFound
      }
    }
  },
  lessons: {
    list: {
      method: 'GET' as const,
      path: '/api/lessons' as const,
      responses: {
        200: z.array(lessonListSchema)
      }
    },
    get: {
      method: 'GET' as const,
      path: '/api/lessons/:id' as const,
      responses: {
        200: lessonSchema,
        404: errorSchemas.notFound
      }
    }
  },
  progress: {
    list: {
      method: 'GET' as const,
      path: '/api/users/:userId/progress' as const,
      responses: {
        200: z.array(userProgressSchema)
      }
    },
    toggle: {
      method: 'POST' as const,
      path: '/api/users/:userId/progress/:lessonId' as const,
      input: z.object({ completed: z.boolean() }),
      responses: {
        200: userProgressSchema
      }
    }
  }
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export type LessonListResponse = z.infer<typeof lessonListSchema>;
export type UserProgressResponse = z.infer<typeof userProgressSchema>;
