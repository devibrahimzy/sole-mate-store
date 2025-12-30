import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  heroImage: string;
}

const Hero = ({ heroImage }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-display text-sm uppercase tracking-wider rounded-full mb-6">
              New Collection 2024
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-none mb-6"
          >
            RUN THE
            <br />
            <span className="text-gradient">FUTURE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-md mb-8 font-body"
          >
            Experience next-level performance with our revolutionary cushioning technology. Designed for champions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button className="btn-primary flex items-center gap-2 group">
              Shop Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-outline">
              Explore Collection
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-12 mt-12"
          >
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Styles</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Happy Athletes</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-primary">4.9</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Rating</div>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Hero Shoe Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform scale-75" />
            
            {/* Shoe image */}
            <motion.img
              src={heroImage}
              alt="Featured Sneaker"
              className="relative z-10 w-full max-w-2xl mx-auto drop-shadow-2xl"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Price tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute top-10 right-10 bg-card/90 backdrop-blur-sm border border-border rounded-xl px-6 py-4 card-shadow"
            >
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Starting from</div>
              <div className="text-2xl font-display font-bold text-primary">$189</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
