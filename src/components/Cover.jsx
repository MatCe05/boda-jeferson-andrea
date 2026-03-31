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
      </motion.div>

    </section>
  );
}