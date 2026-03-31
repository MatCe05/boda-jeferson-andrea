import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EnvelopeReveal({ onOpenComplete }) {
  const [step, setStep] = useState(0); 

  const handleOpen = () => {
    if (step > 0) return;
    setStep(1); // Abrir solapa
    setTimeout(() => setStep(2), 1000); // Subir tarjeta
    setTimeout(() => setStep(3), 2200); // Zoom inmersivo
    setTimeout(() => onOpenComplete && onOpenComplete(), 3200);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatePresence>
      {step < 3 && (
        <motion.div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1a1a1a] overflow-hidden"
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          {/* Fondo con Aura Elegante */}
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-olivina/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-yellow-900/10 blur-[120px] rounded-full" />
          </div>

          {/* TEXTO DE BIENVENIDA */}
          <motion.div 
            className="absolute top-12 md:top-20 text-center z-10 px-6"
            animate={step >= 2 ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 5.0 }}
          >
            <p className="font-sans text-stone-400 text-[10px] uppercase tracking-[0.6em] mb-4">Nuestra Boda</p>
            <h1 className="font-serif text-5xl md:text-7xl text-[#fdfbf7] tracking-tight">
              Jeferson <span className="text-olivina italic">&</span> Andrea
            </h1>
          </motion.div>

          {/* CONTENEDOR DEL SOBRE ARTESANAL */}
          <div className="relative w-[340px] h-[230px] md:w-[500px] md:h-[340px]" style={{ perspective: "2500px" }}>
            
            {/* 1. LA TARJETA (Papel de Lino - Versión Limpia) */}
            <motion.div
            className="absolute inset-x-6 top-4 bottom-4 bg-[#fdfbf7] rounded-sm shadow-2xl flex flex-col items-center justify-center border-l-[1px] border-stone-200 z-10"
            initial={{ y: 0 }}
            animate={{ 
                y: step === 2 ? -260 : (step === 3 ? -260 : 0),
                scale: step === 3 ? 30 : 1,
                opacity: step === 3 ? 0 : 1,
                rotateZ: step === 2 ? -1 : 0
            }}
            transition={{ duration: 5.0, ease: [0.4, 0, 0.2, 1] }}
            >
            <div className="text-center px-8 border-[1px] border-olivina/20 py-12 m-4 h-[85%] w-[90%] flex flex-col items-center justify-center">
                <p className="font-serif text-olivina text-sm italic mb-4 tracking-widest">Aparta la fecha</p>
                
                {/* Nombres con más aire y protagonismo */}
                <h3 className="font-serif text-3xl md:text-5xl text-stone-800 mb-6 tracking-wide leading-tight">
                    Jeferson <br/> & <br/> Andrea
                </h3>
                
                <div className="w-16 h-[1px] bg-stone-300 mb-4 opacity-50" />
                
                <p className="text-[10px] uppercase tracking-[0.5em] text-stone-400 font-light">
                Estás Invitado
                </p>
            </div>
            </motion.div>

            {/* 2. EL SOBRE (Estructura Multicapa) */}
            <motion.div
              className="absolute inset-0 z-20"
              animate={step >= 2 ? { y: 700, opacity: 0, rotateX: -20 } : { y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Cuerpo Trasero (Liner con patrón botánico) */}
              <div className="absolute inset-0 bg-[#7a8761] rounded-sm overflow-hidden shadow-2xl border border-white/10">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
                {/* Patrón de forro interior */}
                <div className="absolute inset-0 opacity-20" style={{ 
                  backgroundImage: `radial-gradient(circle at 2px 2px, #d4af37 1px, transparent 0)`,
                  backgroundSize: '24px 24px' 
                }}></div>
              </div>

              {/* Solapas Laterales (Sombreadas para volumen) */}
              <div className="absolute inset-0 z-30 shadow-inner" style={{ 
                clipPath: "polygon(0 0, 50% 50%, 0 100%)", 
                backgroundColor: "#8a996f",
                boxShadow: "inset 20px 0 30px rgba(0,0,0,0.1)"
              }}></div>
              <div className="absolute inset-0 z-30" style={{ 
                clipPath: "polygon(100% 0, 50% 50%, 100% 100%)", 
                backgroundColor: "#8a996f",
                boxShadow: "inset -20px 0 30px rgba(0,0,0,0.1)"
              }}></div>
              
              {/* Solapa Inferior (La más frontal) */}
              <div className="absolute inset-0 z-40" style={{ 
                clipPath: "polygon(0 100%, 50% 50%, 100% 100%)", 
                backgroundColor: "#98a67d",
                borderBottom: "2px solid #7a8761"
              }}></div>

              {/* SOLAPA SUPERIOR (3D Realista) */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full z-0 origin-top"
                style={{ 
                  clipPath: "polygon(0 0, 100% 0, 50% 50%)", 
                  backgroundColor: "#8a996f",
                  transformStyle: "preserve-3d" 
                }}
                initial={{ rotateX: 0 }}
                animate={{ rotateX: step >= 1 ? -130 : 0 }} 
                transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Sombra interna de la solapa al abrir */}
                <div className="absolute inset-0 bg-black/20" />
              </motion.div>

              {/* SELLO DE CERA (Handmade Look) */}
              {step === 0 && (
                <motion.button
                  onClick={handleOpen}
                  className="absolute z-50 w-28 h-28 flex items-center justify-center cursor-pointer drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)]"
                  style={{ top: '50%', left: '50%', x: '-50%', y: '-50%' }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Forma Irregular de Cera */}
                  <div className="absolute inset-0 bg-[#fdfbf7] rounded-[45%_55%_50%_50%_/_50%_50%_55%_45%] rotate-12 shadow-inner border-2 border-stone-200/50" />
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="font-serif text-olivina text-2xl tracking-tighter font-bold">J&A</span>
                    <div className="h-[1px] w-8 bg-olivina/30 my-1" />
                    <span className="text-stone-400 text-[8px] tracking-[0.3em] uppercase">Abrir</span>
                  </div>
                  {/* Cordones de Seda */}
                  <div className="absolute -bottom-10 flex gap-3 opacity-40">
                    <div className="w-1 h-12 bg-gradient-to-b from-stone-300 to-transparent rounded-full" />
                    <div className="w-1 h-12 bg-gradient-to-b from-stone-300 to-transparent rounded-full" />
                  </div>
                </motion.button>
              )}
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}