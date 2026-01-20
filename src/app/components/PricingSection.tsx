"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ChevronDown, Smartphone, Megaphone, Server } from 'lucide-react';

// --- PLANS DATA ---
const plans = [
  {
    name: "Spark",
    price: "40,000",
    period: "PKR",
    description: "Perfect for startups & personal portfolios.",
    color: "cyan",
    features: [
      "1-5 Pages Static Website",
      "Mobile & Desktop Friendly",
      "Admin Panel (Limited)",
      "Contact Form Integration",
      "Free Hosting & SSL",
      "1 Month Support"
    ]
  },
  {
    name: "Nexus",
    price: "80,000",
    period: "PKR",
    description: "Growth engine for modern businesses.",
    color: "purple",
    popular: true, 
    features: [
      "Up to 10 Pages Dynamic Site",
      "Custom Modern Design",
      "Full Admin Panel (Edit All)",
      "Free Database Integration",
      "WhatsApp Button Included",
      "3 Months Support"
    ]
  },
  {
    name: "Infinity",
    price: "120,000",
    period: "PKR",
    description: "Complete digital empire with no limits.",
    color: "pink",
    features: [
      "Full 3D / WebGL Website",
      "Complex Web App System",
      "User Login & Dashboard",
      "Real-time Database",
      "Domain Included (1 Year)",
      "6 Months Priority Support"
    ]
  }
];

const addons = [
  {
    category: "Mobile Apps",
    icon: Smartphone,
    items: [
      { name: "PlayStore App (WebView)", price: "5,000 PKR", type: "One Time" },
      { name: "iOS App (Apple Store)", price: "25,000 PKR", type: "Per Year" }
    ]
  },
  {
    category: "Digital Marketing",
    icon: Megaphone,
    items: [
      { name: "Starter Ads (3 Ads)", price: "10,000 PKR", type: "Monthly" },
      { name: "Growth Ads (6 Ads)", price: "15,000 PKR", type: "Monthly" },
      { name: "Pro Ads (9 Ads)", price: "20,000 PKR", type: "Monthly" }
    ]
  },
  {
    category: "Tech Essentials",
    icon: Server,
    items: [
      { name: "Custom Domain (.com)", price: "5,000 PKR", type: "Per Year" },
      { name: "Dedicated Database", price: "5,000 PKR", type: "Per Month" }
    ]
  }
];

// STYLE CONFIGURATION
const colorStyles: any = {
  cyan: {
    cardBorder: "border-cyan-500",
    glow: "shadow-[0_0_40px_-10px_rgba(6,182,212,0.6)]",
    button: "bg-cyan-500 text-black hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]",
    text: "text-cyan-400"
  },
  purple: {
    cardBorder: "border-purple-500",
    glow: "shadow-[0_0_40px_-10px_rgba(168,85,247,0.6)]",
    button: "bg-purple-600 text-white hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]",
    text: "text-purple-400"
  },
  pink: {
    cardBorder: "border-pink-500",
    glow: "shadow-[0_0_40px_-10px_rgba(236,72,153,0.6)]",
    button: "bg-pink-600 text-white hover:bg-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]",
    text: "text-pink-400"
  }
};

export function PricingSection() {
  const [showAddons, setShowAddons] = useState(false);

  // --- SMART SCROLL FUNCTION ---
  const handleSelectPlan = (planName: string) => {
    // 1. Dispatch a custom event that the Contact Form will listen to
    const event = new CustomEvent('planSelected', { detail: planName });
    window.dispatchEvent(event);

    // 2. Smooth Scroll to Contact Section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="relative py-24 bg-[#020617] overflow-hidden">
      
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#020617] via-transparent to-[#020617] z-10"></div>
          <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase mb-2 animate-pulse">
            INVEST IN YOUR FUTURE
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            Transparent Pricing
          </h2>
        </div>

        {/* --- PRICING CARDS --- */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 px-4 md:px-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              
              className={`relative rounded-[1.5rem] p-6 border-2 bg-[#0B1221] flex flex-col items-center text-center h-auto
                ${colorStyles[plan.color].cardBorder} ${colorStyles[plan.color].glow}
              `}
            >
              <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">
                {plan.name}
              </h3>
              
              <div className="flex items-baseline justify-center gap-1 mb-4">
                <span className="text-3xl font-extrabold text-white">{plan.price}</span>
                <span className="text-sm font-bold text-gray-500">{plan.period}</span>
              </div>

              <div className={`w-12 h-1 rounded-full mb-6 ${plan.color === 'cyan' ? 'bg-cyan-500' : plan.color === 'purple' ? 'bg-purple-500' : 'bg-pink-500'}`} />

              <ul className="space-y-3 mb-8 w-full">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center gap-2 text-sm text-gray-300 font-medium">
                    <Check className={`w-4 h-4 ${colorStyles[plan.color].text}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* SMART BUTTON (No Refresh) */}
              <button
                onClick={() => handleSelectPlan(plan.name)}
                className={`w-full py-3 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 transform hover:scale-105 shadow-lg block
                  ${colorStyles[plan.color].button}
                `}
              >
                 Choose {plan.name}
              </button>

            </motion.div>
          ))}
        </div>

        {/* --- CUSTOM ADD-ONS TOGGLE --- */}
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setShowAddons(!showAddons)}
            className="w-full group relative rounded-2xl bg-[#0B1221] border border-white/10 p-6 flex flex-col md:flex-row items-center justify-between gap-4 hover:border-cyan-500/50 transition-all cursor-pointer overflow-hidden shadow-2xl"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="flex items-center gap-4 relative z-10">
               <div className="p-3 rounded-full bg-cyan-900/30 text-cyan-400">
                 <Server className="w-6 h-6" />
               </div>
               <div className="text-left">
                 <h4 className="text-lg font-bold text-white">Need Custom Add-ons?</h4>
                 <p className="text-sm text-gray-400">Apps, Marketing Ads & Tech Essentials</p>
               </div>
             </div>
             <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 relative z-10 transition-transform duration-300 ${showAddons ? "" : "group-hover:translate-x-2"}`}>
               <span>{showAddons ? "Close Menu" : "View Add-on Menu"}</span>
               <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${showAddons ? "rotate-180" : ""}`} />
             </div>
          </button>

          <AnimatePresence>
            {showAddons && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="grid md:grid-cols-3 gap-4 pt-4">
                  {addons.map((category, idx) => (
                    <div key={idx} className="bg-[#0F172A]/80 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <category.icon className="w-5 h-5 text-gray-400" />
                        <h5 className="text-sm font-bold text-white uppercase tracking-wider">{category.category}</h5>
                      </div>
                      <ul className="space-y-3">
                        {category.items.map((item, i) => (
                          <li key={i} className="flex justify-between items-center text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0">
                            <span className="text-gray-300">{item.name}</span>
                            <div className="text-right">
                              <span className="block font-bold text-cyan-400">{item.price}</span>
                              {item.type && <span className="text-[10px] text-gray-500 uppercase">{item.type}</span>}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}