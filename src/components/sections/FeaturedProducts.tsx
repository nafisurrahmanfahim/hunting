import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProductCard from '../ui/ProductCard';

const products = [
  {
    id: 1,
    name: 'Celestial Diamond Ring',
    category: 'Rings',
    price: 4850,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
    isNew: true,
  },
  {
    id: 2,
    name: 'Sun & Moon Pendant',
    category: 'Pendants',
    price: 2390,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop',
    isBestseller: true,
  },
  {
    id: 3,
    name: 'Infinity Gold Bracelet',
    category: 'Bracelets',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop',
  },
  {
    id: 4,
    name: 'Star Glossy Bracelet',
    category: 'Bracelets',
    price: 2750,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop',
    isNew: true,
  },
  {
    id: 5,
    name: 'Eternal Love Ring',
    category: 'Rings',
    price: 5600,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=600&fit=crop',
  },
  {
    id: 6,
    name: 'Moonstone Pendant',
    category: 'Pendants',
    price: 1890,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
    isBestseller: true,
  },
];

const categories = ['All', 'Rings', 'Pendants', 'Bracelets'];

const FeaturedProducts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="collections" className="py-24 md:py-32 bg-secondary/20">
      <div ref={ref} className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary uppercase tracking-widest text-sm mb-4 block"
          >
            Our Collections
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6"
          >
            Featured <span className="text-gradient-gold">Treasures</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            Explore our handpicked selection of exquisite pieces, each crafted 
            to perfection for those who appreciate timeless beauty.
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all duration-300 ${
                index === 0
                  ? 'bg-primary text-primary-foreground'
                  : 'glass-card text-muted-foreground hover:text-foreground hover:border-primary/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-outline-gold rounded-full inline-block"
          >
            View All Collections
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
