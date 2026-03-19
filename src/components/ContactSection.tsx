import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Github, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill all fields");
      return;
    }
    toast.success("Message sent! Thank you for reaching out.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <SectionHeading label="Get In Touch" title="Contact Me" />
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-xl font-semibold text-foreground mb-6">Let's Connect</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="text-primary shrink-0" size={18} /> Phagwara, Punjab, India
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="text-primary shrink-0" size={18} /> +91 7509316212
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="text-primary shrink-0" size={18} /> parveensabeena52@gmail.com
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="https://linkedin.com/in/sabeena-parveen" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/sabeena0" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition">
                <Github size={18} />
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition text-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition text-sm"
            />
            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition text-sm resize-none"
            />
            <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
              Send Message <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
