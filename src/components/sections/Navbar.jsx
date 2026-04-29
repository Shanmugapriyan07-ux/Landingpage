// src/components/sections/Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import logoo from '@/assets/logoo.png'

const Logo = () => (
  <a href="/" className="flex items-center gap-2.5 group">
    <div className="relative w-9 h-9">
      <div className="w-9 h-9 rounded-xl bg-violet-500 flex items-center justify-center shadow-lg shadow-violet-500/40 group-hover:shadow-violet-500/60 transition-shadow">
        <img src={logoo} alt="MindMates Logo" className="w-4 h-4" />
      </div>
      <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white animate-pulse" />
    </div>
    <span className="font-display font-bold text-[17px] tracking-tight text-ink">
      MindMates
    </span>
  </a>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Download", href: "#download" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "glass border-b border-white/60 shadow-lg shadow-ink/5"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[70px] flex items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-[14px] font-medium text-ink/60 hover:text-violet-600 hover:bg-violet-50 rounded-xl transition-all"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm">Log in</Button>
            <Button variant="primary" size="sm">Get Started</Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }} className="w-5 h-0.5 bg-ink block transition-all" />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }} className="w-5 h-0.5 bg-ink block" />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }} className="w-5 h-0.5 bg-ink block" />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[70px] z-40 glass border-b border-white/60 shadow-xl shadow-ink/10 md:hidden"
          >
            <div className="px-5 py-6 flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-[15px] font-medium text-ink/70 hover:text-violet-600 hover:bg-violet-50 transition-all"
                >
                  {l.label}
                </a>
              ))}
              <div className="border-t border-ink/8 pt-4 mt-2 flex flex-col gap-3">
                <Button variant="outline" size="md" className="w-full">Log in</Button>
                <Button variant="primary" size="md" className="w-full">Get Started</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
