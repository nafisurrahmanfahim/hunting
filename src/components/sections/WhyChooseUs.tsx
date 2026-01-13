import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Truck, RefreshCw, Headphones } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Authentic Guarantee',
    description: 'Every piece comes with a certificate of authenticity and quality assurance from our master gemologists.',
  },
  {
    icon: Truck,
    title: 'Worldwide Delivery',
    description: 'Complimentary insured shipping to over 100 countries with discreet luxury packaging.',
  },
  {
    icon: RefreshCw,
    title: '30-Day Returns',
    description: 'Not completely in love? Return any unworn piece within 30 days for a full refund.',
  },
  {
    icon: Headphones,
    title: 'Personal Concierge',
    description: 'Dedicated jewelry consultants available 24/7 to assist with your selection.',
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 md:py-32 bg-secondary/20">
      <div ref={ref} className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary uppercase tracking-widest text-sm mb-4 block"
          >
            Why ForgeHexa
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6"
          >
            The ForgeHexa <span className="text-gradient-gold">Promise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            We're committed to providing an exceptional experience from 
            the moment you discover us until long after your purchase.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 180 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 mx-auto mb-6 rounded-2xl glass-card flex items-center justify-center group-hover:glow-gold"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <benefit.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-serif mb-3 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
