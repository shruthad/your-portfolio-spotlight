import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="py-24 px-6" id="education">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16"
        >
          <GraduationCap className="text-primary" size={20} />
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-8"
        >
          <span className="font-mono text-xs text-primary tracking-wider">2019 – 2023</span>
          <h3 className="font-heading text-xl font-semibold mt-2">BTech in Electrical and Electronics Engineering</h3>
          <p className="text-muted-foreground mt-1">NITK, Surathkal</p>
          <p className="text-sm text-muted-foreground mt-3 font-mono">
            <span className="text-primary/60">+</span> Minors in Mathematical and Computational Sciences
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
