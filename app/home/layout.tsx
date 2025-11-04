// app/home/layout.tsx
import type { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      {/* Optional: Add a navbar or badge pulse here */}
      {children}
    </main>
  );
}
