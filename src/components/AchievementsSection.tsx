import { motion } from "framer-motion";
import { Trophy, Star, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";

const achievements = [
  { icon: Star, title: "5 Star Badge – HackerRank", desc: "C++ Programming", date: "Feb 2026" },
  { icon: Award, title: "4 Star Badge – HackerRank", desc: "Problem Solving", date: "" },
  { icon: Trophy, title: "Contest Rating 1,449", desc: "LeetCode", date: "" },
];

const AchievementsSection = () => (
  <section id="achievements" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading label="Achievements" title="Recognition & Milestones" />
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass rounded-xl p-6 text-center hover:neon-border transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <a.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{a.title}</h3>
            <p className="text-sm text-muted-foreground">{a.desc}</p>
            {a.date && <p className="text-xs text-muted-foreground/70 mt-2">{a.date}</p>}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
