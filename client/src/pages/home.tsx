import React, { useMemo } from "react";
import { Link } from "wouter";
import { useAuthContext } from "@/lib/auth-context";
import { useLessons } from "@/hooks/use-lessons";
import { useProgress, useToggleProgress } from "@/hooks/use-progress";
import { BookText, CheckCircle2, ChevronRight, Loader2, Trophy, Flame } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  const { user } = useAuthContext();
  const { data: lessons, isLoading: lessonsLoading } = useLessons();
  const { data: progressList, isLoading: progressLoading } = useProgress(user?.id);
  const toggleMutation = useToggleProgress();

  const progressMap = useMemo(() => {
    const map = new Map<number, boolean>();
    if (progressList) {
      progressList.forEach((p) => map.set(p.lessonId, p.completed));
    }
    return map;
  }, [progressList]);

  const chapters = useMemo(() => {
    if (!lessons) return [];
    const grouped = lessons.reduce((acc, lesson) => {
      if (!acc[lesson.chapter]) acc[lesson.chapter] = [];
      acc[lesson.chapter].push(lesson);
      return acc;
    }, {} as Record<string, typeof lessons>);
    return Object.entries(grouped);
  }, [lessons]);

  const stats = useMemo(() => {
    if (!lessons) return { total: 0, completed: 0, percent: 0 };
    const total = lessons.length;
    const completed = Array.from(progressMap.values()).filter(Boolean).length;
    return {
      total,
      completed,
      percent: total > 0 ? Math.round((completed / total) * 100) : 0,
    };
  }, [lessons, progressMap]);

  if (lessonsLoading || progressLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-10 w-10 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Hero Stats Card */}
      <div className="bg-gradient-to-br from-card to-secondary/30 rounded-[2rem] p-8 border border-border shadow-lg shadow-black/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 hidden sm:block">
          <BookText className="w-48 h-48" />
        </div>
        
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Your Progress</h1>
            <p className="text-muted-foreground flex items-center gap-2">
              <Flame className="w-4 h-4 text-orange-500" />
              Keep up the momentum!
            </p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-primary flex items-center sm:justify-end gap-2">
              {stats.percent}% <Trophy className="w-8 h-8 text-yellow-500" />
            </div>
            <p className="text-sm text-muted-foreground font-medium mt-1">
              {stats.completed} of {stats.total} lessons completed
            </p>
          </div>
        </div>
        
        <div className="mt-8">
          <Progress value={stats.percent} className="h-4 bg-muted border border-border/50" />
        </div>
      </div>

      {/* Curriculum / Table of Contents */}
      <div>
        <h2 className="text-2xl font-bold mb-6 font-sans flex items-center gap-3">
          <BookText className="text-primary" />
          Curriculum
        </h2>
        
        <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
          <Accordion type="multiple" defaultValue={chapters.map(([title]) => title)} className="w-full">
            {chapters.map(([chapterTitle, chapterLessons], idx) => {
              const chapterCompleted = chapterLessons.filter(l => progressMap.get(l.id)).length;
              const chapterTotal = chapterLessons.length;
              const isAllDone = chapterTotal > 0 && chapterCompleted === chapterTotal;

              return (
                <AccordionItem key={chapterTitle} value={chapterTitle} className="border-b last:border-b-0">
                  <AccordionTrigger className="px-6 py-5 hover:bg-secondary/50 transition-colors data-[state=open]:bg-secondary/20">
                    <div className="flex items-center gap-4 text-left">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0">
                        {idx + 1}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-lg">{chapterTitle}</span>
                        <span className="text-xs font-medium text-muted-foreground mt-0.5">
                          {chapterCompleted} / {chapterTotal} Lessons
                        </span>
                      </div>
                      {isAllDone && (
                        <CheckCircle2 className="w-5 h-5 text-green-500 ml-2 shrink-0" />
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-background pb-0 pt-0">
                    <div className="flex flex-col divide-y divide-border/50">
                      {chapterLessons.map((lesson) => {
                        const isCompleted = progressMap.get(lesson.id) ?? false;
                        
                        return (
                          <div 
                            key={lesson.id} 
                            className="flex items-center justify-between p-4 pl-6 sm:pl-20 hover:bg-secondary/30 transition-colors group"
                          >
                            <div className="flex items-center gap-4 flex-1">
                              <button
                                onClick={() => user && toggleMutation.mutate({ 
                                  userId: user.id, 
                                  lessonId: lesson.id, 
                                  completed: !isCompleted 
                                })}
                                disabled={toggleMutation.isPending}
                                className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                                  isCompleted 
                                    ? "bg-green-500 border-green-500 text-white" 
                                    : "border-muted-foreground/30 hover:border-primary"
                                }`}
                              >
                                {isCompleted && <CheckCircle2 className="w-4 h-4" />}
                              </button>
                              
                              <Link href={`/lesson/${lesson.id}`} className="flex-1 font-medium text-[15px] hover:text-primary transition-colors pr-4 py-2 block">
                                {lesson.title}
                              </Link>
                            </div>
                            
                            <Link href={`/lesson/${lesson.id}`} className="text-muted-foreground group-hover:text-primary transition-colors p-2">
                              <ChevronRight className="w-5 h-5" />
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
      
    </div>
  );
}
