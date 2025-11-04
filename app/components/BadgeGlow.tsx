import { motion } from "framer-motion";
import { ReactNode } from "react";

export function BadgeGlow({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ boxShadow: "0 0 0px rgba(255, 215, 0, 0.0)" }}
      animate={{
        boxShadow: [
          "0 0 0px rgba(255, 215, 0, 0.0)",
          "0 0 12px rgba(255, 215, 0, 0.6)",
          "0 0 0px rgba(255, 215, 0, 0.0)",
        ],
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {children}
    </motion.div>
  );
}
