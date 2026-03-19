import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const categories = [
  { title: "Programming", skills: ["Python", "Java", "C++"] },
  { title: "Data & Tools", skills: ["Pandas", "NumPy", "Seaborn", "Matplotlib", "Scikit-learn"] },
  { title: "Visualization & BI", skills: ["Power BI", "Excel", "Plotly"] },
  { title: "Databases", skills: ["MySQL"] },
  { title: "Dev Tools", skills: ["Git", "Jupyter Notebook", "VS Code"] },
  { title: "Web", skills: ["HTML", "CSS"] },
  { title: "OS", skills: ["Linux", "Windows"] },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading label="Skills" title="Technologies & Tools" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-xl p-5 hover:neon-border transition-all"
          >
            <h3 className="text-sm font-semibold text-primary mb-3">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span key={s} className="px-3 py-1 rounded-full bg-muted text-xs text-foreground font-medium">{s}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
