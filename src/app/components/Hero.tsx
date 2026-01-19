import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
      
      {/* --- BACKGROUND START --- */}
      <div className="absolute inset-0 z-0">
        {/* 1. This puts the Wave Image in the background.
           Make sure you have a file named 'waves-bg.png' in your 'public' folder. 
           You can change opacity-50 to make it brighter or darker.
        */}
        <div className="absolute inset-0 opacity-60 mix-blend-screen">
            {/* If you don't have the image yet, this div below acts as a placeholder 
              with a subtle gradient so it's not pitch black. 
            */}
           <Image 
              src="/waves-bg.png" 
              alt="Background Waves" 
              fill
              className="object-cover"
              priority
           />
        </div>

        {/* Optional: We keep a subtle purple glow behind the text to make it pop, 
            even with the image. */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#020617]/50 to-[#020617]" />
      </div>
      {/* --- BACKGROUND END --- */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-8"
        >
          {/* Tagline */}
          <p className="text-sm md:text-base tracking-[0.3em] text-purple-400 uppercase">
            Welcome to the Future
          </p>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight font-bold">
            <span className="text-white">YOUR BRAND</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              YOUR AURA
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We craft stunning web experiences, powerful mobile applications, and data-driven
            marketing strategies that elevate your brand to new heights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#portfolio"
              className="group px-8 py-4 bg-white text-black rounded-full inline-flex items-center gap-2 hover:bg-gray-200 transition-all"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/923369871278"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white/20 text-white rounded-full inline-flex items-center gap-2 hover:border-purple-500 hover:bg-purple-500/10 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Collab with us</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}