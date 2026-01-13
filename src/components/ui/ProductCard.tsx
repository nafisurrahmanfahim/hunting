import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Eye } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-2xl glass-card shine-effect">
        {/* Badge */}
        {(product.isNew || product.isBestseller) && (
          <div className="absolute top-4 left-4 z-10">
            <span className={`px-3 py-1 text-xs uppercase tracking-wider rounded-full ${
              product.isNew 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-moonlight text-foreground'
            }`}>
              {product.isNew ? 'New' : 'Bestseller'}
            </span>
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Add to wishlist"
          >
            <Heart className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Quick view"
          >
            <Eye className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Product Image */}
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Add to Cart Button */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ scale: 1.02 }}
          className="absolute bottom-4 left-4 right-4 py-3 rounded-full bg-primary text-primary-foreground font-medium uppercase tracking-wider text-sm flex items-center justify-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </motion.button>
      </div>

      {/* Product Info */}
      <div className="mt-4 text-center">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="text-lg font-serif text-foreground mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-primary font-medium">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
