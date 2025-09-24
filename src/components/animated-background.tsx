"use client";

import { motion } from "framer-motion";

// Floating gradient blobs that animate across the background
export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* Top-right purple/pink blob */}
      <motion.div
        className="blob-purple absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Left-side blue/purple blob */}
      <motion.div
        className="blob-blue absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/15 to-purple-500/15 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2, // Offset animation timing
        }}
      />

      {/* Bottom-right cyan/blue blob */}
      <motion.div
        className="blob-cyan absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Bottom-left pink/red blob */}
      <motion.div
        className="blob-pink absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-gradient-to-br from-pink-500/15 to-red-500/10 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 22,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}
