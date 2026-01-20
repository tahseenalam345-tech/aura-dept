import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* --- MAIN NAVBAR --- */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        // UPDATED:
        // 'bg-black/5' -> Almost invisible tint
        // 'backdrop-blur-sm' -> Very slight blur effect
        // 'border-white/5' -> Extremely faint line at the bottom
        className="fixed top-0 left-0 right-0 z-40 bg-black/5 backdrop-blur-sm border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo & Home Link */}
            <a 
              href="#" 
              onClick={scrollToTop} 
              className="flex items-center gap-3 cursor-pointer group relative z-50"
            >
              <motion.img 
                src={logo} 
                alt="Aura Dept Logo" 
                className="w-8 h-8 object-contain"
                whileHover={{ rotate: 360 }}
                whileTap={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <span className="text-xl tracking-wider font-bold bg-gradient-to-r from-white via-gray-400 to-white bg-[length:200%_auto] bg-clip-text text-transparent transition-all duration-500 hover:bg-right active:bg-right">
                AURA DEPT
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative group px-2 py-1"
                >
                  <span className="text-sm font-medium bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-[length:200%_auto] bg-clip-text text-transparent transition-all duration-500 group-hover:bg-right group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                    {link.name}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              ))}

              <motion.a
                href="https://wa.me/923369871278"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-purple-500/20"
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.95 }}
              >
                Collab
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden text-white p-2 relative z-50"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* --- SIDEBAR MOBILE MENU --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm md:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-[60] w-3/4 max-w-sm bg-blue-950/80 border-l border-white/10 shadow-2xl md:hidden flex flex-col"
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-white/70 hover:text-white bg-white/5 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col items-center justify-center flex-1 space-y-8 pb-20">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-light text-white tracking-wide hover:text-purple-400 transition-colors active:scale-95"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://wa.me/923369871278"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-10 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg rounded-full active:scale-95 transition-transform shadow-[0_0_20px_rgba(124,58,237,0.4)]"
                >
                  Collab
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}