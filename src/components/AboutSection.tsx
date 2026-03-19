import { motion } from "framer-motion";
import { Brain, Lightbulb, BarChart3 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const highlights = [
  { icon: Lightbulb, title: "Curious Learner", desc: "Always exploring new technologies and methodologies" },
  { icon: Brain, title: "Problem Solver", desc: "Analytical thinking to tackle complex challenges" },
  { icon: BarChart3, title: "Data Insights", desc: "Transforming raw data into actionable decisions" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading label="About Me" title="Who I Am" />
      <div className="max-w-3xl mx-auto text-center mb-12">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-muted-foreground leading-relaxed">
          I'm a pre-final year Computer Science student at Lovely Professional University, passionate about coding, problem-solving, and continuous learning. My focus lies in Data Science, Data Analysis, and Machine Learning — I love turning complex datasets into meaningful stories and building predictive models that drive real-world impact.
        </motion.p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass rounded-xl p-6 text-center hover:neon-border transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <h.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{h.title}</h3>
            <p className="text-sm text-muted-foreground">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
