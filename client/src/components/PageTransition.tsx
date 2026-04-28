import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  /**
   * Distinct key per route. Driving this from the wouter location forces a
   * fresh enter animation whenever the URL changes.
   */
  routeKey: string;
}

/**
 * Wrap the active route in this so each navigation softly fades + slides in.
 * Skips the animation entirely for users that prefer reduced motion (handled
 * upstream via prefers-reduced-motion in framer-motion's defaults).
 */
export function PageTransition({ children, routeKey }: PageTransitionProps) {
  return (
    <motion.div
      key={routeKey}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
