import { motion } from "framer-motion";

export default function Divider() {
  return (
    // Mantenemos los márgenes negativos para acercar las secciones
    <div className="w-full overflow-hidden -my-10 md:-my-16 flex justify-center pointer-events-none relative z-10">
      
      {/* 1. ANIMACIÓN DE ENTRADA (Cinematográfica) */}
      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 1.4, 
          ease: [0.22, 1, 0.36, 1] // Curva de aceleración súper suave (easeOutQuint)
        }}
        className="w-full flex justify-center"
      >
        
        {/* 2. ANIMACIÓN CONTINUA (Respiración/Flote orgánico) */}
        <motion.div
          animate={{ 
            y: [0, -6, 0], // Sube 6px y baja suavemente
            scale: [1, 1.015, 1] // Se expande apenas un 1.5% y vuelve
          }}
          transition={{
            duration: 6, // Un ciclo muy lento (6 segundos) para que sea elegante
            repeat: Infinity,
            ease: "easeInOut"
          }}
          // Altura controlada y mix-blend por si la imagen tiene fondo blanco
          className="w-full h-[160px] md:h-[280px] mix-blend-multiply opacity-90"
          style={{
            backgroundImage: "url('/guirnalda.png')",
            backgroundRepeat: "repeat-x",
            
            // 'contain' garantiza que no se recorten las flores de arriba y abajo
            backgroundSize: "contain", 
            backgroundPosition: "center",

            // 🔥 EL BONUS PRO DEL CHATGPT (Mantenido intacto porque es una joya)
            WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
          }}
        />
        
      </motion.div>

    </div>
  );
}