import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

type ProjectCategory = 'All' | 'Web' | 'App';

interface Project {
  id: number;
  title: string;
  category: 'Web' | 'App';
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2ODgxNjQ1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Next-gen shopping experience with AI recommendations',
  },
  {
    id: 2,
    title: 'Fitness Tracking App',
    category: 'App',
    image: 'https://images.unsplash.com/photo-1762768767074-e491f1eebdfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2ODgyNDQwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Comprehensive health and fitness companion',
  },
  {
    id: 3,
    title: 'Corporate Website',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1630522790545-67ad2cb700fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwbW9ja3VwfGVufDF8fHx8MTc2ODgwMDk3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Modern corporate presence with interactive elements',
  },
  {
    id: 4,
    title: 'Social Media App',
    category: 'App',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY4NzgzMzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Connect and share with beautiful UI/UX',
  },
];

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Aura in{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of successful projects and case studies.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {(['All', 'Web', 'App'] as ProjectCategory[]).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all cursor-pointer"
    >
      {/* Project Image */}
      <ImageWithFallback
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-2"
        >
          <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
            {project.category}
          </span>
          <h3 className="text-2xl text-white">{project.title}</h3>
          <p className="text-gray-300">{project.description}</p>

          {/* View Case Study Button */}
          <button className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-200">
            <span>View Case Study</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
