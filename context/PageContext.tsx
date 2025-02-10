// context/PageContext.tsx
"use client";

import { createContext, ReactNode, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

// Context
const PageContext = createContext({
  pathname: "",
});

export const PageProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <PageContext.Provider value={{ pathname }}>
   <AnimatePresence mode="wait">
  <motion.div
    key={pathname}
    initial={{ opacity: 0 }} // Start the page invisible
    animate={{ opacity: 1 }} // Fade in to fully visible
    exit={{ opacity: 1 }} // Fade out to invisible
    transition={{
      duration: 0.8, // Adjust duration for smoothness
      ease: "easeInOut", // Smooth easing for professional effect
    }}
  >
    {children}
  </motion.div>
</AnimatePresence>
</PageContext.Provider>
  );
};

export const usePage = () => useContext(PageContext);
