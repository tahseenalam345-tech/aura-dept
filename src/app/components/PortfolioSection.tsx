"use client";

import { motion } from 'motion/react';
import { ExternalLink, ArrowUpRight, Globe } from 'lucide-react';

// --- PROJECT DATA ---
const projects = [
  // 1. Aura Taste
  {
    title: "Aura Taste",
    category: "Web Application",
    description: "Premium food ordering interface with immersive visuals.",
    type: "iframe",
    link: "https://aura-taste.vercel.app/",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    color: "cyan"
  },
  // 2. Pharma Inventory
  {
    title: "Al-Azamat Pharma",
    category: "SaaS Dashboard",
    description: "Pharmacy management system with inventory tracking.",
    type: "iframe",
    link: "https://pharma-inventory-theta.vercel.app/",
    tech: ["React", "Node.js", "Real-time DB"],
    color: "purple"
  },
  // 3. AuraOS
  {
    title: "AuraOS Command",
    category: "System Architecture",
    description: "Advanced operations dashboard simulating a digital OS.",
    type: "iframe",
    link: "https://auraos-digital.vercel.app/",
    tech: ["Next.js", "Auth.js", "Dashboard UI"],
    color: "pink"
  },
  // 4. Aura Digital Agency
  {
    title: "Aura Digital Agency",
    category: "Web Development",
    description: "High-performance agency portfolio and lead funnel.",
    type: "iframe",
    link: "https://aura-digital-blond.vercel.app/",
    tech: ["React", "Tailwind CSS", "SEO"],
    color: "cyan"
  },
  // 5. Tech Accessories
  {
    title: "Tech Gear Store",
    category: "App Development",
    description: "Native mobile e-commerce app for tech accessories.",
    type: "iframe",
    link: "https://ecomerce-apps.web.app/",
    tech: ["Flutter", "Firebase", "Android/iOS"],
    color: "purple"
  },
  // 6. Fitness App
  {
    title: "FitTrack Pro",
    category: "App Development",
    description: "Personal workout planning and monitoring application.",
    type: "iframe",
    link: "https://fitnesssd-12wa.web.app/",
    tech: ["React Native", "Firebase", "Health API"],
    color: "pink"
  },
  // 7. MERN Food
  {
    title: "Urban Eats Delivery",
    category: "Full Stack Dev",
    description: "Complete food delivery platform with user auth.",
    type: "iframe",
    link: "https://mern-food-app-frontend-0meh.onrender.com/",
    tech: ["MongoDB", "Express", "React", "Node"],
    color: "cyan"
  },
  // 8. Aura Blueprint
  {
    title: "Project Blueprint",
    category: "Web Application",
    description: "Interactive project planning and visualization tool.",
    type: "iframe",
    link: "https://auradept-ang.vercel.app/",
    tech: ["Angular", "TypeScript", "Vercel"],
    color: "purple"
  },
  // 9. FILLER: Digital Marketing
  {
    title: "Nexus Growth Campaign",
    category: "Digital Marketing",
    description: "Strategic SEO campaign boosting traffic by 300%.",
    type: "image",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    tech: ["SEO", "Google Ads", "Analytics"],
    link: "#",
    color: "pink"
  },
  // 10. FILLER: AI Startup
  {
    title: "Visionary AI",
    category: "AI Integration",
    description: "Content generation tool powered by OpenAI API.",
    type: "image",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    tech: ["OpenAI API", "Python", "Next.js"],
    link: "#",
    color: "cyan"
  }
];

// STYLE MAPS
const tagStyles: any = {
  cyan: "bg-cyan-400 text-black hover:bg-cyan-300",
  purple: "bg-purple-400 text-black hover:bg-purple-300",
  pink: "bg-pink-500 text-black hover:bg-pink-400"
};

const buttonHoverStyles: any = {
  cyan: "hover:bg-cyan-600 hover:text-white hover:border-cyan-500",
  purple: "hover:bg-purple-600 hover:text-white hover:border-purple-500",
  pink: "hover:bg-pink-600 hover:text-white hover:border-pink-500"
};

const ProjectCard = ({ project, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative rounded-[2rem] bg-[#0B1221]/80 backdrop-blur-md border border-white/10 overflow-hidden flex flex-col h-[420px] hover:shadow-2xl hover:shadow-purple-900/20 transition-all duration-500"
    >
      
      {/* --- LIVE PREVIEW WINDOW --- */}
      <div className="relative h-48 flex-shrink-0 bg-gray-900 overflow-hidden border-b border-white/5">
        {project.type === 'iframe' ? (
          <iframe
            src={project.link}
            title={project.title}
            loading="lazy"
            className="absolute top-0 left-0 w-[400%] h-[400%] scale-[0.25] origin-top-left pointer-events-none border-0 bg-white" 
          />
        ) : (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        )}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
          <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-black/80 backdrop-blur-md border border-white/20 rounded-full text-white shadow-xl">
            {project.category}
          </span>
          {project.type === 'iframe' && (
             <span className="flex items-center gap-1 px-2 py-1 text-[10px] font-bold uppercase bg-red-600 backdrop-blur-md rounded-full text-white animate-pulse shadow-lg">
               <span className="w-1.5 h-1.5 bg-white rounded-full" /> Live
             </span>
          )}
        </div>
        <div className={`absolute inset-0 bg-${project.color}-900/10 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none`} />
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="p-5 flex flex-col flex-1 relative z-20 bg-[#0B1221]">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
            {project.title}
          </h3>
          <Globe className={`w-5 h-5 text-${project.color}-400 opacity-60`} />
        </div>
        <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t: string, i: number) => (
            <span 
              key={i} 
              className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md shadow-sm transition-colors ${tagStyles[project.color]}`}
            >
              {t}
            </span>
          ))}
        </div>
        <a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative overflow-hidden w-full py-3 rounded-xl bg-white/5 border border-white/5 text-gray-300 font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all group/btn ${buttonHoverStyles[project.color]}`}
        >
          <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-0" />
          <span className="relative z-10 flex items-center gap-2">
            <span>Open Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </span>
        </a>
      </div>
    </motion.div>
  );
};

export function PortfolioSection() {
  return (
    // FIX: Changed background to a very dark slate to make the grid pop
    <section id="portfolio" className="relative py-32 bg-[#020617] overflow-hidden">
      
      {/* ================= BACKGROUND MAGIC ================= */}
      
      {/* 1. VISIBLE Cyber Grid Overlay */}
      {/* changed opacity from 0.05 to 0.07 and used a bluish tint */}
      <div className="absolute inset-0 z-0 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(56, 189, 248, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.07) 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />
      
      {/* 2. Stronger Vignette (Makes center bright, edges dark) */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_80%)]" />

      {/* 3. Intense Breathing Nebulas */}
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1], 
          opacity: [0.3, 0.6, 0.3], // Increased opacity for visibility
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        // Added mix-blend-screen for glowing effect
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen" 
      />
      
      <motion.div 
        animate={{ 
          scale: [1.3, 1, 1.3], 
          opacity: [0.3, 0.6, 0.3], // Increased opacity for visibility
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-cyan-600/30 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen" 
      />

      {/* ================= END BACKGROUND ================= */}


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center text-center mb-24 space-y-6">
          <p className="text-lg md:text-xl font-extrabold tracking-[0.3em] text-purple-400 uppercase animate-pulse drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            AURA IN ACTION
          </p>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Digital Masterpieces
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full mt-4 blur-[1px]" />
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* CENTERED BUTTON */}
        <div className="text-center">
          <a href="#" className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] text-sm tracking-widest uppercase relative overflow-hidden group">
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0" />
            <span className="relative z-10 flex items-center gap-2">
                View All Projects <ExternalLink className="w-5 h-5" />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}