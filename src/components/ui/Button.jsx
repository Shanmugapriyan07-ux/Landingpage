// src/components/ui/Button.jsx
import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  href,
  onClick,
  className = "",
  ...props
}) {
  const base = "inline-flex items-center justify-center gap-2.5 font-display font-semibold rounded-2xl transition-all duration-200 cursor-pointer select-none";

  const sizes = {
    sm:  "px-5 py-2.5 text-sm",
    md:  "px-7 py-3.5 text-[15px]",
    lg:  "px-9 py-4.5 text-base",
    xl:  "px-11 py-5 text-lg",
  };

  const variants = {
    primary: "bg-violet-500 text-white shadow-lg shadow-violet-500/35 hover:bg-violet-600 hover:shadow-violet-500/50 hover:shadow-xl active:scale-[0.97]",
    outline: "border-2 border-ink/10 text-ink bg-white/60 hover:border-violet-400 hover:text-violet-600 hover:bg-violet-50 active:scale-[0.97]",
    ghost:   "text-violet-600 hover:bg-violet-50 hover:text-violet-700 active:scale-[0.97]",
    google:  "bg-white border border-ink/10 text-ink shadow-sm hover:shadow-md hover:border-ink/20 hover:bg-sand-50 active:scale-[0.97]",
    gradient:"text-white shadow-xl shadow-violet-500/40 active:scale-[0.97]",
  };

  const gradientStyle = variant === "gradient"
    ? { background: "linear-gradient(135deg, #6D4AFF 0%, #9178FF 50%, #B3A0FF 100%)", backgroundSize: "200% 200%" }
    : {};

  const Comp = motion.button;
  const compProps = {
    className: `${base} ${sizes[size] ?? sizes.md} ${variants[variant] ?? variants.primary} ${className}`,
    whileHover: { scale: 1.02 },
    whileTap:   { scale: 0.97 },
    style: gradientStyle,
    onClick,
    ...props,
  };

  if (href) {
    return (
      <motion.a href={href} {...compProps}>
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </motion.a>
    );
  }

  return (
    <Comp {...compProps}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </Comp>
  );
}
