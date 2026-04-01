import { motion } from "framer-motion";

export default function Cover() {
  return (
    // 1. El contenedor principal (mantiene el color crema de fondo)
    <section className="relative w-full min-h-[80vh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FDFBF7]">
      
      {/* 2. LA FOTO CENTRADA */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: "url('/foto-pareja.jpg')", 
          backgroundSize: "contain", 
          backgroundPosition: "center", 
          backgroundRepeat: "no-repeat",
          margin: "2rem" 
        }}
      ></div>

      {/* 3. EL CONTENIDO DE TEXTO */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        {/* Oscurecido a stone-800 y fuente más gruesa (font-medium) */}
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-6 text-stone-800 font-medium">
          Nuestra Boda
        </p>
        
        {/* Se mantiene tu color olivina, pero con una sombra de resplandor blanco para legibilidad extrema */}
        <h1 
          className="text-6xl md:text-8xl font-serif text-olivina mb-8"
          style={{ textShadow: "0px 2px 12px rgba(253, 251, 247, 0.9)" }}
        >
          Jeferson & Andrea
        </h1>
        
        <div className="w-16 h-[1px] bg-olivina/50 mb-8"></div>
        
        {/* Oscurecido a stone-800 y fuente más gruesa (font-medium), con la nueva fecha */}
        <p className="text-xs md:text-sm tracking-[0.3em] text-stone-800 font-medium uppercase">
          Sábado 18 Jul 2026
        </p>
                {/* --- VERSÍCULO DEBAJO DE LA FECHA --- */}
        <div className="max-w-xs md:max-w-md italic border-t border-stone-200 pt-8">
          <p className="font-serif text-stone-700 text-sm md:text-base leading-relaxed mb-2">
            "El amor nunca se da por vencido, jamás pierde la fe, siempre tiene esperanzas y se mantiene firme en toda circunstancia."
          </p>
          <p className="text-[12px] uppercase tracking-[0.2em] text-olivina/70 font-medium">
            — 1 Corintios 13:7 (NTV)
          </p>
        </div>

      </motion.div>

    </section>
  );
}