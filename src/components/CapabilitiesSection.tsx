import { motion } from "framer-motion";
import { BarChart3, LayoutDashboard, PieChart, Search, Cpu } from "lucide-react";
import SectionHeading from "./SectionHeading";

const items = [
  { icon: BarChart3, title: "Data Analysis" },
  { icon: LayoutDashboard, title: "Dashboard Creation" },
  { icon: PieChart, title: "Data Visualization" },
  { icon: Search, title: "Exploratory Data Analysis" },
  { icon: Cpu, title: "Basic Machine Learning" },
];

const CapabilitiesSection = () => (
  <section id="capabilities" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading label="Capabilities" title="What I Can Do" />
      <div className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-6 w-40 text-center hover:neon-border transition-all"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <item.icon className="text-primary" size={22} />
            </div>
            <p className="text-sm font-medium text-foreground">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CapabilitiesSection;
