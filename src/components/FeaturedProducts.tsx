import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  return (
    <section id="new" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-display text-sm uppercase tracking-wider rounded-full mb-4">
            Hot Right Now
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            FEATURED DROPS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular styles handpicked by our team. Limited quantities available.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-outline">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
