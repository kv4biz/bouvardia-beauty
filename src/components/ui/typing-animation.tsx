"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
  text,
  duration = 200,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);

  // Create a ref for the element
  const ref = useRef<HTMLHeadingElement>(null);

  // Use useInView hook with the ref
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    // Start the typing effect only when the element is in view
    if (inView) {
      const typingEffect = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.substring(0, i + 1));
          setI(i + 1);
        } else {
          clearInterval(typingEffect);
        }
      }, duration);

      return () => {
        clearInterval(typingEffect);
      };
    }
  }, [inView, text, duration, i]);

  return (
    <motion.h1
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className
      )}
    >
      {displayedText ? displayedText : text}
    </motion.h1>
  );
}
