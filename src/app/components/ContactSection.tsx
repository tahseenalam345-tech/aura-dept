"use client";

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Github, ChevronDown, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'General Inquiry',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handlePlanSelection = (event: any) => {
      if (event.detail) {
        setForm(prev => ({ ...prev, plan: event.detail }));
      }
    };
    window.addEventListener('planSelected', handlePlanSelection);
    return () => window.removeEventListener('planSelected', handlePlanSelection);
  }, []);

  const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });
  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setStatus('loading');

    // YOUR EMAILJS KEYS
    const SERVICE_ID = "service_wfw89r5";
    const TEMPLATE_ID = "template_ccsvo5z";
    const PUBLIC_KEY = "OQmFriQxX0btmE7W3";

    const templateParams = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      plan: form.plan,
      message: form.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        alert(`Message Sent! We will contact you shortly.`);
        
        // Clear form
        setForm({
          name: '',
          email: '',
          phone: '',
          plan: 'General Inquiry',
          message: ''
        });

        // Reset button state after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
      }, (err) => {
        console.log('FAILED...', err);
        setStatus('error');
        alert("Failed to send message. Please check your internet connection.");
      });
  };

  return (
    <section id="contact" className="relative py-24 bg-[#020617] overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT COLUMN: Info & Socials */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Let's Build Your <span className="text-cyan-400">Legacy</span></h2>
            <p className="text-gray-400 mb-10 text-lg">Ready to start? Select a plan or just say hello. We are available 24/7.</p>
            
            <div className="space-y-6 mb-12">
              <a href="mailto:tahseenalam345@gmail.com" className="flex items-center gap-4 group cursor-pointer hover:bg-white/5 p-3 -ml-3 rounded-2xl transition-all">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/20 transition-all"><Mail className="w-6 h-6 text-cyan-400" /></div>
                <div><h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors">Email Us</h4><p className="text-gray-400">tahseenalam345@gmail.com</p></div>
              </a>
              
              <a href="https://wa.me/923369871278" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer hover:bg-white/5 p-3 -ml-3 rounded-2xl transition-all">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:border-purple-500/50 group-hover:bg-purple-500/20 transition-all"><Phone className="w-6 h-6 text-purple-400" /></div>
                <div><h4 className="font-bold text-white group-hover:text-purple-400 transition-colors">Call / WhatsApp</h4><p className="text-gray-400">+92 336 9871278</p></div>
              </a>
              
              <a href="https://www.google.com/maps/search/?api=1&query=Kharian,+Punjab,+Pakistan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer hover:bg-white/5 p-3 -ml-3 rounded-2xl transition-all">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:border-pink-500/50 group-hover:bg-pink-500/20 transition-all"><MapPin className="w-6 h-6 text-pink-400" /></div>
                <div><h4 className="font-bold text-white group-hover:text-pink-400 transition-colors">Location</h4><p className="text-gray-400">Kharian, Punjab, Pakistan</p></div>
              </a>
            </div>

            {/* SOCIAL MEDIA HUB */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">Connect With Us</h4>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="p-3 rounded-full bg-[#1877F2]/20 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all hover:scale-110 border border-[#1877F2]/30"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="p-3 rounded-full bg-[#E4405F]/20 text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition-all hover:scale-110 border border-[#E4405F]/30"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="p-3 rounded-full bg-[#0A66C2]/20 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all hover:scale-110 border border-[#0A66C2]/30"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="p-3 rounded-full bg-[#1DA1F2]/20 text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-all hover:scale-110 border border-[#1DA1F2]/30"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="p-3 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-all hover:scale-110 border border-white/20"><Github className="w-5 h-5" /></a>
                <a href="#" className="p-3 rounded-full bg-[#1DBF73]/20 text-[#1DBF73] hover:bg-[#1DBF73] hover:text-white transition-all hover:scale-110 border border-[#1DBF73]/30" title="Fiverr"><span className="font-bold text-xs">Fi</span></a>
                <a href="#" className="p-3 rounded-full bg-[#6FDA44]/20 text-[#6FDA44] hover:bg-[#6FDA44] hover:text-white transition-all hover:scale-110 border border-[#6FDA44]/30" title="Upwork"><span className="font-bold text-xs">Up</span></a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="p-8 rounded-[2rem] bg-[#0B1221] border border-white/10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div><label className="text-xs font-bold text-gray-400 uppercase">Name</label><input type="text" name="name" value={form.name} onChange={handleChange} className="w-full bg-[#0F172A] border border-white/10 rounded-xl py-3 px-4 text-white focus:border-cyan-500 outline-none transition-colors" placeholder="Name" required /></div>
                <div><label className="text-xs font-bold text-gray-400 uppercase">Phone</label><input type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full bg-[#0F172A] border border-white/10 rounded-xl py-3 px-4 text-white focus:border-purple-500 outline-none transition-colors" placeholder="Phone" required /></div>
              </div>
              
              <div><label className="text-xs font-bold text-gray-400 uppercase">Email</label><input type="email" name="email" value={form.email} onChange={handleChange} className="w-full bg-[#0F172A] border border-white/10 rounded-xl py-3 px-4 text-white focus:border-cyan-500 outline-none transition-colors" placeholder="Email Address" required /></div>

              <div><label className="text-xs font-bold text-cyan-400 uppercase">Selected Plan</label>
                <div className="relative">
                  <select name="plan" value={form.plan} onChange={handleChange} className="w-full bg-[#0F172A] border border-cyan-500/50 rounded-xl py-3 px-4 text-white appearance-none font-bold outline-none cursor-pointer hover:border-cyan-400 transition-colors">
                    <option value="Spark">Spark Package (40k)</option>
                    <option value="Nexus">Nexus Package (80k)</option>
                    <option value="Infinity">Infinity Package (120k)</option>
                    <option value="Custom App">Custom Mobile App</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400 pointer-events-none" />
                </div>
              </div>

              <div><label className="text-xs font-bold text-gray-400 uppercase">Message</label><textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full bg-[#0F172A] border border-white/10 rounded-xl py-3 px-4 text-white focus:border-pink-500 outline-none transition-colors" placeholder="Tell us about your project..."></textarea></div>

              <button 
                type="submit" 
                disabled={status === 'loading' || status === 'success'}
                className={`w-full py-4 rounded-xl font-bold uppercase transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2
                  ${status === 'loading' ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/20'}
                  ${status === 'success' ? 'bg-green-600' : ''}
                `}
              >
                {status === 'loading' ? (
                   <>
                     <Loader2 className="w-5 h-5 animate-spin" />
                     <span>Sending...</span>
                   </>
                ) : status === 'success' ? (
                   <span>Message Sent!</span>
                ) : (
                   <span>Send Message</span>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}