// src/components/sections/Hero.jsx
import { motion } from "framer-motion";
import Button from "../ui/Button";
import logoo from '@/assets/logoo.png'

// Floating avatar card
function AvatarCard({ img, name, interest, delay, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute glass rounded-2xl p-3 flex items-center gap-3 shadow-xl shadow-ink/10 ${className}`}
      style={{ animation: `float ${5 + delay}s ease-in-out infinite` }}
    >
      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: img }}>
      </div>
      <div>
        <p className="text-xs font-display font-bold text-ink leading-none">{name}</p>
        <p className="text-[10px] text-violet-500 mt-0.5 font-medium">{interest}</p>
      </div>
    </motion.div>
  );
}

// Floating stat pill
function StatPill({ value, label, delay, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute glass rounded-2xl px-4 py-3 shadow-lg shadow-ink/8 ${className}`}
    >
      <p className="text-lg font-display font-bold text-ink leading-none">{value}</p>
      <p className="text-[11px] text-ink/50 mt-0.5">{label}</p>
    </motion.div>
  );
}

// Phone mockup with chat UI
function PhoneMockup() {
  const messages = [
    { from: "them", text: "Hey! Into photography too? 📸", time: "2:41 PM" },
    { from: "me",   text: "Yes! Just joined a studio session 🎨", time: "2:43 PM" },
    { from: "them", text: "We should collaborate! 🔥", time: "2:44 PM" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto"
      style={{ width: 260, animation: "float 7s ease-in-out infinite" }}
    >
      {/* Phone outer shell */}
      <div className="relative rounded-[44px] bg-ink p-[3px] shadow-2xl shadow-ink/50">
        {/* Screen bezel */}
        <div className="rounded-[42px] overflow-hidden bg-[#0B0A12]">
          {/* Status bar */}
          <div className="h-10 bg-[#0B0A12] flex items-center justify-between px-6 pt-2">
            <span className="text-white/60 text-[10px] font-mono">9:41</span>
            <div className="w-20 h-4 bg-[#111] rounded-full mx-auto absolute left-1/2 -translate-x-1/2 top-2" />
            <div className="flex gap-1">
              <div className="w-3 h-2.5 border border-white/40 rounded-sm"><div className="w-2 h-1.5 bg-white/40 m-px rounded-sm" /></div>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)"><path d="M1.51 8.083C5.34 4.07 10.392 2 12 2c1.61 0 6.66 2.07 10.49 6.083l-2.13 2.27C17.26 7.14 13.63 5 12 5s-5.26 2.14-8.36 5.353L1.51 8.083zM12 8c1.88 0 4.37 1.037 6.294 3.17l-2.13 2.272C14.857 12.016 13.42 11 12 11c-1.42 0-2.858 1.016-4.165 2.442L5.707 11.17C7.63 9.037 10.12 8 12 8z"/></svg>
            </div>
          </div>

          {/* App header */}
          <div className="bg-[#0F0E1A] px-4 py-3 flex items-center gap-3 border-b border-white/5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center text-sm">🎨</div>
            <div>
              <p className="text-white text-xs font-semibold leading-none">Sakthi </p>
              <p className="text-emerald-400 text-[9px] mt-0.5">● Active now</p>
            </div>
            <div className="ml-auto flex gap-2">
              <div className="w-7 h-7 rounded-full bg-white/8 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
              </div>
              <div className="w-7 h-7 rounded-full bg-white/8 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
              </div>
            </div>
          </div>

          {/* Chat area */}
          <div className="bg-[#0B0A12] px-3 py-3 space-y-3 min-h-[260px]">
            {/* Shared interest tag */}
            <div className="flex justify-center">
              <span className="text-[9px] bg-violet-500/15 text-violet-400 px-3 py-1 rounded-full font-medium">
                ✨ You both love Artist
              </span>
            </div>

            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: m.from === "me" ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.2, duration: 0.5 }}
                className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[80%] rounded-2xl px-3 py-2 ${
                  m.from === "me"
                    ? "bg-violet-500 text-white rounded-br-sm"
                    : "bg-white/10 text-white/90 rounded-bl-sm"
                }`}>
                  <p className="text-[11px] leading-relaxed">{m.text}</p>
                  <p className="text-[8px] mt-0.5 opacity-50 text-right">{m.time}</p>
                </div>
              </motion.div>
            ))}

            {/* Typing indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="flex justify-start"
            >
              <div className="bg-white/10 rounded-2xl rounded-bl-sm px-3 py-2.5 flex gap-1">
                {[0, 0.2, 0.4].map((d, i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-white/40"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.8, delay: d, repeat: Infinity }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Input bar */}
          <div className="bg-[#0F0E1A] px-3 py-2.5 flex items-center gap-2 border-t border-white/5">
            <div className="flex-1 bg-white/8 rounded-full px-3 py-1.5 flex items-center gap-2">
              <span className="text-[10px] text-white/30">Message Sakthi...</span>
            </div>
            <div className="w-7 h-7 rounded-full bg-violet-500 flex items-center justify-center flex-shrink-0 shadow-md shadow-violet-500/40">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </div>
          </div>

          {/* Home indicator */}
          <div className="bg-[#0F0E1A] flex justify-center pb-2 pt-1">
            <div className="w-24 h-1 bg-white/20 rounded-full" />
          </div>
        </div>
      </div>

      {/* Glow under phone */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-40 h-12 bg-violet-500/30 blur-2xl rounded-full" />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-[70px]">
      {/* Background */}
      <div className="absolute inset-0 bg-sand-50" />
      <div className="absolute inset-0 bg-mesh-violet" />
      <div className="absolute inset-0 bg-mesh-warm opacity-60" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full border border-violet-200/40 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full border border-violet-300/30 -translate-y-1/2 translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — copy */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white border border-violet-100 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-ink/60 tracking-wide">Now available on iOS & Android</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(42px, 5.5vw, 68px)" }}
          >
            Find Your People.{" "}
            <span className="relative">
              <span className="text-gradient">Share Your</span>
              <br />
              <span className="text-gradient">Passion.</span>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-ink/55 leading-relaxed mb-10 max-w-lg font-light"
          >
            Connect with like-minded people near you and grow together.
            No algorithms. No noise. Just real connections built on shared interests.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-3 mb-14"
          >
            <Button variant="gradient" size="lg">
              Get Started Free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Button>
            <Button variant="google" size="lg"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              }
            >
              Continue with Google
            </Button>
          </motion.div>

          {/* Social proof avatars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              {["🧑‍💻","👩‍🎨","🧑‍🎤","👩‍🔬","🧑‍🚀"].map((e, i) => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-violet-100 to-violet-200 flex items-center justify-center text-sm shadow-sm">
                  {e}
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-amber-400 text-xs mb-0.5">★★★★★</div>
              <p className="text-xs text-ink/50 font-medium">
                <span className="text-ink font-bold">1K+,</span> connections made this Month
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right — phone + floating elements */}
        <div className="relative flex items-center justify-center min-h-[520px]">
          <PhoneMockup />

          {/* Floating cards */}
          <AvatarCard
            img="linear-gradient(135deg, #6D4AFF, #A892FF)"
            name="Arjun S."
            interest="UI Design · Bangalore"
            delay={0.8}
            className="left-0 top-[10%] hidden sm:flex"
          />
          <AvatarCard
            img="linear-gradient(135deg, #F59E0B, #FCD34D)"
            name="Priya M."
            interest="Photography · Chennai"
            delay={1.0}
            className="right-0 top-[30%] hidden sm:flex"
          />
          <AvatarCard
            img="linear-gradient(135deg, #10B981, #34D399)"
            name="Rohan V."
            interest="Music · Mumbai"
            delay={1.2}
            className="left-2 bottom-[15%] hidden sm:flex"
          />

          <StatPill value="98%" label="Match accuracy" delay={0.9} className="right-4 bottom-[10%] hidden sm:block" />
        </div>
      </div>
    </section>
  );
}
