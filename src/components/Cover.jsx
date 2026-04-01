import { motion } from "framer-motion";

export default function Cover() {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FDFBF7]">

      {/* FOTO CENTRADA */}
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

      {/* CONTENIDO DE TEXTO */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-4 space-y-2 md:space-y-3"
      >
        {/* Etiqueta de boda */}
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-stone-800 font-medium">
          Nuestra Boda
        </p>
        
        {/* Nombres bajados y centrados */}
        <h1 
          className="text-5xl md:text-7xl font-serif text-olivina leading-tight"
          style={{ textShadow: "0px 2px 12px rgba(253, 251, 247, 0.9)" }}
        >
          Jeferson & Andrea
        </h1>
        
        {/* Fecha de la boda */}
        <p className="text-xs md:text-sm tracking-[0.3em] text-stone-800 font-medium uppercase">
          Sábado 18 Jul 2026
        </p>

        {/* Versículo */}
        <motion.div
          className="max-w-xs md:max-w-md italic pt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="font-serif text-stone-700 text-sm md:text-base leading-relaxed">
            "El amor nunca se da por vencido, jamás pierde la fe, siempre tiene esperanzas y se mantiene firme en toda circunstancia."
          </p>
          <p className="text-[12px] uppercase tracking-[0.2em] text-olivina/70 font-medium mt-1">
            — 1 Corintios 13:7 (NTV)
          </p>
        </motion.div>
      </motion.div>

    </section>
  );
}