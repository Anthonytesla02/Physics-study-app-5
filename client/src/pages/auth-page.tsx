import React, { useState } from "react";
import { useLogin } from "@/hooks/use-auth";
import { Atom, Loader2, Sparkles } from "lucide-react";

export default function AuthPage() {
  console.log("Rendering AuthPage");
  const [username, setUsername] = useState("");
  const loginMutation = useLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;
    loginMutation.mutate(username.trim());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] dark:bg-slate-950 p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/30 rounded-full blur-3xl opacity-50" />

      <div className="w-full max-w-md bg-card rounded-[2rem] p-8 sm:p-10 shadow-2xl shadow-black/5 border border-border/50 relative z-10">
        <div className="flex justify-center mb-8">
          <div className="bg-primary/10 p-4 rounded-3xl rotate-12 hover:rotate-0 transition-transform duration-500">
            <Atom className="w-12 h-12 text-primary" />
          </div>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold font-sans tracking-tight text-foreground">
            Principia
          </h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Your interactive physics companion. Sign in or create an account to track your mastery.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-semibold text-foreground px-1 block">
              Username
            </label>
            <input
              id="username"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. isaac_newton"
              className="w-full px-5 py-3.5 rounded-2xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300"
            />
          </div>

          <button
            type="submit"
            disabled={loginMutation.isPending || !username.trim()}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none transition-all duration-300 ease-out"
          >
            {loginMutation.isPending ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <>
                Start Learning
                <Sparkles className="h-5 w-5" />
              </>
            )}
          </button>
        </form>

        {loginMutation.isError && (
          <div className="mt-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm text-center">
            {loginMutation.error instanceof Error ? loginMutation.error.message : "Authentication failed"}
          </div>
        )}
      </div>
    </div>
  );
}
