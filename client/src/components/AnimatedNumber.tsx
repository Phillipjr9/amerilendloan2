import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useTransform } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  format?: (n: number) => string;
  className?: string;
}

/**
 * Counts up from 0 to `value` once it scrolls into view. Uses framer-motion's
 * spring-friendly animate() so the number eases naturally instead of snapping.
 */
export function AnimatedNumber({
  value,
  duration = 1.1,
  format = (n) => Math.round(n).toLocaleString(),
  className,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const motionValue = useMotionValue(0);
  const display = useTransform(motionValue, (v) => format(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, value, duration, motionValue]);

  // When value changes after the initial run-up (e.g. data refetch), animate to
  // the new value from wherever we currently are.
  useEffect(() => {
    if (!inView) return;
    const current = motionValue.get();
    if (current === value) return;
    const controls = animate(motionValue, value, {
      duration: 0.6,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [value, inView, motionValue]);

  // Subscribe to the transformed string and write to the span. Avoids a
  // re-render every frame.
  useEffect(() => {
    return display.on("change", (latest) => {
      if (ref.current) ref.current.textContent = latest;
    });
  }, [display]);

  return (
    <span ref={ref} className={className}>
      {format(0)}
    </span>
  );
}

export default AnimatedNumber;
