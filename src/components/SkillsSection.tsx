import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "SQL"],
  },
  {
    title: "AI / ML / GenAI",
    skills: ["Supervised & Unsupervised ML", "Deep Learning", "RAG", "Prompt Engineering", "DSPy", "Agentic Workflows", "Information Retrieval"],
  },
  {
    title: "Data Engineering",
    skills: ["PySpark", "TPT", "Splunk"],
  },
  {
    title: "Tools & Frameworks",
    skills: ["Scikit-learn", "TensorFlow", "LangChain", "DSPy", "Elasticsearch", "Hugging Face", "Google ADK", "MCP", "Gradio"],
  },
  {
    title: "Cloud",
    skills: ["GCP"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-6" id="skills">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16"
        >
          <Cpu className="text-primary" size={20} />
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">Tech Stack</h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="font-mono text-xs text-primary tracking-wider uppercase mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs font-mono hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
