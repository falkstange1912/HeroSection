import React, { useState, useEffect, useRef } from "react";
import { 
  motion, 
  AnimatePresence 
} from "motion/react";
import { 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Cpu, 
  Feather, 
  Play, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Activity, 
  ChevronRight,
  Globe,
  Compass,
  Monitor,
  Heart
} from "lucide-react";

// Types for the universal design customization
type VibeType = "luxury" | "creative" | "tech";

interface ProjectStats {
  views: string;
  conversion: string;
  growth: string;
}

export default function App() {
  const [activeVibe, setActiveVibe] = useState<VibeType>("luxury");
  const [demoActive, setDemoActive] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  
  // Custom cursor / light flare tracking
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Automated numbers ticking up in the showcase mockup
  const [chartValue, setChartValue] = useState<number>(78);
  useEffect(() => {
    const interval = setInterval(() => {
      setChartValue((prev) => {
        const next = prev + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 3);
        return Math.min(Math.max(next, 70), 95);
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Visual characteristics for the three industry vibes
  const vibeConfig = {
    luxury: {
      badge: "QUIET LUXURY / MINIMALISM",
      tagline: "Die Kunst des Wesentlichen",
      headingStart: "Zeitlose Ästhetik",
      headingAccent: "neu definiert.",
      subheadline: "Ein universelles Designsystem, konzipiert für Marken mit höchstem Anspruch an Klarheit, Präzision und Understatement.",
      primaryBtn: "Kollektion erkunden",
      secondaryBtn: "Design-Manifest",
      accentColor: "from-[#C5A880] to-[#E5D5C0]",
      accentBorder: "border-[#C5A880]/30",
      accentText: "text-[#C5A880]",
      badgeBg: "bg-[#C5A880]/10 text-[#C5A880]",
      bgGlow: "rgba(197, 168, 128, 0.04)",
      fontHeading: "font-serif tracking-normal",
    },
    creative: {
      badge: "CREATIVE STUDIOS / PORTFOLIO",
      tagline: "Freiraum für Ideen",
      headingStart: "Mutige Visionen",
      headingAccent: "Form geben.",
      subheadline: "Dynamische Raster, fließende Übergänge und kompromisslose Freiheit für digitale Erlebnisse, die im Gedächtnis bleiben.",
      primaryBtn: "Portfolio ansehen",
      secondaryBtn: "Prozess kennenlernen",
      accentColor: "from-[#D8B4FE] to-[#818CF8]",
      accentBorder: "border-[#818CF8]/30",
      accentText: "text-[#818CF8]",
      badgeBg: "bg-[#818CF8]/10 text-[#818CF8]",
      bgGlow: "rgba(129, 140, 248, 0.05)",
      fontHeading: "font-sans font-extrabold tracking-tight",
    },
    tech: {
      badge: "DEEP TECH / PLATFORM",
      tagline: "Next-Gen Infrastruktur",
      headingStart: "Komplexe Prozesse",
      headingAccent: "einfach steuern.",
      subheadline: "Präzises, modulares Interface mit maximaler Performance und blitzschnellem Feedback. Gebaut für die Entwickler von morgen.",
      primaryBtn: "Konsole öffnen",
      secondaryBtn: "API-Referenz lesen",
      accentColor: "from-[#10B981] to-[#06B6D4]",
      accentBorder: "border-[#10B981]/30",
      accentText: "text-[#10B981]",
      badgeBg: "bg-[#10B981]/10 text-[#10B981]",
      bgGlow: "rgba(16, 185, 129, 0.04)",
      fontHeading: "font-sans font-semibold tracking-wide uppercase",
    }
  };

  const currentSettings = vibeConfig[activeVibe];

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#090A0C] text-[#F4F4F5] font-sans selection:bg-[#C5A880] selection:text-[#090A0C] overflow-x-hidden"
    >
      {/* Light spotlight background effect */}
      <div 
        className="absolute pointer-events-none inset-0 transition-opacity duration-500 hidden md:block"
        style={{
          background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, ${currentSettings.bgGlow}, transparent 80%)`
        }}
      />

      {/* Decorative clean line guides in background */}
      <div className="absolute inset-y-0 left-12 w-px bg-neutral-900/40 pointer-events-none hidden lg:block" />
      <div className="absolute inset-y-0 right-12 w-px bg-neutral-900/40 pointer-events-none hidden lg:block" />

      {/* Top Navbar */}
      <header className="relative z-50 max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between border-b border-neutral-900/50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-neutral-800 to-neutral-950 border border-neutral-800/80 flex items-center justify-center">
            <span className={`text-sm font-semibold font-mono ${currentSettings.accentText} transition-all duration-300`}>A</span>
          </div>
          <span className="font-sans text-sm font-bold tracking-[0.25em] text-[#F4F4F5]">AURUM</span>
        </div>

        {/* Central interactive Vibe Swappers as Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-neutral-950/80 p-1 rounded-full border border-neutral-800/60 backdrop-blur-md">
          {(["luxury", "creative", "tech"] as VibeType[]).map((vibe) => (
            <button
              key={vibe}
              id={`nav-vibe-btn-${vibe}`}
              onClick={() => setActiveVibe(vibe)}
              className={`relative px-4 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-300 ${
                activeVibe === vibe 
                  ? "text-white" 
                  : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              {activeVibe === vibe && (
                <motion.div
                  layoutId="activeNavTab"
                  className="absolute inset-0 bg-neutral-900 rounded-full border border-neutral-800"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 capitalize">
                {vibe === "luxury" ? "Quiet Luxury" : vibe === "creative" ? "Creative Showcase" : "Deep Tech"}
              </span>
            </button>
          ))}
        </nav>

        {/* Right Nav Action */}
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-xs text-neutral-500 font-mono">APP v2.4.0</span>
          <a
            id="cta-nav-action"
            href="#try-section"
            className="px-4 py-2 rounded-lg text-xs font-medium border border-neutral-800 hover:border-neutral-700 bg-neutral-950/40 text-neutral-300 hover:text-white transition-all duration-200"
          >
            Schnittstelle testen
          </a>
        </div>
      </header>

      {/* Floating Interactive Notification Indicator */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-950/80 border border-neutral-900/80 backdrop-blur-sm shadow-xl animate-fade-in">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-mono tracking-wider text-neutral-400">
            CHOOSE YOUR WORLD:
          </span>
          <div className="flex gap-1">
            <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded uppercase ${activeVibe === 'luxury' ? 'bg-[#C5A880]/10 text-[#C5A880] font-bold' : 'text-neutral-600'}`}>Luxury</span>
            <span className="text-neutral-700 text-[10px]">•</span>
            <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded uppercase ${activeVibe === 'creative' ? 'bg-[#818CF8]/10 text-[#818CF8] font-bold' : 'text-neutral-600'}`}>Creative</span>
            <span className="text-neutral-700 text-[10px]">•</span>
            <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded uppercase ${activeVibe === 'tech' ? 'bg-[#10B981]/10 text-[#10B981] font-bold' : 'text-neutral-600'}`}>Tech</span>
          </div>
        </div>
      </div>

      {/* Hero Section Container */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-20">
        
        {/* Left Side: Content & Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 select-text">
          
          {/* Subtle Accent Tag */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5">
              <span className={`px-2 py-0.5 text-[10px] font-mono tracking-widest uppercase rounded ${currentSettings.badgeBg} border ${currentSettings.accentBorder} transition-colors duration-500`}>
                {currentSettings.badge}
              </span>
              <span className="text-neutral-600 text-xs">/</span>
              <span className="text-xs text-neutral-400 font-mono tracking-wider">{currentSettings.tagline}</span>
            </div>
          </div>

          {/* Main Title Heading */}
          <div className="space-y-4">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl transition-all duration-500 text-[#F4F4F5] leading-[1.08] ${currentSettings.fontHeading}`}>
              {currentSettings.headingStart} <br className="hidden sm:inline" />
              <span className="relative z-10">
                <span className={`bg-gradient-to-r ${currentSettings.accentColor} bg-clip-text text-transparent`}>
                  {currentSettings.headingAccent}
                </span>
                {/* Underline accent effect */}
                <span className="absolute bottom-1 left-0 w-full h-[2px] bg-gradient-to-r opacity-20 from-transparent via-neutral-400 to-transparent"></span>
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-neutral-400 text-base sm:text-lg max-w-xl leading-relaxed font-light transition-all duration-300">
              {currentSettings.subheadline}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              id={`primary-cta-${activeVibe}`}
              onClick={() => setDemoActive(true)}
              className="group relative px-6 py-3.5 rounded-xl text-sm font-semibold overflow-hidden transition-all duration-300 active:scale-95 shadow-xl hover:shadow-[#C5A880]/5 cursor-pointer bg-neutral-100 text-neutral-950 hover:bg-white flex items-center justify-center gap-2"
            >
              <span>{currentSettings.primaryBtn}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              id={`secondary-cta-${activeVibe}`}
              onClick={() => {
                setCopiedCode(true);
                setTimeout(() => setCopiedCode(false), 2000);
              }}
              className="px-6 py-3.5 rounded-xl text-sm font-medium border border-neutral-800 bg-neutral-950/20 backdrop-blur-sm text-neutral-300 hover:text-white hover:bg-neutral-900/30 hover:border-neutral-700 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{copiedCode ? "Code kopiert!" : currentSettings.secondaryBtn}</span>
              {!copiedCode && <Layers className="w-4 h-4 text-neutral-500 group-hover:text-neutral-300" />}
              {copiedCode && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
            </button>
          </div>

          {/* Value Propositions / Industry Features */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-900/60 max-w-xl">
            {[
              { label: "Premium Qualität", val: activeVibe === 'luxury' ? "Premium" : activeVibe === 'creative' ? "Unbegrenzt" : "99.99%", desc: "Präzision pur" },
              { label: "Lara-Zeit", val: activeVibe === 'luxury' ? "< 40ms" : activeVibe === 'creative' ? "Flüssig" : "0.08s", desc: "Hervorragend" },
              { label: "Benutzerkontakt", val: activeVibe === 'luxury' ? "Exklusiv" : activeVibe === 'creative' ? "100% Frei" : "RESTful AI", desc: "Schnittstelle" }
            ].map((prop, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setHoveredFeature(idx)}
                onMouseLeave={() => setHoveredFeature(null)}
                className="group/item cursor-default"
              >
                <div className={`text-xs font-mono text-neutral-500 transition-colors ${hoveredFeature === idx ? currentSettings.accentText : ''}`}>
                  {prop.label}
                </div>
                <div className="text-base font-semibold text-neutral-200 mt-1 flex items-center gap-1">
                  {prop.val}
                </div>
                <div className="text-[10px] text-neutral-600 font-mono mt-0.5">{prop.desc}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Side: Interactive Mockup Showpiece */}
        <div className="lg:col-span-5 relative w-full h-full min-h-[440px] flex items-center justify-center">
          
          {/* Subtle ambient light rings behind the mockup container */}
          <div className="absolute w-[120%] h-[120%] bg-gradient-to-br from-neutral-950/5 via-[#0B0C0E] to-neutral-950/1 pointer-events-none rounded-full blur-3xl -z-10" />
          
          {/* Main Visual Container simulating a pristine Glass Device App */}
          <div className="w-full max-w-md rounded-2xl bg-[#0F1115]/90 border border-neutral-800/80 shadow-2xl p-6 overflow-hidden relative backdrop-blur-md">
            
            {/* Top Device Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-neutral-900/60">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/30 border border-red-500/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/30 border border-yellow-500/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/30 border border-green-500/20" />
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono text-neutral-500 bg-neutral-950/50 px-2 py-0.5 rounded border border-neutral-900">
                <Globe className="w-3 h-3 text-neutral-600 animate-spin" />
                <span>aurum-editor.sh</span>
              </div>
              <ChevronRight className="w-3-h-3 text-neutral-600" />
            </div>

            {/* Simulated Live View Canvas Area */}
            <div className="pt-6 space-y-6">
              
              {/* Animated Interactive Visualizer */}
              <div className="relative h-44 rounded-xl bg-gradient-to-b from-[#13151A] to-[#0D0E12] border border-neutral-800/60 p-4 overflow-hidden flex flex-col justify-between">
                
                {/* Decorative Tech Grid Overlay */}
                <div className="absolute inset-0 bg-grid-[#ffffff]/[0.015] pointer-events-none" />
                
                <div className="flex items-center justify-between relative z-10">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Echtzeit Leistung</span>
                    <h3 className="text-lg font-bold text-[#F4F4F5] flex items-baseline gap-1.5">
                      {chartValue}% <span className="text-xs text-emerald-400 font-mono font-normal">▲ 3.2%</span>
                    </h3>
                  </div>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-tr ${currentSettings.accentColor} opacity-90 p-1.5 text-neutral-950 shadow-lg`}>
                    <Sparkles className="w-4 h-4" />
                  </span>
                </div>

                {/* Live Responsive Dynamic Graphic/Waveform in Vector */}
                <div className="h-16 flex items-end gap-[3px] pt-4 select-none">
                  {Array.from({ length: 32 }).map((_, i) => {
                    const heightMultiplier = Math.sin(i * 0.15 + (chartValue * 0.05)) * 0.4 + 0.6;
                    const styleHeight = `${Math.floor(heightMultiplier * 100)}%`;
                    return (
                      <div
                        key={i}
                        className={`w-full transition-all duration-1000 origin-bottom`}
                        style={{ 
                          height: styleHeight,
                          background: `linear-gradient(to top, rgba(20, 20, 20, 0.4), ${activeVibe === 'luxury' ? '#C5A880' : activeVibe === 'creative' ? '#818CF8' : '#10B981'}${i % 3 === 0 ? 'de' : '55'})`
                        }}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Bottom Interactive Widgets inside device */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Small Left Widget */}
                <div className="p-4 rounded-xl bg-[#13151A]/60 border border-neutral-800/50 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-neutral-500">SYSTEM v2.0</span>
                    <Cpu className={`w-3.5 h-3.5 ${currentSettings.accentText} transition-all duration-300`} />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-neutral-300">Auslastung</div>
                    <div className="w-full bg-neutral-950 rounded-full h-1 overflow-hidden mt-1">
                      <div 
                        className={`h-full transition-all duration-1000 ${
                          activeVibe === 'luxury' ? 'bg-[#C5A880]' : activeVibe === 'creative' ? 'bg-[#818CF8]' : 'bg-[#10B981]'
                        }`}
                        style={{ width: `${chartValue - 20}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Small Right Widget: Preset Selector mimic */}
                <div className="p-4 rounded-xl bg-[#13151A]/60 border border-neutral-800/50 flex flex-col justify-between">
                  <div className="text-[10px] font-mono text-neutral-500">SCHNELLE VORSCHAU</div>
                  <div className="flex flex-col gap-1.5 mt-2">
                    <button 
                      onClick={() => setActiveVibe("luxury")}
                      className={`text-[10px] px-2 py-1 rounded text-left transition-all ${
                        activeVibe === "luxury" 
                          ? "bg-neutral-800/70 border border-neutral-700/50 text-[#C5A880]" 
                          : "text-neutral-500 hover:text-neutral-300"
                      }`}
                    >
                      ◇ Bronze Luxe
                    </button>
                    <button 
                      onClick={() => setActiveVibe("creative")}
                      className={`text-[10px] px-2 py-1 rounded text-left transition-all ${
                        activeVibe === "creative" 
                          ? "bg-neutral-800/70 border border-neutral-700/50 text-[#818CF8]" 
                          : "text-neutral-400 hover:text-neutral-300"
                      }`}
                    >
                      ◇ Radiant Soft
                    </button>
                  </div>
                </div>

              </div>

              {/* Status footer inside device */}
              <div className="flex items-center justify-between text-[10px] text-neutral-500 pt-2 font-mono">
                <span className="flex items-center gap-1">
                  <Activity className="w-3 h-3 text-neutral-600" />
                  Latency: 14ms
                </span>
                <span className="text-[#F4F4F5]/80 underline cursor-pointer hover:text-white transition-all">
                  Dokumentation öffnen
                </span>
              </div>

            </div>

          </div>

          {/* Absolute floating micro design indicators for realistic premium atmosphere */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#C5A880]/10 rounded-full blur-2xl pointer-events-none hidden xl:block" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#818CF8]/5 rounded-full blur-2xl pointer-events-none hidden xl:block" />
        </div>

      </section>

      {/* Trust Logistics / "Trusted by" Monochrome Logorow */}
      <footer className="relative z-30 max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16 border-t border-b border-neutral-900/50 mt-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-4">
          <div className="space-y-1">
            <h4 className="text-xs font-mono tracking-widest text-[#F4F4F5] uppercase">Globale Referenzen</h4>
            <p className="text-[11px] text-neutral-500">Vertraut von Branchenführern im Premium-Segment.</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 md:flex items-center gap-8 md:gap-12">
            {[
              { name: "KRONOS", symbol: "K" },
              { name: "AETHER", symbol: "Æ" },
              { name: "SOLIS", symbol: "S" },
              { name: "NEXUS", symbol: "N" },
              { name: "VESPER", symbol: "V" }
            ].map((logo, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-1.5 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default group"
              >
                <span className={`text-[12px] font-mono border border-neutral-700/60 px-1.5 py-0.5 rounded bg-neutral-950 text-neutral-400 group-hover:text-white transition-colors`}>
                  {logo.symbol}
                </span>
                <span className="font-sans text-xs tracking-[0.25em] font-bold text-neutral-300 group-hover:text-white transition-colors">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </footer>

      {/* Interactive Modal / Info Dropdown for Demo */}
      <AnimatePresence>
        {demoActive && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-md w-full bg-[#0F1115] border border-neutral-800 p-6 rounded-2xl relative shadow-2xl"
            >
              <div className="space-y-4 text-center">
                <div className={`w-12 h-12 rounded-full ${currentSettings.badgeBg} flex items-center justify-center mx-auto`}>
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-sans">Vorschau & Schnittstelle</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  Dieses High-End Template wurde vollmodular in reinem React, Tailwind CSS v4 und TypeScript implementiert. Es ist sofort einsatzbereit für Ihr nächstes Projekt.
                </p>
                
                <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-900 text-left font-mono text-[11px] text-neutral-400 space-y-1">
                  <div>// Installation</div>
                  <div className="text-neutral-200">npm install motion lucide-react</div>
                  <div className="text-neutral-600 mt-2">// Importiert & Rendered</div>
                  <div className="text-neutral-200">import App from './HighEndHero';</div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => {
                      setCopiedCode(true);
                      setTimeout(() => setCopiedCode(false), 2000);
                    }}
                    className="flex-1 py-2.5 rounded-lg text-xs font-semibold bg-neutral-100 hover:bg-white text-neutral-950 transition-colors cursor-pointer"
                  >
                    {copiedCode ? "Kopiert!" : "Code kopieren"}
                  </button>
                  <button
                    onClick={() => setDemoActive(false)}
                    className="flex-1 py-2.5 rounded-lg text-xs font-medium border border-neutral-800 text-neutral-300 hover:bg-neutral-800/50 transition-colors cursor-pointer"
                  >
                    Schließen
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Subtle details about selection style toggle helper */}
      <section id="try-section" className="max-w-7xl mx-auto px-6 lg:px-12 py-10 text-center relative z-20">
        <p className="text-[10px] font-mono text-neutral-500 tracking-wider">
          EXPERIMENTIEREN SIE MIT DEN BUTTONS OBEN IN DER NAVIGATIONSLEISTE ODER IM DEMO-KASTEN, UM DEN STIL JEDERZEIT ANZUPASSEN.
        </p>
      </section>

    </div>
  );
}
