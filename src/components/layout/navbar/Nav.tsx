import { motion } from 'framer-motion';
import Link from 'next/link';
import { perspective } from "./anim";

interface NavLink {
  title: string;
  href: string;
}

interface SimplifiedNavProps {
  navLinks: NavLink[];
  onLinkClick: () => void;
}

export default function Nav({ navLinks, onLinkClick }: SimplifiedNavProps) {
  return (
    <div className="relative w-full h-full flex flex-col justify-center p-6">
      {/* Elegant luxury background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary golden luxury elements */}
        <div className="absolute top-1/6 right-1/6 w-24 h-24 bg-gradient-to-br from-fin-gold/6 to-fin-gold-light/4 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-fin-gold-dark/4 rounded-full blur-lg animate-pulse delay-700"></div>
        <div className="absolute top-2/3 right-1/3 w-28 h-28 bg-gradient-to-r from-fin-gold/3 to-fin-gold-deep/2 rounded-full blur-2xl animate-pulse delay-300"></div>
      </div>

      {/* Main Navigation Links - Enhanced with golden accents */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
        {navLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`nav_${i}`} className="group relative overflow-hidden" style={{ perspective: '1200px' }}>
              {/* Golden accent for each link */}
              <div className="absolute -left-8 top-1/2 w-1 h-0 bg-gradient-to-b from-fin-gold to-fin-gold-dark rounded-full opacity-0 group-hover:opacity-60 group-hover:h-12 transition-all duration-500 transform -translate-y-1/2"></div>
              
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
                className="perspective-link"
                style={{ 
                  transformStyle: 'preserve-3d',
                }}
              >
                <Link
                  href={href}
                  onClick={onLinkClick}
                  className="block text-fin-white text-2xl md:text-3xl font-bold text-center hover:text-fin-gold transition-all duration-500 py-3 px-4 rounded-lg group-hover:bg-fin-gold/10 border border-transparent group-hover:border-fin-gold/20"
                  style={{
                    textShadow: '0 2px 8px rgba(0,0,0,0.4)'
                  }}
                >
                  {title}
                </Link>
              </motion.div>
              
              {/* Right golden accent */}
              <div className="absolute -right-8 top-1/2 w-1 h-0 bg-gradient-to-t from-fin-gold to-fin-gold-light rounded-full opacity-0 group-hover:opacity-60 group-hover:h-12 transition-all duration-500 transform -translate-y-1/2 delay-100"></div>
            </div>
          );
        })}
      </div>

    </div>
  );
}