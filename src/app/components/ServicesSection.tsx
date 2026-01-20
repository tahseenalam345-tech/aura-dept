"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { RefreshCcw, Layers, Cpu, Rocket, CheckCircle2 } from 'lucide-react';

const ServiceCard = ({ service }: any) => {
  // ... (Component logic remains exactly the same)
  const { color, front, back, gradient, glowColor, hoverTextColor } = service;
  
  // STATE: Controls the flip for BOTH Mouse and Touch
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group h-[500px] w-full [perspective:1500px] cursor-pointer"
      // 1. DESKTOP: Mouse Enter/Leave
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      
      // 2. MOBILE: Touch Start/End (The "Hold" Logic)
      onTouchStart={() => setIsFlipped(true)}
      onTouchEnd={() => setIsFlipped(false)}
    >
      
      {/* FLIP WRAPPER */}
      <div 
        className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
      >
        
        {/* ================= FRONT FACE ================= */}
        <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] rounded-[2rem] bg-[#0B1221] border border-white/5 p-8 flex flex-col items-center justify-center text-center overflow-hidden shadow-2xl shadow-black/50">
          
          {/* ICON GLOW */}
          <div className={`absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 ${glowColor} blur-[35px] opacity-60 rounded-xl pointer-events-none`} />

          {/* BREATHING ICON */}
          <motion.div
            animate={{ y: [-8, 8, -8] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 mb-6"
          >
            <img 
              src={front.image} 
              alt={front.title} 
              className="w-32 h-32 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
            />
          </motion.div>

          {/* Title */}
          <h3 className="relative z-10 text-3xl font-bold text-white mb-4 tracking-tight">
            {front.title}
          </h3>
          
          {/* Description */}
          <p className="relative z-10 text-gray-400 text-sm font-medium leading-relaxed max-w-[260px] mx-auto mb-6">
            {front.description}
          </p>

          {/* Bottom Cue */}
          <div className="relative z-10 flex items-center gap-2 mt-2">
            <span className={`text-[10px] font-extrabold tracking-[0.15em] uppercase ${hoverTextColor} drop-shadow-[0_0_8px_rgba(0,0,0,1)]`}>
              HOVER FOR DETAILS
            </span>
            <RefreshCcw className={`w-3.5 h-3.5 ${hoverTextColor} animate-spin-slow drop-shadow-[0_0_5px_currentColor]`} />
          </div>
        </div>


        {/* ================= BACK FACE ================= */}
        <div 
          // The 'gradient' variable now holds the darker, richer colors
          className={`absolute inset-0 h-full w-full rounded-[2rem] p-8 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center ${gradient}`}
        >
          
          <div className="flex flex-col items-center gap-3 mb-8">
            <back.headerIcon className="w-8 h-8 text-white/90" />
            <h4 className="text-2xl font-bold text-white tracking-wide">
              {back.header}
            </h4>
          </div>

          <ul className="space-y-4 w-full px-4 mb-8">
            {back.items.map((item: string, i: number) => (
              <li key={i} className="flex items-center gap-3 text-left">
                <CheckCircle2 className="w-5 h-5 text-white/80 flex-shrink-0" />
                <span className="text-sm font-semibold text-white/90">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <a href="#pricing" className="w-full py-3.5 rounded-xl bg-white text-black font-extrabold text-sm tracking-wide shadow-lg hover:bg-gray-100 hover:scale-105 transition-all flex items-center justify-center gap-2">
            View Packages
          </a>

        </div>

      </div>
    </div>
  );
};

export function ServicesSection() {
  const services = [
    {
      color: "cyan",
      glowColor: "bg-cyan-500",
      hoverTextColor: "text-cyan-400",
      // UPDATED GRADIENT: Deeper Cyan/Teal fading to almost black
      gradient: "bg-gradient-to-br from-[#00384d] via-[#001a2c] to-[#020617] border border-cyan-500/20", 
      front: {
        image: "/web-icon.png", 
        title: "Web Development",
        description: "Next-gen websites built for performance and scale.",
      },
      back: {
        header: "Stack & Tech",
        headerIcon: Layers,
        items: [
          "React / Next.js / Vue",
          "3D WebGL (Three.js)",
          "Headless CMS Integration",
          "SEO Optimization"
        ]
      }
    },
    {
      color: "purple",
      glowColor: "bg-purple-600",
      hoverTextColor: "text-purple-400",
      // UPDATED GRADIENT: Deeper, richer Purple fading to almost black
      gradient: "bg-gradient-to-br from-[#320a5c] via-[#1a0536] to-[#020617] border border-purple-500/20", 
      front: {
        image: "/app-icon.png", 
        title: "App Development",
        description: "Native and cross-platform mobile experiences.",
      },
      back: {
        header: "Capabilities",
        headerIcon: Cpu,
        items: [
          "iOS & Android (Flutter/RN)",
          "Custom API Development",
          "UI/UX Mobile Design",
          "App Store Optimization"
        ]
      }
    },
    {
      color: "pink",
      glowColor: "bg-pink-600",
      hoverTextColor: "text-pink-400",
      // UPDATED GRADIENT: Deeper Ruby/Pink fading to almost black
      gradient: "bg-gradient-to-br from-[#5c0a28] via-[#360518] to-[#020617] border border-pink-500/20", 
      front: {
        image: "/marketing-icon.png", 
        title: "Digital Marketing",
        description: "Data-driven strategies to amplify your aura.",
      },
      back: {
        header: "Growth Tools",
        headerIcon: Rocket,
        items: [
          "SEO & SEM Strategy",
          "Social Media Management",
          "Content Creation",
          "Analytics & Reporting"
        ]
      }
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-[#020617] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-blue-900/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-20 space-y-4">
          <p className="text-xs font-bold tracking-[0.2em] text-blue-400 uppercase mb-2">
            WHAT WE OFFER
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            Our Expertise
          </h2>
        </div>

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-3 gap-8 px-4 md:px-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}