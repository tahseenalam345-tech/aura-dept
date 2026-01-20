import { motion } from 'motion/react';
import { Rocket, Palette, Laptop, Handshake } from 'lucide-react';

// --- FOUNDER CARD COMPONENT (Unchanged) ---
const FounderCard = ({ name, role, quote, image, tags, color, glowColor, delay }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="group relative h-full"
    >
      {/* CARD CONTAINER */}
      <div className="relative h-full bg-[#0B1221] border border-white/5 rounded-[2rem] p-8 overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-black/50">
        
        {/* GLASS SHINE EFFECT */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shine z-0 pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          
          {/* PROFILE PICTURE */}
          <div className="relative flex-shrink-0 mt-4">
            <div className={`absolute inset-0 rounded-full blur-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 scale-150 translate-y-2 ${glowColor}`} />
            
            <div className="relative w-32 h-32 translate-y-2 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-white/50 transition-colors duration-500 bg-black">
               <img 
                 src={image} 
                 alt={name} 
                 className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-110"
               />
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="text-2xl font-bold text-white">{name}</h3>
              <p className={`text-sm font-bold tracking-wide ${color}`}>{role}</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-white/10 pl-4 italic">"{quote}"</p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-2">
              {tags.map((tag: string, i: number) => (
                <span key={i} className="px-3 py-1 text-[10px] uppercase tracking-wider font-semibold text-gray-300 bg-white/5 rounded-full border border-white/5 group-hover:bg-white/10 transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function FoundersSection() {
  const founders = [
    {
      name: "Muhammad Tahseen Alam",
      role: "Co-Founder & Lead Developer",
      quote: "Code is poetry that performs. I architect robust, scalable systems where visuals are backed by rock-solid technology.",
      image: "/tahseenpic.png", 
      tags: ["Full Stack", "System Arch", "Next.js"],
      color: "text-cyan-400",    
      glowColor: "bg-cyan-500",  
    },
    {
      name: "Saad Hameed",
      role: "Co-Founder & Creative Director",
      quote: "Design is the silent ambassador of your brand. I specialize in brand identity and immersive UI experiences.",
      image: "/saadpic.png",    
      tags: ["UI/UX", "Strategy", "Visuals"],
      color: "text-purple-400",   
      glowColor: "bg-purple-500", 
    },
  ];

  return (
    <section id="founders" className="relative py-24 bg-[#020617] overflow-hidden">
      
      {/* --- VIBRANT BACKGROUND (Cyberpunk Glows) --- */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-[#020617]/40 pointer-events-none" />


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            The Visionaries
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The minds behind the aura. Merging strategy with code to redefine digital boundaries.
          </p>
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {founders.map((founder, index) => (
            <FounderCard 
              key={index} 
              {...founder} 
              delay={index * 0.2} 
            />
          ))}
        </div>

        {/* --- BOTTOM TAGS STRIP (Updated) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/5 pt-12 opacity-80"
        >
          {/* 1. Modern Digital Agency */}
          <div className="flex items-center gap-3 text-white font-semibold hover:text-cyan-400 transition-colors cursor-default">
            <Rocket className="w-6 h-6 text-purple-500" />
            <span>Modern Digital Agency</span>
          </div>
          
          {/* 2. UI/UX & Visual Design */}
          <div className="flex items-center gap-3 text-white font-semibold hover:text-pink-400 transition-colors cursor-default">
            <Palette className="w-6 h-6 text-pink-500" />
            <span>UI/UX & Visual Design</span>
          </div>
          
          {/* 3. Full-Stack Development */}
          <div className="flex items-center gap-3 text-white font-semibold hover:text-blue-400 transition-colors cursor-default">
            <Laptop className="w-6 h-6 text-blue-500" />
            <span>Full-Stack Development</span>
          </div>
          
          {/* 4. Client-Focused Approach */}
          <div className="flex items-center gap-3 text-white font-semibold hover:text-green-400 transition-colors cursor-default">
            <Handshake className="w-6 h-6 text-green-500" />
            <span>Client-Focused Approach</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}