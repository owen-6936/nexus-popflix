// app/home/page.tsx
"use client";

import Button from "../components/Button";

export default function HomePage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center text-foreground bg-background px-4 py-20">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground">
        🎉 Welcome to Popflix
      </h1>
      <p className="mt-4 text-muted-foreground text-lg max-w-xl">
        You’ve unlocked your first milestone. Stream, tag, and celebrate
        contributor clarity.
      </p>
      <div className="mt-8">
        <Button variant="milestone" size="lg">
          Explore Milestones →
        </Button>
      </div>
    </section>
  );
}
