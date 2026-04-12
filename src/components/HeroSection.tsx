import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(175 80% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(175 80% 50%) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
            <span className="animate-pulse-glow inline-block">●</span> Available for opportunities
          </p>
        </motion.div>

        <motion.h1
          className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <span className="text-foreground">Shrutha</span>{" "}
          <span className="text-gradient glow-text">D</span>
        </motion.h1>

        <motion.p
          className="font-mono text-xl sm:text-2xl text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Data Scientist
        </motion.p>

        <motion.p
          className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          Leveraging LLMs for automation & predictive analytics. Building scalable AI solutions 
          with expertise in model development and generative AI.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="mailto:shrutha.d.3@gmail.com" className="glass px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-all">
            <Mail size={16} /> shrutha.d.3@gmail.com
          </a>
          <a href="tel:+916366297789" className="glass px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-all">
            <Phone size={16} /> +91 6366297789
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="glass px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-all">
            <Linkedin size={16} /> LinkedIn
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-muted-foreground/40" size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
