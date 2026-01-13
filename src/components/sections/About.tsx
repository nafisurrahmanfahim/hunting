import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Gem, Award, Heart, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Gem,
    title: 'Premium Materials',
    description: 'Only the finest gems and metals sourced from ethical suppliers worldwide.',
  },
  {
    icon: Award,
    title: 'Master Craftsmanship',
    description: 'Each piece is handcrafted by artisans with decades of experience.',
  },
  {
    icon: Heart,
    title: 'Timeless Design',
    description: 'Classic elegance meets contemporary style in every creation.',
  },
  {
    icon: Sparkles,
    title: 'Lifetime Warranty',
    description: 'Every ForgeHexa piece comes with our promise of lasting beauty.',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div ref={ref} className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-primary uppercase tracking-widest text-sm mb-4 block"
            >
              Our Story
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6"
            >
              Where <span className="text-gradient-gold">Artistry</span> Meets Excellence
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            >
              Founded in 1985, ForgeHexa has been at the forefront of luxury jewelry design 
              for nearly four decades. Our commitment to excellence drives us to create 
              pieces that transcend trends and become cherished heirlooms.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground leading-relaxed mb-10"
            >
              Every gemstone is hand-selected, every setting meticulously crafted. 
              We believe that true luxury lies in the details—the weight of a ring, 
              the sparkle of a diamond, the smoothness of polished gold.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              href="#contact"
              className="btn-outline-gold rounded-full inline-block"
            >
              Learn More
            </motion.a>
          </div>

          {/* Right - Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-serif mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 pt-16 border-t border-border"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '38+', label: 'Years of Excellence' },
              { value: '50K+', label: 'Happy Customers' },
              { value: '100+', label: 'Master Artisans' },
              { value: '15', label: 'Global Boutiques' },
            ].map((stat, index) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-serif text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
