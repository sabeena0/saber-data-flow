import { motion } from "framer-motion";

const SectionHeading = ({ label, title }: { label: string; title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-14"
  >
    <p className="text-primary text-sm font-medium uppercase tracking-widest mb-2">{label}</p>
    <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
  </motion.div>
);

export default SectionHeading;
