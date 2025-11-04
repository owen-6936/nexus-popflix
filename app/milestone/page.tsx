"use client";

import { BadgeTimeline } from "../components/BadgeTimeline";

export default function MilestonePage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center text-foreground bg-background px-4 py-20">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-milestone-foreground">
        🌟 Milestone Unlocked
      </h1>
      <p className="mt-4 text-muted-foreground text-lg max-w-xl">
        You’ve completed your first setup step. Your contributor arc begins
        here.
      </p>
      <BadgeTimeline />
    </section>
  );
}
