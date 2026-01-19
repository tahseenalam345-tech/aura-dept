import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface Founder {
  name: string;
  title: string;
  quote: string;
  skills: string[];
  image: string;
}

const founders: Founder[] = [
  {
    name: 'Tahseen Alam',
    title: 'Tech Lead & Co-Founder',
    quote: 'Innovation is not just about technology—it\'s about creating experiences that resonate.',
    skills: ['Full Stack', 'AI/ML', 'Cloud Architecture'],
    image: 'https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZGV2ZWxvcGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4ODI0NDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Sarah Chen',
    title: 'Strategy Director & Co-Founder',
    quote: 'Great brands are built on clarity of vision and the courage to stand out.',
    skills: ['Brand Strategy', 'Growth Marketing', 'UX Design'],
    image: 'https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjZW8lMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njg4MTgyNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function FoundersSection() {
  return (
    <section id="founders" className="relative py-24 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            The{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Visionaries
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <FounderCard key={founder.name} founder={founder} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FounderCardProps {
  founder: Founder;
  index: number;
}

function FounderCard({ founder, index }: FounderCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group relative p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-300" />

      <div className="relative z-10">
        {/* Image */}
        <div className="mb-6 flex justify-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-purple-500/20 group-hover:ring-purple-500/50 transition-all">
            <ImageWithFallback
              src={founder.image}
              alt={founder.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name & Title */}
        <div className="text-center mb-4">
          <h3 className="text-2xl text-white mb-1">{founder.name}</h3>
          <p className="text-purple-400">{founder.title}</p>
        </div>

        {/* Quote */}
        <p className="text-gray-400 italic text-center mb-6 leading-relaxed">
          "{founder.quote}"
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 justify-center">
          {founder.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-purple-500/10 text-purple-300 text-sm rounded-full border border-purple-500/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
