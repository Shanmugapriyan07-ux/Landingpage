// src/components/sections/AppPreview.jsx
import { motion } from "framer-motion";
import Section from "../ui/Section";
import { FadeUp, FadeIn } from "../ui/Section";
import logoo from '@/assets/logoo.png';

function DiscoverCard({ emoji, name, role, tags, match, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ x: -4 }}
      className="flex items-center gap-4 p-4 rounded-2xl bg-white/80 border border-ink/5 shadow-sm hover:shadow-md hover:border-violet-100 transition-all cursor-pointer group"
    >
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: "linear-gradient(135deg, #F3F0FF, #E8E2FF)" }}>
        {emoji}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-0.5">
          <p className="font-display font-bold text-sm text-ink">{name}</p>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600">{match}</span>
        </div>
        <p className="text-[11px] text-ink/45 mb-2">{role}</p>
        <div className="flex flex-wrap gap-1">
          {tags.map(t => (
            <span key={t} className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-violet-50 text-violet-500">{t}</span>
          ))}
        </div>
      </div>
      <div className="w-8 h-8 rounded-full bg-violet-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6D4AFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </motion.div>
  );
}

const profiles = [
  { emoji: "🎨", name: "Rethinasamy E.", role: "Python Developer · Trichy", tags: ["Design", "Branding", "Figma"], match: "97% match", delay: 0.1 },
  { emoji: "🎸", name: "Sathiyamoorthy R.", role: "Sql · Ariyalur", tags: ["Python", "Sql", "Collab"], match: "94% match", delay: 0.2 },
  { emoji: "📸", name: "Karthikeyan K.", role: "Artist · Trichy", tags: ["Portrait", "Artist", "Lightroom"], match: "91% match", delay: 0.3 },
  { emoji: "🧑‍💻", name: "Shanmugapriyan B.", role: "Full-stack Developer · Cuddalore", tags: ["React", "Node", "Startups"], match: "89% match", delay: 0.4 },
];

export default function AppPreview() {
  return (
    <Section id="preview" className="py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, #fff 0%, #F8F4EC 100%)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — discover UI */}
          <div>
            <FadeUp>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-amber-50 border border-amber-100">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-[0.12em]">Discover</span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2
                className="font-display font-bold tracking-tight text-ink mb-5"
                style={{ fontSize: "clamp(30px, 3.5vw, 48px)", lineHeight: 1.1 }}
              >
                Your next{" "}
                <span className="text-gradient">collaborator</span>
                {" "}is already here.
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-ink/50 text-lg font-light leading-relaxed mb-10">
                Browse people matched by shared passions, not location alone. Every profile is a potential creative partner, mentor, or friend.
              </p>
            </FadeUp>

            <div className="space-y-3">
              {profiles.map(p => <DiscoverCard key={p.name} {...p} />)}
            </div>
          </div>

          {/* Right — visual */}
          <FadeIn delay={0.3}>
            <div className="relative flex items-center justify-center">
              {/* Big gradient orb */}
              <div
                className="absolute w-72 h-72 rounded-full blur-3xl opacity-25"
                style={{ background: "radial-gradient(circle, #6D4AFF, #B3A0FF)" }}
              />

              {/* Interest cloud */}
              <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px]">
                {[
                  { label: "Photography", x: "10%", y: "5%", size: "text-sm", opacity: "opacity-90" },
                  { label: "Music", x: "60%", y: "0%", size: "text-xs", opacity: "opacity-70" },
                  { label: "Design", x: "75%", y: "20%", size: "text-base", opacity: "opacity-95" },
                  { label: "Travel", x: "5%", y: "35%", size: "text-xs", opacity: "opacity-60" },
                  { label: "Startups", x: "50%", y: "40%", size: "text-lg", opacity: "opacity-100" },
                  { label: "Fitness", x: "15%", y: "60%", size: "text-sm", opacity: "opacity-75" },
                  { label: "Writing", x: "65%", y: "60%", size: "text-xs", opacity: "opacity-65" },
                  { label: "Coding", x: "35%", y: "75%", size: "text-base", opacity: "opacity-85" },
                  { label: "Art", x: "70%", y: "80%", size: "text-xl", opacity: "opacity-90" },
                  { label: "Film", x: "5%", y: "82%", size: "text-xs", opacity: "opacity-55" },
                ].map((tag, i) => (
                  <motion.span
                    key={tag.label}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i, duration: 0.5, ease: "backOut" }}
                    whileHover={{ scale: 1.15 }}
                    className={`absolute font-display font-bold ${tag.size} ${tag.opacity} cursor-pointer`}
                    style={{
                      left: tag.x,
                      top: tag.y,
                      color: `hsl(${250 + i * 12}, 65%, ${50 + i * 3}%)`,
                      animation: `float ${4 + i * 0.7}s ease-in-out infinite`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  >
                    {tag.label}
                  </motion.span>
                ))}

                {/* Center pulse */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 rounded-full bg-violet-500 flex items-center justify-center shadow-2xl shadow-violet-500/50 z-10 relative">
                    <img src={logoo} alt="MindMates Logo" className="w-8 h-8" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-violet-400 animate-pulse-ring" />
                  <div className="absolute inset-0 rounded-full bg-violet-400 animate-pulse-ring" style={{ animationDelay: "0.8s" }} />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
