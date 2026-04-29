import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import AppPreview from "./components/sections/AppPreview";
import Testimonials from "./components/sections/Testimonials";
import { CTA, Footer } from "./components/sections/CTAAndFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-body overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <AppPreview />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
