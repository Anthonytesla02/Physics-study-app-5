import { users, lessons, userProgress, type User, type InsertUser, type Lesson, type UserProgress } from "@shared/schema";
import { db } from "./db";
import { eq, and } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  getLessons(): Promise<Lesson[]>;
  getLesson(id: number): Promise<Lesson | undefined>;

  getUserProgress(userId: number): Promise<UserProgress[]>;
  toggleProgress(userId: number, lessonId: number, completed: boolean): Promise<UserProgress>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async getLessons(): Promise<Lesson[]> {
    return await db.select().from(lessons).orderBy(lessons.order);
  }

  async getLesson(id: number): Promise<Lesson | undefined> {
    const [lesson] = await db.select().from(lessons).where(eq(lessons.id, id));
    return lesson;
  }

  async getUserProgress(userId: number): Promise<UserProgress[]> {
    return await db.select().from(userProgress).where(eq(userProgress.userId, userId));
  }

  async toggleProgress(userId: number, lessonId: number, completed: boolean): Promise<UserProgress> {
    const [existing] = await db.select().from(userProgress)
      .where(and(eq(userProgress.userId, userId), eq(userProgress.lessonId, lessonId)));

    if (existing) {
      const [updated] = await db.update(userProgress)
        .set({ completed, completedAt: completed ? new Date() : null })
        .where(eq(userProgress.id, existing.id))
        .returning();
      return updated;
    } else {
      const [inserted] = await db.insert(userProgress)
        .values({ userId, lessonId, completed, completedAt: completed ? new Date() : null })
        .returning();
      return inserted;
    }
  }
}

export const storage = new DatabaseStorage();
