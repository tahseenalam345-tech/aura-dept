import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface IntroAnimationProps {
  onComplete: () => void;
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const fullText = "AURA DEPT";
  
  // ANIMATION TIMING
  const totalDuration = 3.5; // Total time for bar to fill
  const letterDelay = 0.3;   // Slower spacing between letters (was 0.15)
  const startDelay = 0.5;    // Initial pause before starting

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: letterDelay, // Slower typing speed
        delayChildren: startDelay,    
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 15, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2, // Slower fade-in for each letter
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  useEffect(() => {
    // Wait for animation + small buffer before closing
    const timer = setTimeout(() => {
      onComplete();
    }, (totalDuration * 1000) + 800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="intro"
        initial={{ opacity: 1 }}
        exit="exit"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black px-4"
      >
        <div className="flex flex-col items-center gap-12">
          
          {/* TEXT */}
          <motion.div
            className="flex overflow-hidden text-3xl md:text-7xl font-light tracking-[0.2em] md:tracking-[0.3em] text-white whitespace-nowrap"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {fullText.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>

          {/* PROGRESS BAR */}
          <div className="w-64 md:w-96 h-[2px] bg-gray-900 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: totalDuration, 
                ease: "easeInOut", // Starts slow, speeds up, slows down
                delay: startDelay 
              }}
            />
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}