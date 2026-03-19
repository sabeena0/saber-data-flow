import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";

const education = [
  {
    institution: "Lovely Professional University",
    location: "Jalandhar, Punjab",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    score: "CGPA: 8.94",
    year: "2027",
  },
  {
    institution: "Jindal Adarsh Gramya Bharti School",
    location: "Raigarh, Chhattisgarh",
    degree: "Senior Secondary School Certificate (12th Grade)",
    score: "Percentage: 88.88%",
    year: "2023",
  },
  {
    institution: "Jindal Adarsh Gramya Bharti School",
    location: "Raigarh, Chhattisgarh",
    degree: "Secondary School Certificate (10th Grade)",
    score: "Percentage: 97%",
    year: "2021",
  },
];

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading label="Education" title="Academic Background" />
      <div className="max-w-3xl mx-auto space-y-6">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="glass rounded-xl p-6 md:p-8 hover:neon-border transition-all duration-300"
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{edu.institution}</h3>
                    <p className="text-muted-foreground text-sm">{edu.location}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-neon-purple/10 text-secondary text-xs font-medium shrink-0 self-start">{edu.year}</span>
                </div>
                <p className="text-foreground text-sm mt-2">{edu.degree}</p>
                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">{edu.score}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
