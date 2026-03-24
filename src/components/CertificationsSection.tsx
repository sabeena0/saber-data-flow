import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

const certifications = [
  {
    title: "Scientific Computing with Python",
    issuer: "freeCodeCamp",
    date: "March 2026",
    hours: "~300 hours",
    image: "/certs/scientific-computing.png",
    link: "https://freecodecamp.org/certification/fcc87d73813-3c18-4d67-afad-57f4a7fc2446/scientific-computing-with-python-v7",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL (IIT Kharagpur)",
    date: "Jan–Apr 2025",
    hours: "12-week course · Score: 69%",
    image: "/certs/cloud-computing.jpg",
    link: "",
  },
  {
    title: "Introduction to Data Analysis using Microsoft Excel",
    issuer: "Coursera",
    date: "August 2024",
    hours: "Online Project",
    image: "/certs/data-analysis-excel.jpg",
    link: "https://coursera.org/verify/FGowRLLOZLBG",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "October 2023",
    hours: "~300 hours",
    image: "/certs/responsive-web-design.png",
    link: "https://freecodecamp.org/certification/fcc87d73813-3c18-4d67-afad-57f4a7fc2446/responsive-web-design",
  },
];

const CertificationsSection = () => (
  <section id="certifications" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading label="Certifications" title="Courses & Credentials" />
      <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="glass rounded-xl overflow-hidden hover:neon-border transition-all duration-300 group"
          >
            <div className="relative overflow-hidden h-48">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-contain bg-white p-2 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-foreground text-sm leading-tight mb-1">
                {cert.title}
              </h3>
              <p className="text-xs text-primary font-medium">{cert.issuer}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-muted-foreground">{cert.date} · {cert.hours}</span>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    Verify <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
