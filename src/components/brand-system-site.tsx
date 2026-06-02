"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  Box,
  Check,
  ChevronRight,
  Code2,
  Compass,
  Download,
  Eye,
  FileText,
  Heart,
  Lock,
  MessageCircle,
  Moon,
  Navigation,
  Palette,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Sun,
  Type,
  Upload,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";

const navItems = [
  "Philosophy",
  "Logo",
  "Color",
  "Typography",
  "AI UI",
  "Components",
  "Tokens",
];

const colors = [
  ["Deep Green", "#082828"],
  ["Forest", "#0A3D3A"],
  ["Emerald", "#0FA98F"],
  ["Mint", "#8FE3C2"],
  ["Soft Mint", "#E6F6F1"],
  ["Pearl", "#F7FAF9"],
  ["Deep Navy", "#0F172A"],
  ["Slate", "#64748B"],
  ["Mist", "#CBD5E1"],
  ["Light", "#E5E7EB"],
  ["White", "#FFFFFF"],
];

const sections = [
  { eyebrow: "01 Brand Philosophy", title: "The calm intelligence layer.", copy: "Friday exists before the sale, before the signature, and before the pressure. It helps people understand insurance decisions with clarity, context, and restraint." },
  { eyebrow: "02 Logo System", title: "A path, not a badge.", copy: "The mark is a navigation system: three forward steps, rounded for softness, always moving upward with quiet confidence." },
  { eyebrow: "03 Gradient And Glow", title: "Light behaves like guidance.", copy: "Glow is subtle by default, stronger at moments of focus, and never decorative without purpose. It signals system state, progress, and attention." },
  { eyebrow: "04 Motion Language", title: "Every transition feels like progress.", copy: "Motion is directional, smooth, and restrained. Surfaces reveal in sequence; path elements guide the eye one step at a time." },
];

const capabilities = [
  "Understand what may be relevant",
  "Review an existing policy",
  "Compare quotes factually",
  "Prepare broker questions",
  "Identify blind spots",
  "Connect to licensed brokers",
];

const icons = [
  ["Understand", Sparkles],
  ["Compare", Search],
  ["Prepare", FileText],
  ["Decide", Check],
  ["Guidance", Compass],
  ["Clarity", ShieldCheck],
  ["Confidence", Heart],
];

const tokenRows = [
  ["--friday-ink", "#082828", "Primary deep emerald ink"],
  ["--friday-emerald", "#0FA98F", "Active guidance and path surfaces"],
  ["--friday-mint", "#8FE3C2", "Glow, progress, and focus states"],
  ["--friday-pearl", "#F7FAF9", "Premium light-mode base"],
  ["--friday-navy", "#0F172A", "Quiet neutral depth"],
  ["--radius-card", "28px", "Editorial glass panels"],
  ["--motion-calm", "420ms cubic-bezier(.22,1,.36,1)", "Guided transitions"],
];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function PathMark({ className = "" }: { className?: string }) {
  return (
    <div className={clsx("flex w-12 flex-col gap-1.5", className)} aria-hidden>
      <div className="path-step ml-6 w-8" />
      <div className="path-step ml-3 w-10" />
      <div className="path-step w-12" />
    </div>
  );
}

function StackedLogoPreview() {
  return (
    <div className="logo-display-tile flex min-h-28 flex-col items-center justify-center gap-1 rounded-2xl px-5 py-4">
      <Image
        src="/assets/logo/friday_symbol_transparent.png"
        alt=""
        width={299}
        height={231}
        className="h-12 w-auto object-contain"
      />
      <Image
        src="/assets/logo/friday_wordmark_transparent.png"
        alt="Friday stacked logo preview"
        width={558}
        height={240}
        className="h-10 w-auto object-contain"
      />
    </div>
  );
}

function PathStair() {
  return (
    <div className="relative mx-auto h-[360px] w-full max-w-xl sm:h-[520px]" aria-hidden>
      <motion.div
        className="absolute left-1/2 top-3 h-16 w-12 -translate-x-1/2 rounded-t-full bg-[#0fa98f] shadow-[0_0_80px_rgba(15,169,143,.82)]"
        animate={{ opacity: [0.55, 1, 0.55], y: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute left-1/2 top-16 h-20 w-16 -translate-x-1/2 bg-white/80 blur-2xl" />
      {Array.from({ length: 7 }).map((_, i) => (
        <motion.div
          key={i}
          className="path-step absolute left-1/2"
          style={{
            width: `${96 + i * 46}px`,
            top: `${92 + i * 48}px`,
            marginLeft: `${-48 - i * 22}px`,
            opacity: 1 - i * 0.045,
          }}
          animate={{ x: [0, i % 2 ? 7 : -7, 0], filter: ["brightness(1)", "brightness(1.18)", "brightness(1)"] }}
          transition={{ duration: 6 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function SectionHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <Reveal className="mx-auto mb-10 max-w-4xl text-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#0fa98f]">{eyebrow}</p>
      <h2 className="font-editorial text-5xl leading-[0.96] text-balance sm:text-7xl">{title}</h2>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">{copy}</p>
    </Reveal>
  );
}

function ButtonShowcase() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {["Default", "Hover", "Focus"].map((state, i) => (
        <button
          key={state}
          className={clsx(
            "flex h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition",
            i === 0 && "bg-[#082828] text-white dark:bg-[#0fa98f] dark:text-[#020707]",
            i === 1 && "bg-[#0fa98f] text-[#020707] shadow-[0_0_34px_rgba(15,169,143,.42)]",
            i === 2 && "border border-[#0fa98f] bg-transparent text-[#0fa98f] ring-4 ring-[#0fa98f]/20",
          )}
        >
          {state} <ArrowRight size={16} />
        </button>
      ))}
    </div>
  );
}

function ChatPreview() {
  return (
    <div className="glass rounded-[28px] p-4 sm:p-6">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <PathMark className="w-8 scale-75" />
          <div>
            <p className="font-editorial text-2xl">Good morning, Ahmed</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">How can I help you understand today?</p>
          </div>
        </div>
        <button className="rounded-full border border-white/10 p-2 text-[#0fa98f]"><MessageCircle size={18} /></button>
      </div>
      <div className="grid gap-3 md:grid-cols-[1.1fr_.9fr]">
        <div className="space-y-3">
          <div className="ml-auto max-w-[76%] rounded-2xl bg-[#0fa98f] p-4 text-sm text-[#020707]">I need help understanding life insurance for my family.</div>
          <div className="max-w-[82%] rounded-2xl bg-white/65 p-4 text-sm leading-6 text-[#082828] dark:bg-white/8 dark:text-white">I can help you understand your options, compare what matters, and prepare broker questions. No pressure, no recommendation.</div>
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 p-2 pl-4 text-sm text-slate-500 dark:border-white/10 dark:bg-white/5">
            Ask Friday anything...
            <button className="ml-auto rounded-full bg-[#082828] p-2 text-white dark:bg-[#0fa98f] dark:text-[#020707]"><ArrowRight size={16} /></button>
          </div>
        </div>
        <div className="space-y-2">
          {["Life insurance for my family", "Income protection basics", "What affects my premium?", "Compare my options"].map((item) => (
            <div key={item} className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white/45 p-4 text-sm dark:border-white/10 dark:bg-white/5">
              {item}<ChevronRight size={16} className="text-[#0fa98f]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="glass rounded-[30px] p-5">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <PathMark className="w-8 scale-75" />
          <div>
            <p className="text-lg font-semibold">Welcome back, Ahmed</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Here is what is happening with your protection.</p>
          </div>
        </div>
        <button className="rounded-full bg-[#0fa98f] px-4 py-2 text-xs font-semibold text-[#020707]">Ask Friday</button>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ["78", "Protection score", "Good"],
          ["2", "Policies", "Active"],
          ["28", "Next review", "Days left"],
        ].map(([value, label, sub]) => (
          <div key={label} className="rounded-3xl border border-slate-200/70 bg-white/45 p-5 dark:border-white/10 dark:bg-white/5">
            <p className="font-editorial text-5xl">{value}</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{label}</p>
            <p className="mt-1 text-xs text-[#0fa98f]">{sub}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-[1fr_.8fr]">
        <div className="rounded-3xl border border-slate-200/70 p-4 dark:border-white/10">
          {["Life Insurance", "Income Protection"].map((policy) => (
            <div key={policy} className="flex items-center justify-between border-b border-slate-200/70 py-3 text-sm last:border-0 dark:border-white/10">
              <span className="flex items-center gap-2"><ShieldCheck size={15} className="text-[#0fa98f]" />{policy}</span>
              <span className="text-xs text-slate-500">Active</span>
            </div>
          ))}
        </div>
        <div className="rounded-3xl bg-[#082828] p-5 text-white shadow-[0_0_48px_rgba(15,169,143,.22)]">
          <p className="text-sm text-[#8fe3c2]">Friday insight</p>
          <p className="mt-3 text-sm leading-6">You may want to review your life cover as your income has changed.</p>
          <button className="mt-4 flex items-center gap-2 text-xs text-[#8fe3c2]">Review now <ArrowRight size={14} /></button>
        </div>
      </div>
    </div>
  );
}

function MobilePreview() {
  return (
    <div className="mx-auto w-[250px] rounded-[2.2rem] border border-slate-300 bg-[#050c0c] p-3 shadow-2xl dark:border-white/15">
      <div className="rounded-[1.7rem] bg-[#061616] p-5 text-white">
        <div className="mb-6 flex items-center justify-between text-[10px]"><span>9:41</span><span>Friday</span></div>
        <PathMark className="mb-6 w-8 scale-75" />
        <p className="font-editorial text-2xl leading-7">Good morning, Ahmed</p>
        <p className="mt-2 text-xs text-slate-400">How can I help you understand today?</p>
        <div className="mt-6 rounded-2xl bg-[#0fa98f] p-4 text-xs text-[#020707]">Help me understand critical illness cover <ArrowRight className="ml-auto mt-2" size={16} /></div>
        <p className="mt-7 text-xs uppercase tracking-[0.22em] text-[#8fe3c2]">Quick actions</p>
        {["Compare my options", "Review my policies", "Understand a term"].map((item) => (
          <div key={item} className="mt-3 rounded-2xl border border-white/10 p-3 text-xs">{item}</div>
        ))}
      </div>
    </div>
  );
}

export function BrandSystemSite() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  return (
    <main className={clsx(theme === "dark" && "dark", "min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500")}>
      <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
        <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3">
          <a href="#top" className="flex items-center gap-3 rounded-full bg-white/88 px-3 py-1.5 shadow-[0_0_28px_rgba(143,227,194,.12)]">
            <Image src="/assets/logo/friday_logo_transparent.png" alt="Friday logo" width={136} height={40} priority className="h-8 w-auto object-contain" />
          </a>
          <div className="hidden items-center gap-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 dark:text-slate-300 lg:flex">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="transition hover:text-[#0fa98f]">{item}</a>)}
          </div>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#082828] text-white dark:bg-white dark:text-[#082828]"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </nav>
      </header>

      <section id="top" className="brand-hero relative min-h-screen overflow-hidden px-5 pt-32 sm:px-8">
        <div className="noise" />
        <div className="arc-field" />
        <motion.div className="absolute left-[14%] top-[24%] h-2 w-2 rounded-full bg-[#8fe3c2] shadow-[0_0_30px_#8fe3c2]" animate={{ y: [0, 16, 0], opacity: [0.4, 1, 0.4] }} transition={{ duration: 5, repeat: Infinity }} />
        <motion.div className="absolute right-[17%] bottom-[26%] h-2 w-2 rounded-full bg-[#8fe3c2] shadow-[0_0_30px_#8fe3c2]" animate={{ y: [0, -18, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 6, repeat: Infinity }} />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.38em] text-[#8fe3c2]">Master Brand System</p>
            <h1 className="font-editorial text-6xl leading-[0.92] text-balance drop-shadow-[0_0_34px_rgba(255,255,255,.14)] sm:text-8xl lg:text-9xl">Friday Design System</h1>
            <p className="mode-muted mt-7 max-w-xl text-xl leading-9">The future of insurance understanding. Built for clarity. Designed for confidence.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#tokens" className="flex items-center gap-2 rounded-full bg-[#0fa98f] px-6 py-4 text-sm font-semibold text-[#020707] shadow-[0_0_42px_rgba(15,169,143,.5)]">Explore tokens <ArrowRight size={17} /></a>
              <a href="/assets/logo/friday_logo_transparent.png" download className="mode-secondary-button flex items-center gap-2 rounded-full border px-6 py-4 text-sm font-semibold backdrop-blur">Download logo <Download size={17} /></a>
              <a href="/docs/design.md" download className="mode-secondary-button flex items-center gap-2 rounded-full border px-6 py-4 text-sm font-semibold shadow-[0_0_30px_rgba(143,227,194,.16)] backdrop-blur">Download design.md <FileText size={17} /></a>
            </div>
          </Reveal>
          <Reveal><PathStair /></Reveal>
        </div>
        <div className="mode-line relative z-10 mx-auto mt-10 grid max-w-7xl gap-4 border-t py-8 sm:grid-cols-3">
          {["The user decides.", "The broker advises.", "Friday guides."].map((line) => <p key={line} className="font-editorial text-3xl">{line}</p>)}
        </div>
      </section>

      <section id="philosophy" className="px-5 py-24 sm:px-8">
        <SectionHeader eyebrow="Brand Philosophy" title="Insurance guidance, without the pressure." copy="Friday is not a broker, insurer, comparison site, or lead-generation marketplace. It is a neutral AI-native guidance platform that helps people understand what matters before anyone asks them to buy." />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {["Clarity", "Confidence", "Control", "Connection"].map((item) => (
            <Reveal key={item} className="glass rounded-[28px] p-7">
              <Sparkles className="mb-8 text-[#0fa98f]" />
              <h3 className="font-editorial text-4xl">{item}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">Understanding changes everything. The experience turns information into calm, durable decision-making.</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="logo" className="pearl-panel px-5 py-24 sm:px-8">
        <SectionHeader eyebrow="Logo System" title="Engineered for clarity. Designed for confidence." copy="Use the exact uploaded Friday logo asset. The symbol may act as a path, icon, loading state, spatial metaphor, or product signature." />
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal className="glass rounded-[30px] p-8">
            <div className="logo-display-tile rounded-[26px] p-8">
              <Image src="/assets/logo/friday_logo_transparent.png" alt="Friday logo lockup" width={885} height={260} className="mx-auto h-auto w-full max-w-2xl object-contain" />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Horizontal", "Stacked", "Icon only"].map((label, i) => (
                <div key={label} className="logo-display-tile rounded-3xl p-5 text-center">
                  {i === 0 && <Image src="/assets/logo/friday_logo_transparent.png" alt={`${label} logo preview`} width={220} height={64} className="mx-auto h-11 w-auto object-contain" />}
                  {i === 1 && <StackedLogoPreview />}
                  {i === 2 && <Image src="/assets/logo/friday_symbol_transparent.png" alt={`${label} logo preview`} width={299} height={231} className="mx-auto h-20 w-auto object-contain" />}
                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="glass rounded-[30px] p-8">
            <h3 className="font-editorial text-4xl">Downloadable logo previews</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">Source PNG, symbolic SVG placeholder, and product-icon placeholder sit in the public asset structure for production replacement.</p>
            <div className="mt-6 grid gap-3">
              {[
                ["/assets/logo/friday_logo_transparent.png", "Friday transparent PNG"],
                ["/assets/placeholders/friday-path-symbol.svg", "Path symbol SVG placeholder"],
                ["/assets/placeholders/friday-app-icon.svg", "App icon SVG placeholder"],
                ["/docs/design.md", "Friday implementation guide design.md"],
              ].map(([href, label]) => (
                <a key={href} href={href} download className="flex items-center justify-between rounded-2xl border border-slate-200/70 p-4 text-sm transition hover:border-[#0fa98f] dark:border-white/10">
                  <span>{label}</span><Download size={17} className="text-[#0fa98f]" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="color" className="px-5 py-24 sm:px-8">
        <SectionHeader eyebrow="Color Palette" title="Deep emerald, teal, black, and pearl." copy="The palette keeps Friday calm, premium, and legible across dark and light systems." />
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {colors.map(([name, hex]) => (
            <Reveal key={hex} className="glass overflow-hidden rounded-[28px]">
              <div className="h-32" style={{ background: hex }} />
              <div className="p-5">
                <p className="font-semibold">{name}</p>
                <p className="mt-1 font-mono text-xs text-slate-500 dark:text-slate-400">{hex}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          {sections.slice(2).map((section) => (
            <Reveal key={section.eyebrow} className="glass relative overflow-hidden rounded-[34px] p-8">
              <div className="absolute -right-20 top-8 h-56 w-56 rounded-full bg-[#0fa98f]/20 blur-3xl" />
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0fa98f]">{section.eyebrow}</p>
              <h3 className="mt-5 font-editorial text-5xl">{section.title}</h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">{section.copy}</p>
              <div className="mt-10 space-y-5">
                {[120, 180, 240].map((w) => <div key={w} className="path-step" style={{ width: w }} />)}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="typography" className="pearl-panel px-5 py-24 sm:px-8">
        <SectionHeader eyebrow="Typography" title="Editorial serif. Clean supporting sans." copy="Recoleta-style display behavior is represented with a refined editorial serif; Inter carries body, interface, and data." />
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal className="glass rounded-[30px] p-8">
            <p className="font-editorial text-9xl leading-none">Aa</p>
            <p className="mt-4 font-editorial text-3xl italic text-[#0fa98f]">Where clarity leads the way.</p>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">Inter for body. Clarity in every word.</p>
          </Reveal>
          <Reveal className="glass rounded-[30px] p-8">
            {[
              ["H1", "Insurance understanding starts here.", "72/80"],
              ["H2", "Clarity changes everything.", "48/54"],
              ["H3", "Understanding is the foundation of confidence.", "28/36"],
              ["Body", "We help you understand so you can decide with confidence.", "16/28"],
              ["Caption", "Guidance without pressure. Always factual.", "12/18"],
            ].map(([label, sample, scale]) => (
              <div key={label} className="grid grid-cols-[56px_1fr_70px] gap-4 border-b border-slate-200/70 py-5 last:border-0 dark:border-white/10">
                <span className="text-xs text-[#0fa98f]">{label}</span>
                <span className={clsx(label.startsWith("H") && "font-editorial text-2xl sm:text-4xl")}>{sample}</span>
                <span className="font-mono text-xs text-slate-500">{scale}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8">
        <SectionHeader eyebrow="Iconography" title="Soft geometry. Human focus." copy="Icons use rounded geometry, modest stroke weight, and functional meaning rather than decoration." />
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {icons.map(([label, Icon]) => (
            <Reveal key={label as string} className="glass rounded-[24px] p-5 text-center">
              <Icon className="mx-auto text-[#0fa98f]" />
              <p className="mt-4 text-xs font-medium">{label as string}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="ai-ui" className="contrast-section px-5 py-24 sm:px-8">
        <SectionHeader eyebrow="AI Conversational UI" title="Intelligence that guides. A system that understands." copy="Friday’s AI UI is calm, factual, and human at the center. It compares without ranking by incentive and explains without pretending to advise." />
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.2fr_.8fr]">
          <Reveal><ChatPreview /></Reveal>
          <Reveal className="space-y-4">
            {capabilities.map((item, i) => (
              <div key={item} className="glass rounded-3xl p-5">
                <p className="text-xs text-[#8fe3c2]">0{i + 1}</p>
                <p className="mt-2 font-editorial text-2xl">{item}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="components" className="px-5 py-24 sm:px-8">
        <SectionHeader eyebrow="Components" title="A living brand operating system." copy="Buttons, cards, inputs, navigation, dashboard cards, notifications, and quote surfaces share one visual language." />
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <Reveal className="glass rounded-[30px] p-7">
            <h3 className="mb-6 font-editorial text-4xl">Buttons and inputs</h3>
            <ButtonShowcase />
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <label className="rounded-3xl border border-slate-200/70 bg-white/45 p-4 text-sm dark:border-white/10 dark:bg-white/5"><span className="block text-xs text-slate-500">Policy upload</span><span className="mt-3 flex items-center gap-2"><Upload size={16} className="text-[#0fa98f]" /> Choose document</span></label>
              <label className="rounded-3xl border border-slate-200/70 bg-white/45 p-4 text-sm dark:border-white/10 dark:bg-white/5"><span className="block text-xs text-slate-500">Search</span><span className="mt-3 flex items-center gap-2 text-slate-500"><Search size={16} /> What does excess mean?</span></label>
            </div>
          </Reveal>
          <Reveal className="glass rounded-[30px] p-7">
            <h3 className="mb-6 font-editorial text-4xl">Notifications</h3>
            {[
              [Bell, "Policy review due soon", "28 days left"],
              [SlidersHorizontal, "Your profile has changed", "Update now"],
              [Sparkles, "New option matches you", "See what is new"],
            ].map(([Icon, title, meta]) => (
              <div key={title as string} className="mb-3 flex items-center justify-between rounded-2xl border border-slate-200/70 p-4 text-sm dark:border-white/10">
                <span className="flex items-center gap-3"><Icon className="text-[#0fa98f]" size={18} />{title as string}</span>
                <span className="text-xs text-[#0fa98f]">{meta as string}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="pearl-panel px-5 py-24 sm:px-8">
        <SectionHeader eyebrow="Product Surfaces" title="One experience. Every device." copy="The system scales from conversational entry points to dashboard governance and mobile decision support." />
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.2fr_.8fr]">
          <Reveal><DashboardPreview /></Reveal>
          <Reveal><MobilePreview /></Reveal>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8">
        <SectionHeader eyebrow="Responsive Examples" title="Dark and light. Always calm." copy="Components adapt without losing identity: generous whitespace, glass depth, path motion, and legible contrast." />
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          {["Dark Mode", "Light Mode"].map((mode, i) => (
            <Reveal key={mode} className={clsx("rounded-[34px] p-7", i === 0 ? "cinema-bg text-white" : "pearl-panel text-[#082828]")}>
              <p className="text-xs uppercase tracking-[0.26em] text-[#0fa98f]">{mode}</p>
              <PathMark className="mt-10" />
              <p className="mt-10 font-editorial text-5xl">One step at a time. Always Friday.</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[Eye, Lock, Navigation].map((Icon, idx) => <div key={idx} className="rounded-3xl border border-current/10 p-5"><Icon className="text-[#0fa98f]" /><p className="mt-4 text-sm">Guidance surface</p></div>)}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="contrast-section px-5 py-24 sm:px-8">
        <SectionHeader eyebrow="Export Assets" title="Production paths for every asset." copy="The structure is ready for final SVG, PNG, app icon, product surfaces, and documented placeholders." />
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {[
            ["Logo PNG", "/assets/logo/friday_logo_transparent.png", Download],
            ["Path Symbol SVG", "/assets/placeholders/friday-path-symbol.svg", Download],
            ["Token Documentation", "/docs/tokens.md", Code2],
            ["Implementation Guide", "/docs/design.md", FileText],
          ].map(([label, href, Icon]) => (
            <Reveal key={label as string} className="glass rounded-[28px] p-7">
              <Icon className="text-[#8fe3c2]" />
              <p className="mt-8 font-editorial text-3xl">{label as string}</p>
              <a href={href as string} download className="mode-secondary-button mt-6 inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm">Download <ArrowRight size={16} /></a>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="tokens" className="path-grid px-5 py-24 sm:px-8">
        <SectionHeader eyebrow="Developer Tokens" title="The system, ready to ship." copy="Color tokens, CSS variables, typography scale, motion timing, and component semantics live in code and docs." />
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal className="glass rounded-[30px] p-7">
            <h3 className="font-editorial text-4xl">CSS variables</h3>
            <div className="mt-6 space-y-3">
              {tokenRows.map(([name, value, desc]) => (
                <div key={name} className="token-chip rounded-2xl p-4">
                  <div className="flex items-center justify-between gap-4">
                    <code className="font-mono text-xs text-[#0fa98f]">{name}</code>
                    <code className="font-mono text-xs">{value}</code>
                  </div>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="glass rounded-[30px] p-7">
            <h3 className="font-editorial text-4xl">Implementation notes</h3>
            <pre className="mt-6 overflow-x-auto rounded-3xl bg-[#020707] p-5 text-xs leading-6 text-[#8fe3c2]"><code>{`:root {
  --friday-ink: #082828;
  --friday-emerald: #0FA98F;
  --friday-mint: #8FE3C2;
  --friday-pearl: #F7FAF9;
}

.guidance-surface {
  background: var(--surface);
  border: 1px solid var(--line);
  backdrop-filter: blur(22px);
}`}</code></pre>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[Palette, Type, Box].map((Icon, i) => <div key={i} className="rounded-3xl border border-slate-200/70 p-5 dark:border-white/10"><Icon className="text-[#0fa98f]" /><p className="mt-4 text-sm">{["Color", "Type", "Components"][i]}</p></div>)}
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-[var(--line)] px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex w-fit rounded-full bg-white/88 px-3 py-1.5">
            <Image src="/assets/logo/friday_logo_transparent.png" alt="Friday logo" width={150} height={44} className="h-9 w-auto object-contain" />
          </span>
          <p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">Friday does not sell you insurance. Friday helps you understand it. One step at a time. Always Friday.</p>
          <p className="text-xs text-slate-500">{year}</p>
        </div>
      </footer>
    </main>
  );
}
