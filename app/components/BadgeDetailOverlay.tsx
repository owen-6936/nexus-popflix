"use client";

import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/Button";

type Props = {
  badge: {
    id: string;
    title: string;
    description: string;
    unlocked: boolean;
    date?: string;
  };
  onClose: () => void;
};

export function BadgeDetailOverlay({ badge, onClose }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
      >
        <motion.div
          className="relative w-full max-w-md p-6 bg-glass text-foreground rounded-lg radius shadow-xl border border-border"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Badge Header */}
          <h2 className="text-2xl font-bold text-milestone-foreground text-center">
            {badge.title}
          </h2>
          <p className="mt-2 text-muted-foreground text-sm text-center">
            {badge.description}
          </p>

          {/* Badge Metadata */}
          {badge.date && (
            <p className="mt-4 text-xs text-muted-foreground text-center">
              Unlocked on {badge.date}
            </p>
          )}

          {/* Footer */}
          <div className="mt-6 flex justify-center">
            <Button variant="badge" onClick={onClose}>
              Back to Timeline
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
