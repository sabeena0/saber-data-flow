import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "About", "Education", "Experience", "Skills", "Projects", "Capabilities", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass" : ""}`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <span className="text-xl font-bold gradient-text cursor-pointer" onClick={() => scrollTo("home")}>
          Sabeena.
        </span>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <button key={l} onClick={() => scrollTo(l)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {l}
            </button>
          ))}
          <div className="relative group">
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
            >
              Download CV ▾
            </button>
            <div className="absolute right-0 mt-1 w-48 rounded-lg border border-border bg-background shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <button
                type="button"
                onClick={async () => {
                  const response = await fetch("/sabeena_general_CV.pdf");
                  const blob = await response.blob();
                  const url = URL.createObjectURL(blob);
                  const link = document.createElement("a");
                  link.href = url;
                  link.download = "Sabeena-Parveen-General-CV.pdf";
                  document.body.appendChild(link);
                  link.click();
                  link.remove();
                  URL.revokeObjectURL(url);
                }}
                className="w-full text-left px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted transition rounded-t-lg"
              >
                General CV
              </button>
              <button
                type="button"
                onClick={async () => {
                  const response = await fetch("/sabeena_specialized_CV.pdf");
                  const blob = await response.blob();
                  const url = URL.createObjectURL(blob);
                  const link = document.createElement("a");
                  link.href = url;
                  link.download = "Sabeena-Parveen-Specialized-CV.pdf";
                  document.body.appendChild(link);
                  link.click();
                  link.remove();
                  URL.revokeObjectURL(url);
                }}
                className="w-full text-left px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted transition rounded-b-lg"
              >
                Specialized CV
              </button>
            </div>
          </div>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:hidden glass border-t border-border">
          <div className="container mx-auto py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <button key={l} onClick={() => scrollTo(l)} className="text-sm text-muted-foreground hover:text-primary transition-colors text-left py-1">
                {l}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
