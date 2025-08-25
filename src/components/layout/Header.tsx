'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Button from "@/components/layout/navbar/Button"
import Nav from '@/components/layout/navbar/Nav';

interface NavLink {
  title: string;
  href: string;
}

const menu: Variants = {
    open: {
        width: "500px",
        height: "400px",
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}
    },
    closed: {
        width: "112px",
        height: "44px",
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}
    }
}

export default function Header() {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const pathname = usePathname();
    
    // Check if we're on the homepage
    const isHomepage = pathname === '/';
    
    // Determine if navbar should show scrolled state
    const shouldShowScrolledState = !isHomepage || isScrolled;

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Enhanced scroll handler with ORIGINAL trigger point
    useEffect(() => {
        let ticking = false;
        
        const handleScroll = (): void => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const triggerPoint = window.innerHeight * 0.9; // ORIGINAL trigger point
                    setIsScrolled(window.scrollY > triggerPoint);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsActive(false);
    }, [pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isActive]);

    const navLinks: NavLink[] = [
        { title: 'Home', href: '/' },
        { title: 'Products', href: '/products' },
        { title: 'Philosophy', href: '/philosophy' },
        { title: 'Team', href: '/team' },
        { title: 'Contact', href: '/contact' },
    ];

    if (!isMounted) {
        return null;
    }

    return (
        <>
            {/* Simplified Header - Menu Button Only */}
            <header className="fixed top-0 left-0 w-full z-40">
                <nav className="px-6 py-4 flex justify-end items-center">
                    {/* Menu button will be positioned here by the morphing menu system below */}
                </nav>
            </header>

            {/* Dropdown Menu System */}
            <div className="fixed top-6 right-6 z-50">
                {/* Morphing Container with sophisticated luxury styling */}
                <motion.div 
                    className="absolute"
                    variants={menu}
                    animate={isActive ? "open" : "closed"}
                    initial="closed"
                    style={{
                        backgroundColor: isActive 
                            ? 'rgba(44, 44, 46, 0.95)' // fin-charcoal
                            : 'rgba(44, 44, 46, 0.95)', // fin-charcoal
                        backdropFilter: 'blur(20px)',
                        border: isActive 
                            ? '1px solid rgba(245, 185, 66, 0.15)' // fin-gold
                            : '1px solid rgba(245, 185, 66, 0.2)', // fin-gold
                        borderRadius: isActive ? '2rem' : '25px',
                        boxShadow: isActive 
                            ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(245, 185, 66, 0.05)' 
                            : '0 8px 25px -8px rgba(0, 0, 0, 0.1)',
                        overflow: 'hidden'
                    }}
                >
                    {/* Enhanced luxury background for open menu */}
                    {isActive && (
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            {/* Sophisticated golden luxury elements */}
                            <div className="absolute top-1/6 right-1/6 w-40 h-40 bg-fin-gold/6 rounded-full blur-2xl animate-pulse"></div>
                            <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-fin-gold-light/5 rounded-full blur-xl animate-pulse delay-700"></div>
                            <div className="absolute top-2/3 right-1/3 w-48 h-48 bg-gradient-to-r from-fin-gold-dark/4 to-fin-gold/3 rounded-full blur-3xl"></div>
                            {/* Additional premium shapes */}
                            <div className="absolute top-1/2 left-1/6 w-24 h-24 bg-fin-gold-deep/4 rounded-full blur-xl animate-pulse delay-1000"></div>
                            <div className="absolute bottom-1/6 right-1/6 w-36 h-36 bg-fin-gold-light/5 rounded-full blur-2xl animate-pulse delay-500"></div>
                        </div>
                    )}

                    <AnimatePresence>
                        {isActive && (
                            <Nav 
                                navLinks={navLinks}
                                onLinkClick={() => setIsActive(false)}
                            />
                        )}
                    </AnimatePresence>
                </motion.div>
                
                {/* Enhanced Button */}
                <div className="relative z-10">
                    <Button 
                        isActive={isActive} 
                        toggleMenu={() => setIsActive(!isActive)}
                        shouldShowScrolledState={shouldShowScrolledState}
                    />
                </div>
            </div>
        </>
    );
}

export { Header };