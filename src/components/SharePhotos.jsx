import { motion } from 'framer-motion';
import Reveal from './Reveal'; 

export default function SharePhotos() {
  return (
    <section className="w-full py-24 bg-[#FDFBF7] flex flex-col items-center overflow-hidden">
      
      {/* Título animado con tu componente Reveal */}
      <Reveal>
        <h2 className="text-center font-serif text-3xl md:text-4xl text-olivina mb-12 uppercase tracking-[0.3em]">
          Comparte tus fotos
        </h2>
      </Reveal>

      {/* Tarjeta del QR */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="px-6 w-full flex justify-center"
      >
        <div className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-2xl shadow-olivina/5 border border-stone-100 flex flex-col items-center max-w-md w-full text-center relative z-10">
          
          <p className="text-stone-500 font-light text-sm mb-8 leading-relaxed">
            Ayúdanos a capturar cada momento especial. Escanea el código para subir los recuerdos que tomes el día de nuestra boda.
          </p>

          {/* Caja punteada para el QR */}
          <div className="border-2 border-dashed border-olivina/40 p-4 rounded-2xl bg-white mb-6">
            <img 
              src="/qr.png" 
              alt="Código QR" 
              className="w-36 h-36 md:w-48 md:h-48 object-contain mix-blend-multiply" 
            />
          </div>
          
          <p className="text-[10px] text-olivina font-bold tracking-[0.3em] uppercase">
            Escanea para subir
          </p>
        </div>
      </motion.div>
      
    </section>
  );
}