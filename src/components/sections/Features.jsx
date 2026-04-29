// src/components/sections/Features.jsx
import { motion } from "framer-motion";
import Section from "../ui/Section";
import { FadeUp, StaggerParent, StaggerChild } from "../ui/Section";
import logoo from '@/assets/logoo.png'

const features = [
  {
    icon: "🎯",
    color: "#6D4AFF",
    bg: "from-violet-50 to-violet-100/60",
    border: "border-violet-100 hover:border-violet-300",
    glow: "hover:shadow-violet-200/60",
    title: "Smart Matching",
    desc: "Our interest graph surfaces people who actually share what you love — not just who lives nearby. Real compatibility, not random proximity.",
    tags: ["Interests", "Skills", "Goals"],
  },
  {
    icon: "💬",
    color: "#059669",
    bg: "from-emerald-50 to-emerald-100/60",
    border: "border-emerald-100 hover:border-emerald-300",
    glow: "hover:shadow-emerald-200/60",
    title: "Real-time Chat",
    desc: "Instant, end-to-end encrypted messaging. Share photos, ideas, links, and files — everything your collaboration needs in one thread.",
    tags: ["Encrypted", "Media", "Threads"],
  },
  {
    icon: "🔍",
    color: "#D97706",
    bg: "from-amber-50 to-amber-100/60",
    border: "border-amber-100 hover:border-amber-300",
    glow: "hover:shadow-amber-200/60",
    title: "Interest Discovery",
    desc: "Browse communities built around passions — photography, music, startups, fitness. Find your niche and level up inside it.",
    tags: ["Communities", "Events", "Trends"],
  },
  {
    icon: "🔐",
    color: "#2563EB",
    bg: "from-blue-50 to-blue-100/60",
    border: "border-blue-100 hover:border-blue-300",
    glow: "hover:shadow-blue-200/60",
    title: "Secure Google Login",
    desc: "One tap with your Google account. No passwords to remember, no security compromises. Your data stays yours.",
    tags: ["Google Auth", "2FA", "Private"],
  },
];

function FeatureCard({ feature, index }) {
  return (
    <StaggerChild>
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`relative group rounded-3xl border bg-gradient-to-br ${feature.bg} ${feature.border} p-7 transition-all duration-300 hover:shadow-xl ${feature.glow} cursor-default overflow-hidden`}
      >
        {/* Corner glow */}
        <div
          className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl"
          style={{ backgroundColor: feature.color }}
        />

        {/* Icon */}
        <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm" style={{ backgroundColor: `${feature.color}14` }}>
          {feature.icon}
        </div>

        <h3 className="font-display font-bold text-[19px] text-ink mb-3 tracking-tight">
          {feature.title}
        </h3>
        <p className="text-ink/55 text-[14.5px] leading-relaxed font-light mb-5">
          {feature.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {feature.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold px-3 py-1 rounded-full"
              style={{ backgroundColor: `${feature.color}12`, color: feature.color }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Arrow on hover */}
        <motion.div
          className="absolute bottom-7 right-7 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: `${feature.color}14` }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={feature.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
          </svg>
        </motion.div>
      </motion.div>
    </StaggerChild>
  );
}

export default function Features() {
  return (
    <Section id="features" className="py-28 bg-white">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-100 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-18 max-w-2xl mx-auto">
          <FadeUp>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-violet-50 border border-violet-100">
              <span className="text-xs font-bold text-violet-500 uppercase tracking-[0.12em]">Features</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              className="font-display font-bold tracking-tight text-ink mb-5"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.1 }}
            >
              Everything you need to{" "}
              <span className="text-gradient">connect deeply.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-ink/50 text-lg leading-relaxed font-light">
              Built for people who want real relationships — not just follower counts.
            </p>
          </FadeUp>
        </div>

        {/* Grid */}
        <StaggerParent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </StaggerParent>

        {/* Stats row */}
        <FadeUp delay={0.2}>
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { n: "1K+",  l: "Active users" },
              { n: "98%",   l: "Match accuracy" },
              { n: "4.5★",  l: "App store rating" },
              { n: "0 ads", l: "Ever. Always free." },
            ].map((s) => (
              <div key={s.l} className="text-center py-6 px-4 rounded-2xl bg-sand-100/60 border border-sand-200/60">
                <p className="font-display font-bold text-2xl sm:text-3xl text-ink mb-1">{s.n}</p>
                <p className="text-xs text-ink/45 font-medium uppercase tracking-wider">{s.l}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
