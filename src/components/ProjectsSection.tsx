import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Delivery Agents Performance Dashboard",
    desc: "Built an interactive Power BI dashboard to analyze delivery agents' performance using metrics such as total deliveries, delivery time, feedback and efficiency. Designed KPI cards, charts, and filters to track performance trends and compare agent productivity.",
    tech: ["Power BI", "Data Visualization", "KPI Design"],
    github: "https://github.com/sabeena0",
  },
  {
    title: "Air Quality Analysis & Pollution Hotspot Detection",
    desc: "Analyzed Indian government dataset to identify pollution trends and hotspot areas using geo-mapping and visualization tools.",
    tech: ["Python", "Pandas", "Seaborn", "Plotly"],
    github: "https://github.com/sabeena0",
  },
  {
    title: "NYPD Arrest Dashboard",
    desc: "Interactive Excel dashboard analyzing crime trends, demographics, and borough-level insights using pivot tables, slicers, and charts.",
    tech: ["Excel", "Pivot Tables", "Data Viz"],
    github: "https://github.com/sabeena0",
  },
  {
    title: "Weather Forecasting Model",
    desc: "Built predictive model during internship analyzing seasonal trends and extreme weather patterns for accurate forecasting.",
    tech: ["Python", "Scikit-learn", "Matplotlib"],
    github: "https://github.com/sabeena0",
  },
  {
    title: "Library Management System",
    desc: "Developed a desktop-based library management system with a GUI to manage book inventory, issue and return operations, and search functionality for easy management of library data.",
    tech: ["Java", "Swing", "HashMap", "ArrayList", "OOP"],
    github: "https://github.com/sabeena0/Library-mangement-system",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading label="Portfolio" title="Featured Projects" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass rounded-xl p-6 group hover:neon-border transition-all duration-300 flex flex-col"
          >
            <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 flex-1">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-medium">{t}</span>
              ))}
            </div>
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
              View on GitHub <ExternalLink size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
