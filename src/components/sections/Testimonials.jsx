// src/components/sections/Testimonials.jsx
import { motion } from "framer-motion";
import Section from "../ui/Section";
import { FadeUp, StaggerParent, StaggerChild } from "../ui/Section";

const testimonials = [
  {
    quote: "I found my design co-founder on MindMates in under a week. We're now building a funded startup together. This app is the real deal.",
    name: "Prince Afrido",
    role: "Product Designer, Trichy",
    emoji: "🎨",
    gradient: "from-violet-400 to-violet-600",
    stars: 5,
  },
  {
    quote: "Finally an app that understands what I actually care about. No random swipes. The matches felt intentional and the conversations flowed naturally.",
    name: "Rethinasamy E.",
    role: "Python Developer, Trichy",
    emoji: "🎵",
    gradient: "from-emerald-400 to-teal-600",
    stars: 5,
  },
  {
    quote: "I was skeptical about social apps but MindMates is different. Three months in and I have a photography collective with 12 members. Absolutely wild.",
    name: "Sabari N.",
    role: "Photographer, Chennai",
    emoji: "📸",
    gradient: "from-amber-400 to-orange-500",
    stars: 5,
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-amber-400 text-sm">★</span>
      ))}
    </div>
  );
}

// Scrolling trust logos
const trustedBy = ["Students", "Creators", "Founders", "Artists", "Musicians", "Developers", "Designers", "Writers", "Athletes", "Teachers"];

export default function Testimonials() {
  return (
    <Section id="testimonials" className="py-28 bg-white">
      <div className="absolute inset-0 bg-mesh-violet opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <FadeUp>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-amber-50 border border-amber-100">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-[0.12em]">Loved by thousands</span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2
              className="font-display font-bold tracking-tight text-ink mb-5"
              style={{ fontSize: "clamp(30px, 3.5vw, 48px)", lineHeight: 1.1 }}
            >
              Real people.{" "}
              <span className="text-gradient">Real connections.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-ink/50 text-lg font-light">
              Don't take our word for it — hear from the MindMates community.
            </p>
          </FadeUp>
        </div>

        {/* Testimonial cards */}
        <StaggerParent className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t) => (
            <StaggerChild key={t.name}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-3xl border border-ink/6 p-7 shadow-sm hover:shadow-xl hover:shadow-ink/8 transition-shadow cursor-default group"
              >
                {/* Quote mark */}
                <div className="absolute top-6 right-7 text-5xl font-display font-bold text-ink/5 leading-none select-none">"</div>

                <Stars count={t.stars} />

                <p className="text-[14.5px] leading-relaxed text-ink/65 font-light mb-6 relative">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center text-xl bg-gradient-to-br ${t.gradient} shadow-md`}>
                    {t.emoji}
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-ink">{t.name}</p>
                    <p className="text-[11px] text-ink/40">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerChild>
          ))}
        </StaggerParent>

        {/* Trusted by marquee */}
        <FadeUp>
          <div className="text-center mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/30">
              Trusted by students & creators across India
            </p>
          </div>
          <div className="relative overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="flex animate-marquee whitespace-nowrap">
              {[...trustedBy, ...trustedBy].map((item, i) => (
                <span key={i} className="mx-6 text-sm font-semibold text-ink/30 flex items-center gap-3">
                  {item}
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-300 flex-shrink-0" />
                </span>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
