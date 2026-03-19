import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading label="Education" title="Academic Background" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto glass rounded-xl p-8 neon-border"
      >
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <GraduationCap className="text-primary" size={28} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Lovely Professional University</h3>
            <p className="text-muted-foreground text-sm">Jalandhar, Punjab</p>
            <p className="text-foreground font-medium mt-2">B.Tech in Computer Science and Engineering</p>
            <div className="flex flex-wrap gap-4 mt-3">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">CGPA: 8.94</span>
              <span className="px-3 py-1 rounded-full bg-neon-purple/10 text-secondary text-sm font-medium">Graduating: 2027</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
