import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () =>
<section id="home" className="min-h-screen flex items-center section-padding pt-28 relative overflow-hidden">
    {/* Animated bg elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full" />
    </div>

    <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
        <p className="text-primary font-medium mb-2 tracking-wider text-sm uppercase">Hello, I'm</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          <span className="text-foreground">Sabeena</span>{" "}
          <span className="gradient-text">Parveen</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-2">Aspiring Data Analyst | Data Science Enthusiast</p>
        <p className="text-muted-foreground mb-8 max-w-md">"Transforming data into actionable insights to support smarter decisions."</p>

        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
            View Projects <ArrowRight size={16} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary hover:text-primary transition">
            Contact Me <Download size={16} />
          </a>
        </div>

        <div className="flex gap-8 mt-10">
          <div>
            <p className="text-2xl font-bold neon-text">8.94</p>
            <p className="text-xs text-muted-foreground">CGPA</p>
          </div>
          <div>
            <p className="text-2xl font-bold neon-text">3+</p>
            <p className="text-xs text-muted-foreground">Projects</p>
          </div>
          <div>
            <p className="text-2xl font-bold neon-text">1</p>
            <p className="text-xs text-muted-foreground">Internship</p>
          </div>
        </div>
      </motion.div>

      <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="flex justify-center">
      
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 neon-border">
            <img src={profileImg} alt="Sabeena Parveen" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-2 neon-border">
            <p className="text-xs text-muted-foreground">B.Tech CSE</p>
            <p className="text-sm font-semibold text-primary">Class of 2027</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>;


export default HeroSection;