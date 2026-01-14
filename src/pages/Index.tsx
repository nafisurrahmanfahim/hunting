import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import JewelryShowcase from '../components/3d/JewelryShowcase';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';
import Newsletter from '../components/sections/Newsletter';
import Contact from '../components/sections/Contact';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Loading screen component
const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-gradient-gold">Cresol Bangladesh</h1>
          <p className="text-muted-foreground text-sm uppercase tracking-widest mt-2">
            Luxury Jewelry
          </p>
        </motion.div>
        
        {/* Loading bar */}
        <div className="w-48 h-px bg-border mx-auto overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="h-full w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
};

// Custom cursor component
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full border-2 border-primary pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      {/* Cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-primary pointer-events-none z-[9999] hidden lg:block"
        animate={{
          x: position.x - 2,
          y: position.y - 2,
        }}
        transition={{
          type: 'spring',
          stiffness: 1500,
          damping: 50,
          mass: 0.1,
        }}
      />
    </>
  );
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  // Initialize GSAP scroll animations
  useEffect(() => {
    if (isLoading) return;

    // Smooth scroll setup with GSAP
    const sections = gsap.utils.toArray('.gsap-section');
    
    sections.forEach((section) => {
      gsap.fromTo(
        section as Element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section as Element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isLoading]);

  // Theme toggle
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('light', isDark);
  };

  return (
    <>
      {/* Custom Cursor */}
      {!isLoading && <CustomCursor />}

      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className={isDark ? '' : 'light'}
          >
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />

            <main>
              <Hero />
              
              <div className="gsap-section">
                <About />
              </div>
              
              <div className="gsap-section">
                <FeaturedProducts />
              </div>
              
              <div className="gsap-section">
                <JewelryShowcase />
              </div>
              
              <div className="gsap-section">
                <WhyChooseUs />
              </div>
              
              <div className="gsap-section">
                <Testimonials />
              </div>
              
              <div className="gsap-section">
                <Newsletter />
              </div>
              
              <div className="gsap-section">
                <Contact />
              </div>
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
