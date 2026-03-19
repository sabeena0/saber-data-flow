import { motion } from "framer-motion";
import { Briefcase, BookOpen } from "lucide-react";
import SectionHeading from "./SectionHeading";

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading label="Experience & Training" title="Professional Journey" />
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass rounded-xl p-6 hover:neon-border transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Briefcase className="text-primary" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Data Science Intern</h3>
              <p className="text-xs text-muted-foreground">InternPro · July 2025</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2"><span className="text-primary mt-1">▹</span>Performed data cleaning, EDA, and visualization</li>
            <li className="flex gap-2"><span className="text-primary mt-1">▹</span>Built a weather forecasting model</li>
            <li className="flex gap-2"><span className="text-primary mt-1">▹</span>Delivered project early & received LOR</li>
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass rounded-xl p-6 hover:neon-border transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-neon-purple/10 flex items-center justify-center">
              <BookOpen className="text-secondary" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Data Structures Training</h3>
              <p className="text-xs text-muted-foreground">LPU · Fundamentals of DS</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2"><span className="text-secondary mt-1">▹</span>Built Library Management System (Java & Swing)</li>
            <li className="flex gap-2"><span className="text-secondary mt-1">▹</span>Used HashMaps, ArrayLists for data handling</li>
            <li className="flex gap-2"><span className="text-secondary mt-1">▹</span>Developed GUI-based interactive system</li>
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
