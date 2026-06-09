import React, { useState, useEffect, useRef } from "react";
import { 
  motion, 
  AnimatePresence 
} from "motion/react";
import { 
  ArrowRight, 
  Compass, 
  ChevronRight,
  Globe,
  Activity,
  Trees,
  UserPlus,
  CalendarRange,
  Clock,
  Check
} from "lucide-react";

export default function App() {
  const [demoActive, setDemoActive] = useState<boolean>(false);
  
  // Mouse tracking für den edlen Licht-Effekt im Hintergrund
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

  // Live-Zähler Simulation für das Bewerber-Tool im Mockup
  const [applicantCount, setApplicantCount] = useState<number>(12);
  useEffect(() => {
    const interval = setInterval(() => {
      setApplicantCount((prev) => prev + (Math.random() > 0.85 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#070907] text-[#F4F4F5] font-sans selection:bg-[#4E6E52] selection:text-white overflow-x-hidden"
    >
      {/* Subtiler grüner Ambient-Glow im Hintergrund */}
      <div 
        className="absolute pointer-events-none inset-0 transition-opacity duration-500 hidden md:block"
        style={{
          background: `radial-gradient(900px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(78, 110, 82, 0.06), transparent 80%)`
        }}
      />

      {/* Hintergrund-Linien für edlen Look */}
      <div className="absolute inset-y-0 left-12 w-px bg-neutral-900/40 pointer-events-none hidden lg:block" />
      <div className="absolute inset-y-0 right-12 w-px bg-neutral-900/40 pointer-events-none hidden lg:block" />

      {/* Header */}
      <header className="relative z-50 max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between border-b border-neutral-900/50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#1B2A1C] to-[#070907] border border-[#344E37]/40 flex items-center justify-center">
            <Trees className="w-4 h-4 text-[#A3B899]" />
          </div>
          <span className="font-sans text-sm font-bold tracking-[0.25em] text-[#F4F4F5]">RÜMPELGRÜN</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-xs font-mono text-neutral-400">
          <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[#A3B899]" /> Garten- & Landschaftsbau</span>
          <span className="flex items-center gap-1"><Check className="w-3 h-3 text-[#A3B899]" /> Region Braunschweig</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-xs text-neutral-500 font-mono">PROTOTYP v1.0</span>
          <button
            onClick={() => setDemoActive(true)}
            className="px-4 py-2 rounded-lg text-xs font-medium border border-[#344E37]/40 hover:border-[#4E6E52] bg-[#0C100D] text-neutral-300 hover:text-white transition-all duration-200 cursor-pointer"
          >
            Konzept öffnen
          </button>
        </div>
      </header>

      {/* Status-Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0C100D] border border-neutral-900 shadow-xl">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-mono tracking-wider text-neutral-400">
            DIGITALES GRUNDGERÜST FÜR INTERNEN TESTBEREICH
          </span>
        </div>
      </div>

      {/* Main Hero Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-20">
        
        {/* Links: Text & Verkaufsargumente */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
          
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5">
              <span className="px-2 py-0.5 text-[10px] font-mono tracking-widest uppercase rounded bg-[#4E6E52]/10 text-[#A3B899] border border-[#4E6E52]/30">
                Exklusiver Vorgeschmack
              </span>
              <span className="text-neutral-600 text-xs">/</span>
              <span className="text-xs text-neutral-400 font-mono tracking-wider">Moderne Prozesse für Meisterbetriebe</span>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#F4F4F5] leading-[1.1] font-sans font-bold tracking-tight">
              Lebendige Außenanlagen. <br />
              <span className="relative z-10">
                <span className="bg-gradient-to-r from-[#A3B899] via-[#77967B] to-[#4E6E52] bg-clip-text text-transparent">
                  Perfekt organisiert.
                </span>
              </span>
            </h1>
            
            <p className="text-neutral-400 text-base sm:text-lg max-w-xl leading-relaxed font-light">
              Ein maßgeschneidertes, digitales System für Rümpelgrün. Entwickelt, um erstklassiges Handwerk online sichtbar zu machen, Fachkräfte anzuziehen und lästigen Papierkram im Büro komplett zu automatisieren.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => setDemoActive(true)}
              className="group relative px-6 py-3.5 rounded-xl text-sm font-semibold overflow-hidden transition-all duration-300 active:scale-95 shadow-xl bg-neutral-100 text-neutral-950 hover:bg-white flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Funktionen testen</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="px-6 py-3.5 rounded-xl text-sm font-medium border border-neutral-800 bg-[#070907]/20 text-neutral-400 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-neutral-600" />
              <span>Prototyp noch im Aufbau</span>
            </div>
          </div>

          {/* Integrierte Tools Übersicht */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-neutral-900/60 max-w-xl">
            {[
              { 
                icon: <UserPlus className="w-4 h-4 text-[#A3B899]" />, 
                title: "60-Sekunden Bewerbertool", 
                desc: "Fachkräfte bewerben sich mobil mit 3 Klicks – komplett ohne Anschreiben oder Lebenslauf-Stress." 
              },
              { 
                icon: <CalendarRange className="w-4 h-4 text-[#A3B899]" />, 
                title: "Digitaler Anfrage-Planer", 
                desc: "Kunden übermitteln Maße und Fotos vorab. Sortiert unqualifizierte Anfragen aus, bevor das Telefon klingelt." 
              }
            ].map((tool, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-[#0C100D]/60 border border-neutral-900 hover:border-[#344E37]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-neutral-200">
                  {tool.icon}
                  {tool.title}
                </div>
                <div className="text-xs text-neutral-500 mt-2 leading-relaxed">{tool.desc}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Rechts: Live-Vorschau des Dashboards */}
        <div className="lg:col-span-5 relative w-full h-full min-h-[440px] flex items-center justify-center">
          
          <div className="absolute w-[120%] h-[120%] bg-gradient-to-br from-[#121813]/20 via-[#070907] to-transparent pointer-events-none rounded-full blur-3xl -z-10" />
          
          {/* Mockup Container */}
          <div className="w-full max-w-md rounded-2xl bg-[#0C100D] border border-neutral-800 shadow-2xl p-6 overflow-hidden relative backdrop-blur-md">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-neutral-900/60">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/10" />
              </div>
              <div className="flex items-center gap-1 text-[10px] font-mono text-neutral-500 bg-black px-2 py-0.5 rounded border border-neutral-900">
                <Globe className="w-3 h-3 text-neutral-600" />
                <span>ruempelgruen-vorschau.de</span>
              </div>
              <ChevronRight className="w-3 h-3 text-neutral-600" />
            </div>

            {/* Canvas Area */}
            <div className="pt-6 space-y-4">
              
              {/* Professionelles, thematisch passendes Galabau-Bild von Unsplash */}
              <div className="relative h-48 rounded-xl border border-neutral-800 overflow-hidden bg-neutral-900">
                <img 
                  src="https://images.unsplash.com/photo-1558905617-15456d526607?auto=format&fit=crop&w=600&q=80" 
                  alt="Rümpelgrün Projekt" 
                  className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pt-8">
                  <span className="text-[10px] font-mono text-[#A3B899] tracking-wider uppercase">Aktuelles Projekt</span>
                  <p className="text-xs font-medium text-white">Präzisionsarbeit im Außenbereich</p>
                </div>
              </div>

              {/* Widget: Bewerber-Live-Anzeige */}
              <div className="relative rounded-xl bg-gradient-to-b from-[#111612] to-[#070907] border border-[#344E37]/30 p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between relative z-10">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Digitale Bewerbungseingänge</span>
                    <h3 className="text-base font-bold text-[#F4F4F5] flex items-baseline gap-1.5 mt-1">
                      {applicantCount} Gesellen <span className="text-xs text-emerald-400 font-mono font-normal">▲ Aktiv</span>
                    </h3>
                  </div>
                  <span className="w-7 h-7 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#A3B899] to-[#4E6E52] p-1.5 text-neutral-950 shadow-lg">
                    <UserPlus className="w-3.5 h-3.5 text-white" />
                  </span>
                </div>

                <div className="mt-3 space-y-1.5">
                  <div className="p-2 rounded bg-black/40 border border-neutral-900 flex items-center justify-between text-[11px]">
                    <span className="text-neutral-300 font-medium">Marco S. (Landschaftsgärtner)</span>
                    <span className="text-emerald-400 font-mono text-[10px] bg-emerald-500/10 px-1.5 py-0.5 rounded">Vor 12 Min</span>
                  </div>
                </div>
              </div>

              {/* Status footer */}
              <div className="flex items-center justify-between text-[10px] text-neutral-500 pt-1 font-mono">
                <span className="flex items-center gap-1">
                  <Activity className="w-3 h-3 text-neutral-600" />
                  Verbindung: Gesichert via Vercel
                </span>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* Info-Modal beim Klick auf den Button */}
      <AnimatePresence>
        {demoActive && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-md w-full bg-[#0C100D] border border-neutral-800 p-6 rounded-2xl relative shadow-2xl"
            >
              <div className="space-y-4 text-center">
                <div className="w-12 h-12 rounded-full bg-[#4E6E52]/10 text-[#A3B899] flex items-center justify-center mx-auto border border-[#4E6E52]/20">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-sans">Hinweis zum Prototyp</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  Dieses System befindet sich aktuell im **Demo-Modus** und dient als exklusives digitales Grundgerüst für Rümpelgrün. Die Schnittstellen für E-Mail-Anfragen und das Bewerber-System werden nach der finalen Freischaltung aktiv geschaltet.
                </p>
                
                <div className="p-3 bg-black rounded-lg border border-neutral-900 text-left font-mono text-[11px] text-neutral-500 space-y-1">
                  <div>// Geplante Module:</div>
                  <div className="text-neutral-300">- Resend API Anbindung für Angebote</div>
                  <div className="text-neutral-300">- SMS-Benachrichtigung bei neuen Bewerbern</div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setDemoActive(false)}
                    className="w-full py-2.5 rounded-lg text-xs font-semibold bg-neutral-100 hover:bg-white text-neutral-950 transition-colors cursor-pointer"
                  >
                    Verstanden & Schließen
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
