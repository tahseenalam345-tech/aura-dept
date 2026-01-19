import { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import logo from "../../assets/logo.png";


interface NavbarProps {
  isVisible: boolean;
}

export function Navbar({ isVisible }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Founders', href: '#founders' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#portfolio' },
    { name: 'Plans', href: '#pricing' },
  ];

  if (!isVisible) return null;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-black/50 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Aura Dept Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl tracking-wider text-white">AURA DEPT</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/923369871278"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-500 hover:to-blue-500 transition-all"
            >
              Collab
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10"
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/923369871278"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center rounded-full"
            >
              Collab
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}