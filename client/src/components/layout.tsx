import React from "react";
import { useAuthContext } from "@/lib/auth-context";
import { LogOut, BookOpen, GraduationCap } from "lucide-react";
import { Link } from "wouter";

export function Layout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuthContext();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 text-primary hover:opacity-80 transition-opacity">
            <div className="bg-primary/10 p-2 rounded-xl">
              <GraduationCap className="h-6 w-6" />
            </div>
            <span className="font-sans font-bold text-xl tracking-tight hidden sm:inline-block">
              Principia
            </span>
          </Link>

          {user && (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {user.username}
              </div>
              <button
                onClick={logout}
                className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-xl transition-colors duration-200"
                aria-label="Logout"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {children}
      </main>

      <footer className="border-t border-border/50 py-8 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span>OpenStax College Physics</span>
          </div>
          <p>© {new Date().getFullYear()} Principia Study Guide. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
