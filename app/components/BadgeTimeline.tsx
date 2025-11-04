"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { BadgeDetailOverlay } from "./BadgeDetailOverlay";

type Badge = {
  id: string;
  title: string;
  description: string;
  unlocked: boolean;
  date?: string;
};

const badges: Badge[] = [
  {
    id: "setup",
    title: "🎬 Account Setup",
    description: "Completed your first onboarding step",
    unlocked: true,
    date: "Nov 4, 2025",
  },
  {
    id: "first-contribution",
    title: "📦 First Contribution",
    description: "Submitted your first review or tag",
    unlocked: true,
    date: "Nov 5, 2025",
  },
  {
    id: "milestone-glow",
    title: "🌟 Milestone Glow",
    description: "Reached a contributor milestone",
    unlocked: false,
  },
  {
    id: "velocity",
    title: "⚡ Contributor Velocity",
    description: "Maintained consistent commit activity",
    unlocked: false,
  },
  {
    id: "clarity-core",
    title: "🧠 Clarity Core",
    description: "Built a contributor-friendly UI system",
    unlocked: false,
  },
];

export function BadgeTimeline() {
  const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);

  return (
    <div className="w-full max-w-2xl mx-auto mt-12 space-y-6">
      {badges.map((badge, index) => {
        const isUnlocked = badge.unlocked;

        return (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: isUnlocked ? 1.02 : 1 }}
            onClick={() => {
              if (isUnlocked) setSelectedBadge(badge);
            }}
            className={cn(
              "p-4 rounded-md radius-sm border transition-all",
              isUnlocked
                ? "glass-dark border-border shadow-md cursor-pointer"
                : "bg-muted text-muted-foreground border-muted cursor-default"
            )}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{badge.title}</h3>
              {isUnlocked && (
                <span className="text-xs font-medium text-card-foreground">
                  {badge.date}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm">{badge.description}</p>
          </motion.div>
        );
      })}

      {selectedBadge && (
        <BadgeDetailOverlay
          badge={selectedBadge}
          onClose={() => setSelectedBadge(null)}
        />
      )}
    </div>
  );
}
