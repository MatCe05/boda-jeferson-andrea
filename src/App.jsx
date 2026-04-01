import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

// Importación de Componentes
import EnvelopeReveal from "./components/EnvelopeReveal";
import Cover from "./components/Cover";
import Countdown from "./components/Countdown";
import Location from "./components/Location";
import Gallery from "./components/Gallery";
import InteractiveInfoSections from "./components/InteractiveInfoSections";
import SharePhotos from "./components/SharePhotos";
import MusicSuggestion from "./components/MusicSuggestion";
import RSVP from "./components/RSVP";
import Divider from "./components/Divider";
import AudioPlayer from "./components/AudioPlayer"; // <-- Aquí importamos el reproductor

export default function App() {
  const [hasOpened, setHasOpened] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className={`w-full bg-[#FDFBF7] relative ${!hasOpened ? "h-screen overflow-hidden" : "min-h-screen"}`}>
      
      {!hasOpened && <EnvelopeReveal onOpenComplete={() => setHasOpened(true)} />}
      
      {/* <-- EL REPRODUCTOR SE INYECTA AQUÍ --> */}
      <AudioPlayer hasOpened={hasOpened} />

      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-olivina z-[100] origin-left" style={{ scaleX }} />

      <div className={!hasOpened ? "opacity-0" : "opacity-100 transition-opacity duration-1000"}>
        <Cover />
        <div className="flex flex-col items-center">
          <Divider />
          <Countdown />
          <Divider />
          <Gallery />
          <Divider />
          <Location />
          <Divider />
          <InteractiveInfoSections /> {/* Dress Code, Regalos y Tips dinámicos */}
          <Divider />
          <SharePhotos /> {/* Sección de QR aparte */}
          <Divider />
          <MusicSuggestion />
          <Divider />
          <RSVP />
        </div>
        <footer className="py-16 text-center border-t border-stone-200 mt-10 flex flex-col items-center">
          <p className="font-serif text-olivina italic tracking-widest text-lg mb-6">
            Jeferson & Andrea — 2026
          </p>
          
          {/* Tu firma de autor / desarrollador */}
          <div className="flex items-center gap-1.5 text-[9px] text-stone-400 uppercase tracking-[0.3em] font-light opacity-70 hover:opacity-100 transition-opacity">
            <span>Diseño & Desarrollo por</span>
            <span className="font-medium text-stone-500">Ing. Mateo Cepeda ©</span>
            {/* Si tienes un portafolio o Instagram de trabajo, puedes envolver tu nombre en una etiqueta <a> así:
            <a href="https://tu-link.com" target="_blank" rel="noreferrer" className="font-medium text-stone-500 hover:text-olivina transition-colors">Mateo</a>
            */}
          </div>
        </footer>
      </div>
    </main>
  );
}