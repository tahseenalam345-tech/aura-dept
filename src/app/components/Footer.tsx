import { motion } from 'motion/react';
import { Linkedin, Github, Twitter, Mail, MessageCircle } from 'lucide-react';
import logo from "../../assets/logo.png";
;


export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: 'About Us', href: '#founders' },
      { name: 'Services', href: '#services' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Pricing', href: '#pricing' },
    ],
    Services: [
      { name: 'Web Development', href: '#services' },
      { name: 'App Development', href: '#services' },
      { name: 'Digital Marketing', href: '#services' },
      { name: 'Consulting', href: '#services' },
    ],
    Contact: [
      { name: 'WhatsApp', href: 'https://wa.me/923369871278', external: true },
      { name: 'Email Us', href: 'mailto:hello@auradept.com' },
      { name: 'Schedule Call', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:hello@auradept.com', label: 'Email' },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* CTA Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl text-white mb-4">
              Ready to Build Your{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Aura
              </span>
              ?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create something extraordinary. Message us now and let's turn
              your vision into reality.
            </p>
            <a
              href="https://wa.me/923369871278"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-500 hover:to-blue-500 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Start Your Project</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Aura Dept Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl tracking-wider text-white">AURA DEPT</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Your Brand, Your Aura. Creating digital experiences that resonate.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-lg transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      {...(link.external && {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      })}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Aura Dept. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}