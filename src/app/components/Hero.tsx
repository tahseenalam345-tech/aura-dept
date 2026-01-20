import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

// --- RESPONSIVE WAVY TEXT COMPONENT ---
const WavyText = ({ text, isGradient = false }: { text: string, isGradient?: boolean }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: 'center' }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          // DESKTOP: Bounces when Mouse Hovers
          whileHover={{ y: -10 }} 
          // MOBILE: Bounces when Finger Taps
          whileTap={{ y: -10 }}
          className={`inline-block ${
            isGradient 
            ? "bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent" 
            : "text-white"
          }`}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
      
      {/* --- BACKGROUND START --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-60 mix-blend-screen">
           {/* UPDATED: Points to .png now */}
           <img 
              src="/waves-bg.jpg" 
              alt="Background Waves" 
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
           />
        </div>
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-[#020617]/80 to-[#020617]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
      </div>
      {/* --- BACKGROUND END --- */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 md:space-y-8 pt-10 md:pt-0">
          
          {/* 1. TAGLINE */}
          <motion.p 
            animate={{ opacity: [0.4, 1, 0.4] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-xs md:text-base tracking-[0.2em] md:tracking-[0.3em] text-purple-400 uppercase font-bold"
          >
            Welcome to the Future
          </motion.p>

          {/* 2. HEADLINE */}
          <div className="cursor-default">
             <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight font-bold mb-2">
                <WavyText text="YOUR BRAND" isGradient={false} />
             </div>
             
             <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight font-bold pb-2">
                 <WavyText text="YOUR AURA" isGradient={true} />
             </div>
          </div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-base md:text-xl max-w-lg md:max-w-2xl mx-auto leading-relaxed px-2"
          >
            We craft stunning web experiences, powerful mobile applications, and data-driven
            marketing strategies that elevate your brand to new heights.
          </motion.p>

          {/* 3. BUTTONS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 md:pt-8"
          >
            {/* View Our Work: Added 'active:' classes for mobile touch response */}
            <a
              href="#portfolio"
              className="w-full sm:w-auto group px-8 py-4 bg-white text-black rounded-full inline-flex justify-center items-center gap-2 font-bold transition-all duration-300 hover:bg-purple-600 hover:text-white hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] active:bg-purple-600 active:text-white"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Collab: Added 'active:' classes for mobile touch response */}
            <a
              href="https://wa.me/923369871278"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 border-2 border-white/20 text-white rounded-full inline-flex justify-center items-center gap-2 hover:border-purple-500 hover:bg-purple-500/10 transition-all font-medium active:bg-purple-500/10 active:border-purple-500"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Collab with us</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator (Hidden on Mobile) */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}