import React, { useMemo } from "react";
import { useRoute, Link } from "wouter";
import { useLesson, useLessons } from "@/hooks/use-lessons";
import { useAuthContext } from "@/lib/auth-context";
import { useProgress, useToggleProgress } from "@/hooks/use-progress";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { ArrowLeft, CheckCircle2, ChevronLeft, ChevronRight, Loader2, PlayCircle } from "lucide-react";

export default function LessonPage() {
  const [, params] = useRoute("/lesson/:id");
  const id = Number(params?.id);
  const { user } = useAuthContext();

  const { data: lesson, isLoading: lessonLoading } = useLesson(id);
  const { data: allLessons } = useLessons();
  const { data: progressList } = useProgress(user?.id);
  const toggleMutation = useToggleProgress();

  const isCompleted = useMemo(() => {
    if (!progressList) return false;
    return progressList.some((p) => p.lessonId === id && p.completed);
  }, [progressList, id]);

  const { prevLesson, nextLesson } = useMemo(() => {
    if (!allLessons || !lesson) return { prevLesson: null, nextLesson: null };
    const idx = allLessons.findIndex((l) => l.id === lesson.id);
    return {
      prevLesson: idx > 0 ? allLessons[idx - 1] : null,
      nextLesson: idx < allLessons.length - 1 ? allLessons[idx + 1] : null,
    };
  }, [allLessons, lesson]);

  if (lessonLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-10 w-10 text-primary animate-spin" />
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Lesson not found</h2>
        <Link href="/" className="text-primary hover:underline inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Curriculum
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-500 max-w-3xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-6 bg-secondary/50 px-3 py-1.5 rounded-lg border border-border/50">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
        <div className="flex items-center gap-3 text-sm font-semibold text-primary/80 mb-3 tracking-wider uppercase">
          <span>{lesson.chapter}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-sans text-foreground leading-tight">
          {lesson.title}
        </h1>
      </div>

      <div className="bg-card rounded-[2rem] p-6 sm:p-10 shadow-xl shadow-black/5 border border-border/50 mb-10 text-lg leading-relaxed">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown 
            remarkPlugins={[remarkMath]} 
            rehypePlugins={[rehypeKatex]}
          >
            {lesson.content}
          </ReactMarkdown>
        </div>
      </div>

      {/* Completion & Navigation Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-16 p-6 rounded-2xl bg-secondary/30 border border-border">
        
        <button
          onClick={() => user && toggleMutation.mutate({ userId: user.id, lessonId: lesson.id, completed: !isCompleted })}
          disabled={toggleMutation.isPending}
          className={`flex items-center gap-3 px-6 py-4 rounded-xl font-bold text-base transition-all duration-300 w-full sm:w-auto justify-center ${
            isCompleted 
              ? "bg-green-500/10 text-green-600 border-2 border-green-500 hover:bg-green-500 hover:text-white" 
              : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5"
          }`}
        >
          {toggleMutation.isPending ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : isCompleted ? (
            <>
              <CheckCircle2 className="w-5 h-5" /> Completed
            </>
          ) : (
            <>
              <PlayCircle className="w-5 h-5" /> Mark as Complete
            </>
          )}
        </button>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {prevLesson ? (
            <Link href={`/lesson/${prevLesson.id}`} className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-border bg-card hover:bg-secondary transition-colors text-sm font-semibold">
              <ChevronLeft className="w-4 h-4" /> Prev
            </Link>
          ) : (
            <div className="flex-1 sm:flex-none px-4 py-3 rounded-xl border border-border/50 bg-card/50 text-muted-foreground/50 text-sm font-semibold cursor-not-allowed flex items-center justify-center gap-2">
              <ChevronLeft className="w-4 h-4" /> Prev
            </div>
          )}
          
          {nextLesson ? (
            <Link href={`/lesson/${nextLesson.id}`} className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-border bg-card hover:bg-secondary transition-colors text-sm font-semibold">
              Next <ChevronRight className="w-4 h-4" />
            </Link>
          ) : (
            <div className="flex-1 sm:flex-none px-4 py-3 rounded-xl border border-border/50 bg-card/50 text-muted-foreground/50 text-sm font-semibold cursor-not-allowed flex items-center justify-center gap-2">
              Next <ChevronRight className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
