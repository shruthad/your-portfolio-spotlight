import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Wells Fargo, Bangalore",
    role: "Quantitative Analytics Specialist",
    period: "Jun 2023 – Present",
    projects: [
      {
        name: "Records Classification",
        points: [
          "Built robust AI solutions using traditional ML + fine-tuned small language models with advanced NLP techniques",
          "Owned prompting strategy for multi-class classification, leveraging diverse prompting techniques",
          "Implemented async workflows with DSPy for prompt optimization, reducing latency",
        ],
      },
      {
        name: "Digital Propensity",
        points: [
          "Designed data ingestion pipeline processing 2B+ records from Teradata in under 5 minutes",
          "Converted Python code to production-grade PySpark workflows — 50% runtime reduction",
          "Supported end-to-end model lifecycle: validation, testing, and deployment",
        ],
      },
      {
        name: "Additional Contributions",
        points: [
          "Contributed to MDDs and SDDs ensuring compliance and business alignment",
        ],
      },
    ],
  },
  {
    company: "Siemens Technology",
    role: "Intern",
    period: "May 2022 – Jul 2022",
    projects: [
      {
        name: "Paper to Parasolid",
        points: [
          "Feature extraction for geometric/non-geometric data from CAD drawings using image processing & OCR",
        ],
      },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-24 px-6" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16"
        >
          <Briefcase className="text-primary" size={20} />
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="pl-8 sm:pl-14 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-4 top-1 w-2 h-2 rounded-full bg-primary -translate-x-[3px] glow-primary" />

                <div className="mb-1">
                  <span className="font-mono text-xs text-primary tracking-wider">{exp.period}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">{exp.company}</h3>
                <p className="text-muted-foreground text-sm mb-6">{exp.role}</p>

                <div className="space-y-6">
                  {exp.projects.map((proj, j) => (
                    <div key={j} className="glass rounded-xl p-5">
                      <h4 className="font-mono text-sm text-primary mb-3">{`// ${proj.name}`}</h4>
                      <ul className="space-y-2">
                        {proj.points.map((point, k) => (
                          <li key={k} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                            <span className="text-primary/60 mt-1 shrink-0">▸</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
