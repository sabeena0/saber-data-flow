import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
  Code2, Database, BarChart3, GitBranch, Globe, Monitor,
  BrainCircuit, Users, RefreshCw, Clock,
} from "lucide-react";

const categories = [
  { title: "Programming", icon: Code2, skills: ["Python", "Java", "C++"] },
  { title: "Data & Tools", icon: BrainCircuit, skills: ["Pandas", "NumPy", "Seaborn", "Matplotlib", "Scikit-learn"] },
  { title: "Visualization & BI", icon: BarChart3, skills: ["Power BI", "Excel", "Plotly"] },
  { title: "Databases", icon: Database, skills: ["MySQL"] },
  { title: "Dev Tools", icon: GitBranch, skills: ["Git", "Jupyter Notebook", "VS Code"] },
  { title: "Web", icon: Globe, skills: ["HTML", "CSS"] },
  { title: "OS", icon: Monitor, skills: ["Linux", "Windows"] },
];

const softSkills = [
  { name: "Problem-Solving", icon: BrainCircuit },
  { name: "Team Work", icon: Users },
  { name: "Adaptability", icon: RefreshCw },
  { name: "Time Management", icon: Clock },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading label="Skills" title="Technologies & Tools" />

      {/* Technical Skills */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {categories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-xl p-5 hover:neon-border transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <Icon size={16} className="text-primary" />
                <h3 className="text-sm font-semibold text-primary">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full bg-muted text-xs text-foreground font-medium">{s}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Soft Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 max-w-3xl mx-auto"
      >
        <h3 className="text-center text-lg font-semibold text-foreground mb-6">Soft Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {softSkills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-4 flex flex-col items-center gap-2 hover:neon-border transition-all"
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <Icon size={20} className="text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
