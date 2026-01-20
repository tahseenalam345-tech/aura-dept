"use client";

import { Facebook, Instagram, Linkedin, Twitter, Github, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
        
        {/* Background Gradients */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
                
                {/* 1. BRAND COLUMN */}
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-3 mb-4">
                        {/* 1. LOGO IMAGE (Make sure logo.png is in your public folder) */}
                        <img 
                            src="/logo.png" 
                            alt="Aura Dept Logo" 
                            className="w-10 h-10 object-contain"
                        />
                        <h3 className="text-xl font-bold text-white tracking-wider">AURA DEPT</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        Your Brand, Your Aura. Creating digital experiences that resonate.
                    </p>
                    
                    {/* Social Icons */}
                    <div className="flex gap-3">
                        <a href="#" className="p-2 rounded-lg bg-white/5 text-gray-400 hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] transition-all"><Linkedin className="w-4 h-4" /></a>
                        <a href="#" className="p-2 rounded-lg bg-white/5 text-gray-400 hover:bg-white/20 hover:text-white transition-all"><Github className="w-4 h-4" /></a>
                        <a href="#" className="p-2 rounded-lg bg-white/5 text-gray-400 hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2] transition-all"><Twitter className="w-4 h-4" /></a>
                        <a href="mailto:tahseenalam345@gmail.com" className="p-2 rounded-lg bg-white/5 text-gray-400 hover:bg-purple-500/20 hover:text-purple-400 transition-all"><Mail className="w-4 h-4" /></a>
                    </div>
                </div>

                {/* 2. COMPANY LINKS */}
                <div>
                    <h4 className="text-white font-bold mb-6">Company</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                        <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
                        <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a></li>
                        <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
                    </ul>
                </div>

                {/* 3. SERVICES LINKS */}
                <div>
                    <h4 className="text-white font-bold mb-6">Services</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-purple-400 transition-colors">Web Development</a></li>
                        <li><a href="#" className="hover:text-purple-400 transition-colors">App Development</a></li>
                        <li><a href="#" className="hover:text-purple-400 transition-colors">Digital Marketing</a></li>
                        <li><a href="#" className="hover:text-purple-400 transition-colors">Consulting</a></li>
                    </ul>
                </div>

                {/* 4. CONTACT LINKS */}
                <div>
                    <h4 className="text-white font-bold mb-6">Contact</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li>
                            <a href="https://wa.me/923369871278" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                                WhatsApp
                            </a>
                        </li>
                        <li>
                            <a href="mailto:tahseenalam345@gmail.com" className="hover:text-cyan-400 transition-colors">
                                Email Us
                            </a>
                        </li>
                        <li>
                            <a href="tel:+923369871278" className="hover:text-pink-400 transition-colors">
                                Schedule Call
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                
                {/* Copyright */}
                <p className="text-gray-600 text-xs">
                    &copy; {currentYear} Aura Dept. All rights reserved.
                </p>
                
                {/* Designed By Signature */}
                <p className="text-gray-500 text-xs font-medium tracking-wide">
                    Designed by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-bold">Aura Dept Official</span>
                </p>

                {/* Legal Links */}
                <div className="flex gap-6 text-xs text-gray-600">
                    <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
  );
}