import { useState } from 'react';
import { motion } from 'motion/react';
import { Code, Smartphone, TrendingUp } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
  gradient: string;
}

const services: Service[] = [
  {
    title: 'Web Development',
    description: 'Cutting-edge web applications built with React, Next.js, and 3D WebGL for immersive user experiences.',
    icon: <Code className="w-8 h-8" />,
    technologies: ['React', 'Next.js', 'TypeScript', 'WebGL'],
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    title: 'App Development',
    description: 'Native iOS and Android applications with Flutter for seamless cross-platform performance.',
    icon: <Smartphone className="w-8 h-8" />,
    technologies: ['iOS', 'Android', 'Flutter', 'React Native'],
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven SEO strategies, content creation, and growth marketing to scale your brand.',
    icon: <TrendingUp className="w-8 h-8" />,
    technologies: ['SEO', 'Content Marketing', 'Analytics', 'Growth'],
    gradient: 'from-pink-600 to-orange-600',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-[#020617] to-black">
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
            Our{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We combine creativity, technology, and strategy to deliver exceptional results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
      className="group relative p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-white/20 cursor-pointer overflow-hidden"
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-xl mb-6 text-white`}
        >
          {service.icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl text-white mb-4">{service.title}</h3>

        {/* Description */}
        <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {service.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-full border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Packages Button */}
        <motion.button
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="mt-6 w-full py-2 bg-white/10 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity border border-white/20 hover:bg-white/20"
        >
          View Packages
        </motion.button>
      </div>
    </motion.div>
  );
}
