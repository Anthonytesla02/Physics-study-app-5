import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import fs from "fs/promises";
import path from "path";
import { db } from "./db";
import { lessons } from "@shared/schema";
import { eq } from "drizzle-orm";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed database async without blocking startup too long, or block it if we want
  seedDatabase().catch(console.error);

  app.post(api.users.create.path, async (req, res) => {
    try {
      const input = api.users.create.input.parse(req.body);
      let user = await storage.getUserByUsername(input.username);
      if (!user) {
        user = await storage.createUser(input);
      }
      res.status(201).json(user);
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({ message: err.errors[0].message });
      } else {
        res.status(400).json({ message: "Invalid input" });
      }
    }
  });

  app.post(api.users.login.path, async (req, res) => {
    try {
      const input = api.users.login.input.parse(req.body);
      const user = await storage.getUserByUsername(input.username);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ message: "Invalid input" });
    }
  });

  app.get(api.lessons.list.path, async (req, res) => {
    const allLessons = await storage.getLessons();
    const list = allLessons.map(l => ({
      id: l.id,
      slug: l.slug,
      title: l.title,
      chapter: l.chapter,
      order: l.order,
    }));
    res.status(200).json(list);
  });

  app.get(api.lessons.get.path, async (req, res) => {
    const lesson = await storage.getLesson(Number(req.params.id));
    if (!lesson) return res.status(404).json({ message: "Lesson not found" });
    res.status(200).json(lesson);
  });

  app.get(api.progress.list.path, async (req, res) => {
    const p = await storage.getUserProgress(Number(req.params.userId));
    res.status(200).json(p);
  });

  app.post(api.progress.toggle.path, async (req, res) => {
    try {
      const input = api.progress.toggle.input.parse(req.body);
      const p = await storage.toggleProgress(
        Number(req.params.userId),
        Number(req.params.lessonId),
        input.completed
      );
      res.status(200).json(p);
    } catch (err) {
      res.status(400).json({ message: "Invalid input" });
    }
  });

  return httpServer;
}

async function seedDatabase() {
  try {
    const existingLessons = await storage.getLessons();
    if (existingLessons.length === 0) {
      console.log("Seeding lessons from markdown files...");
      const lessonsDir = path.join(process.cwd(), "attached_assets", "physics_lessons", "lessons_md");
      
      const files = await fs.readdir(lessonsDir);
      const mdFiles = files.filter(f => f.endsWith(".md")).sort();
      let order = 1;
      
      for (const file of mdFiles) {
        const content = await fs.readFile(path.join(lessonsDir, file), "utf-8");
        const titleMatch = content.match(/^#\s+(.*)/m);
        let title = titleMatch ? titleMatch[1].trim() : file.replace(".md", "").replace(/_/g, " ");
        let chapter = "Introduction";
        
        // Extract chapter info from title or filename
        const chapterMatch = file.match(/^(\d+)_/);
        if (chapterMatch) {
            const chapNum = parseInt(chapterMatch[1], 10);
            if (chapNum === 0) chapter = "Preface";
            else if (chapNum >= 1) chapter = `Chapter ${chapNum}`;
        }
        
        const slug = file.replace(".md", "");
        
        // Fix image paths in content
        const fixedContent = content.replace(
          /!\[(.*?)\]\((?:\/apps\/image-cdn\/v1\/f=webp\/apps\/archive\/.*?\/(.*?)|https:\/\/openstax\.org\/apps\/image-cdn\/v1\/f=webp\/apps\/archive\/.*?\/(.*?))\)/g,
          (match, alt, path1, path2) => {
            const filename = (path1 || path2).split('/').pop();
            return `![${alt}](https://openstax.org/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/${filename})`;
          }
        );
        
        await db.insert(lessons).values({
          slug,
          title,
          chapter,
          order: order++,
          content: fixedContent
        }).onConflictDoNothing();
      }
      console.log("Lessons seeded successfully.");
    }
  } catch (err) {
    console.error("Error seeding lessons:", err);
  }
}
