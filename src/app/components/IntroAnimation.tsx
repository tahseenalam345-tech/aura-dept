import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface IntroAnimationProps {
  onComplete: () => void;
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [progress, setProgress] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const fullText = 'AURA DEPT';
  const duration = 3000; // 3 seconds total

  useEffect(() => {
    const charDuration = duration / fullText.length;
    
    // Typewriter effect
    fullText.split('').forEach((char, index) => {
      setTimeout(() => {
        setDisplayText(prev => prev + char);
        setProgress(((index + 1) / fullText.length) * 100);
      }, charDuration * index);
    });

    // Trigger completion
    setTimeout(() => {
      onComplete();
    }, duration + 500);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      >
        <div className="flex flex-col items-center gap-8">
          {/* Text */}
          <motion.div
            className="text-5xl md:text-7xl tracking-[0.3em] text-white font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {displayText}
          </motion.div>

          {/* Progress Bar Container */}
          <div className="w-80 md:w-96 h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
