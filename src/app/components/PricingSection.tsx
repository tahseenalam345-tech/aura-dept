import { motion } from 'motion/react';
import { Check, Star } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$2,999',
    description: 'Perfect for startups and small businesses',
    features: [
      '5-page responsive website',
      'Basic SEO optimization',
      'Mobile-friendly design',
      '1 month support',
      'Stock images included',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Business',
    price: '$7,999',
    description: 'Ideal for growing companies',
    features: [
      'Custom web application',
      'Advanced SEO & Analytics',
      'CMS integration',
      '3 months support',
      'Custom illustrations',
      'Performance optimization',
      'A/B testing setup',
    ],
    highlighted: true,
    cta: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations',
    features: [
      'Full-stack development',
      'Dedicated team',
      'Unlimited revisions',
      '12 months support',
      'White-label solutions',
      'Advanced integrations',
      'Priority support',
    ],
    cta: 'Contact Sales',
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 bg-gradient-to-b from-black to-[#020617]">
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
            Choose Your{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Plan
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Select the plan that fits your needs.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

function PricingCard({ plan, index }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={{ y: -8, scale: plan.highlighted ? 1.05 : 1 }}
      className={`relative p-8 rounded-2xl backdrop-blur-lg transition-all duration-300 ${
        plan.highlighted
          ? 'bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-2 border-purple-500 md:scale-105'
          : 'bg-white/5 border border-white/10 hover:border-white/20'
      }`}
    >
      {/* Popular Badge */}
      {plan.highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-1 px-4 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm rounded-full">
            <Star className="w-3 h-3 fill-white" />
            <span>Most Popular</span>
          </div>
        </div>
      )}

      {/* Plan Name */}
      <h3 className="text-2xl text-white mb-2">{plan.name}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

      {/* Price */}
      <div className="mb-8">
        <span className="text-5xl text-white">{plan.price}</span>
        {plan.price !== 'Custom' && <span className="text-gray-400 ml-2">/ project</span>}
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-gray-300">
            <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a
        href="https://wa.me/923369871278"
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full py-3 text-center rounded-lg transition-all ${
          plan.highlighted
            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500'
            : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
        }`}
      >
        {plan.cta}
      </a>
    </motion.div>
  );
}
