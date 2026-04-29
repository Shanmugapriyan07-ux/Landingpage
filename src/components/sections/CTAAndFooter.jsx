// src/components/sections/CTAAndFooter.jsx
import { motion } from "framer-motion";
import Button from "../ui/Button";
import Section from "../ui/Section";
import { FadeUp } from "../ui/Section";
import logoo from '@/assets/logoo.png';

export function CTA() {
  return (
    <Section id="download" className="py-24 px-5 sm:px-8">
      {/* Dark gradient bg */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0B0A12 0%, #1C1A2E 50%, #0B0A12 100%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(109,74,255,0.25) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(168,146,255,0.15) 0%, transparent 60%)" }} />

      {/* Decorative ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-violet-500/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-violet-500/15" />

      <div className="relative max-w-3xl mx-auto text-center">
        <FadeUp>
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-xs font-semibold text-violet-300 uppercase tracking-[0.15em]">Free forever for early members</span>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="font-display font-bold text-white tracking-tight mb-5 leading-[1.05]"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Join MindMates{" "}
            <span style={{
              background: "linear-gradient(135deg, #A892FF 0%, #6D4AFF 50%, #B3A0FF 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
            }}>
              Today.
            </span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-white/50 text-lg font-light leading-relaxed mb-12">
            Your next creative partner, mentor, or friend is waiting. It takes 30 seconds to get started.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="xl">
              Get Started Free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Button>
            <Button
              variant="google"
              size="xl"
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              }
            >
              Continue with Google
            </Button>
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <p className="mt-8 text-white/25 text-xs">
            No credit card required · Works on iOS & Android
          </p>
        </FadeUp>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink border-t border-white/5 py-12 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-violet-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
            <img src={logoo} alt="MindMates Logo" className="w-4 h-4" />
          </div>
          <span className="font-display font-bold text-white/90 tracking-tight">MindMates</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {[
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Service", href: "/terms" },
            { label: "Help Center", href: "/help" },
            { label: "Contact", href: "mailto:hello@mindmates.app" },
          ].map((l) => (
            <a key={l.href} href={l.href} className="text-xs text-white/35 hover:text-violet-400 transition-colors font-medium">
              {l.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-white/25">
          © 2026 MindMates
        </p>
      </div>
    </footer>
  );
}
