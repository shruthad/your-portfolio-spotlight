import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 px-6" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground mb-12 max-w-md mx-auto">
            Open to exciting data science opportunities and collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="mailto:shrutha.d.3@gmail.com" className="glass px-6 py-3 rounded-xl flex items-center gap-3 hover:border-primary/40 hover:text-primary transition-all group w-full sm:w-auto justify-center">
            <Mail size={18} className="text-primary" />
            <span className="text-sm">shrutha.d.3@gmail.com</span>
          </a>
          <a href="tel:+916366297789" className="glass px-6 py-3 rounded-xl flex items-center gap-3 hover:border-primary/40 hover:text-primary transition-all w-full sm:w-auto justify-center">
            <Phone size={18} className="text-primary" />
            <span className="text-sm">+91 6366297789</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="glass px-6 py-3 rounded-xl flex items-center gap-3 hover:border-primary/40 hover:text-primary transition-all w-full sm:w-auto justify-center">
            <Linkedin size={18} className="text-primary" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </motion.div>

        <p className="text-muted-foreground/40 text-xs font-mono mt-24">
          © 2026 Shrutha D. Built with ♥
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
