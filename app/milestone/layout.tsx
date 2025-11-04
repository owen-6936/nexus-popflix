import type { ReactNode } from "react";

export default function MilestoneLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      {/* Optional: Add badge pulse or milestone nav */}
      {children}
    </main>
  );
}
