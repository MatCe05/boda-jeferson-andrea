import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelopeOpenText, FaCheckCircle, FaMinus, FaPlus } from 'react-icons/fa';
import Reveal from './Reveal';

// --- VARIANTES DE ANIMACIÓN (Para reutilizar y limpiar el JSX) ---

// 1. Animación constante de "flotado" para el sobre superior
const bobbingVariants = {
  animate: {
    y: [0, -12, 0], // Sube 12px y baja
    transition: {
      duration: 3, // Tarda 3 segundos en ciclo completo
      repeat: Infinity, // Infinito
      ease: "easeInOut" // Suave al inicio y fin
    }
  }
};

// 2. Micro-interacción para botones y tarjetas al tocar/hover
const interactionVariants = {
  hover: { scale: 1.03, transition: { duration: 0.2 } },
  tap: { scale: 0.97, transition: { duration: 0.1 } }
};

// 3. Animación para el cambio de número en el contador
const numberChangeVariants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
  exit: { opacity: 0, scale: 0.5, position: 'absolute' } // Se desvanece y achica
};

// 4. Animación de "resorte" para el checkmark de éxito
const successCheckVariants = {
  initial: { scale: 0, rotate: -45 },
  animate: { 
    scale: [0, 1.2, 1], // Crece, se pasa un poquito y vuelve
    rotate: 0,
    transition: { type: "spring", stiffness: 300, damping: 15, delay: 0.2 } 
  }
};

// 5. Animación de pulso constante para el checkmark de éxito
const successPulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }
};


export default function RSVP() {
  const [status, setStatus] = useState('idle'); // idle, submitting, success
  const [formData, setFormData] = useState({
    nombre: '',
    asistencia: 'Sí, asistiré', 
    acompanantes: 1
  });

  const addGuest = () => {
    if (formData.acompanantes < 10) { 
      setFormData({ ...formData, columns: 'acompanantes', acompanantes: formData.acompanantes + 1 });
    }
  };

  const removeGuest = () => {
    if (formData.acompanantes > 1) { // Mínimo 1 si asiste
      setFormData({ ...formData, columns: 'acompanantes', acompanantes: formData.acompanantes - 1 });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nombre) return;
    
    setStatus('submitting');
    
    //  PEGA AQUÍ TU URL NUEVA RECIÉN HORNEADA 
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzX5UEG1YlGfDm3PlwBIC-FHQ8Ef-YL76PaYqq9UUlsAWaa-qBDA8sM77bv5GuI28z-PQ/exec";

    // Usamos FormData puro, sin Headers raros
    const data = new FormData();
    data.append("tipo", "rsvp"); // Le decimos al script que esto es confirmación
    data.append("nombre", formData.nombre);
    data.append("asistencia", formData.asistencia);
    data.append("acompanantes", formData.asistencia === 'Sí, asistiré' ? formData.acompanantes : 0);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: data,
        mode: 'no-cors' // Crucial
      });
      setStatus('success');
    } catch (error) {
      console.error("Error al enviar RSVP:", error);
      setStatus('idle');
      alert("Error de conexión local. Revisa la consola.");
    }
  };

  return (
    <section className="w-full py-24 bg-[#fcfcfb] flex justify-center items-center relative overflow-hidden">
      
      {/* 5. Luces Bokeh de fondo (Sutiles y animadas) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-olivina/20 rounded-full blur-3xl"
          animate={{ x: [0, 50, -30, 0], y: [0, -40, 60, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-stone-100 rounded-full blur-3xl"
          animate={{ x: [0, -60, 40, 0], y: [0, 50, -30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <Reveal>
        <div className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-2xl shadow-olivina/10 border border-stone-100 w-[92%] max-w-2xl relative z-10 mx-auto">
          
          {/* 1. SELLO FLOTANTE (Con animación constante) */}
          <motion.div 
            className="absolute -top-8 left-1/2 -translate-x-1/2 bg-olivina text-white p-5 rounded-full shadow-xl shadow-olivina/20 z-20"
            variants={bobbingVariants}
            animate="animate"
          >
            <FaEnvelopeOpenText className="text-2xl" />
          </motion.div>

          <AnimatePresence mode="wait">
            {status !== 'success' ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                onSubmit={handleSubmit}
                className="flex flex-col items-center w-full mt-6"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-stone-800 uppercase tracking-[0.2em] mb-3 text-center">
                  Confirmar Asistencia
                </h2>

                <div className="w-full space-y-8">
                  
                  {/* INPUT: Nombre (Con micro-interacción al focus) */}
                  <div className="w-full flex flex-col">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold mb-2 ml-2">Nombre y Apellido</label>
                    <motion.input 
                      type="text" 
                      required
                      placeholder="Ej. Familia Rodríguez o Juan Pérez"
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                      className="w-full bg-stone-50 border border-stone-200 text-stone-700 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-olivina/40 focus:bg-white transition-all placeholder:text-stone-300 shadow-inner"
                      whileFocus={{ scale: 1.01, boxShadow: "0 4px 12px rgba(152, 166, 125, 0.1)" }}
                    />
                  </div>

                  {/* SELECTOR PREMIUM (Con hover y tap) */}
                  <div className="w-full flex flex-col">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold mb-2 ml-2">¿Nos acompañarás?</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Botón SÍ */}
                      <motion.button
                        type="button"
                        onClick={() => setFormData({...formData, asistencia: 'Sí, asistiré'})}
                        className={`py-4 px-6 rounded-2xl border-2 transition-all duration-300 font-serif text-lg flex items-center justify-center gap-3 h-16 ${
                          formData.asistencia === 'Sí, asistiré' 
                          ? 'border-olivina bg-olivina/5 text-olivina shadow-lg shadow-olivina/5' 
                          : 'border-stone-100 bg-white text-stone-400 hover:border-stone-200 hover:text-stone-500'
                        }`}
                        variants={interactionVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        {formData.asistencia === 'Sí, asistiré' && <FaCheckCircle className="text-sm" />}
                        Acepto con gusto
                      </motion.button>
                      
                      {/* Botón NO */}
                      <motion.button
                        type="button"
                        onClick={() => setFormData({...formData, asistencia: 'No podré asistir'})}
                        className={`py-4 px-6 rounded-2xl border-2 transition-all duration-300 font-serif text-lg flex items-center justify-center gap-3 h-16 ${
                          formData.asistencia === 'No podré asistir' 
                          ? 'border-stone-400 bg-stone-50 text-stone-600 shadow-inner' 
                          : 'border-stone-100 bg-white text-stone-400 hover:border-stone-200 hover:text-stone-500'
                        }`}
                        variants={interactionVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        Celebro a la distancia
                      </motion.button>
                    </div>
                  </div>

                </div>

                {/* BOTÓN DE ENVÍO (Con hover/tap) */}
                <motion.button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full mt-12 bg-olivina text-white py-5 rounded-2xl uppercase tracking-[0.25em] text-xs font-bold shadow-xl shadow-olivina/30 hover:bg-[#7a8761] transition-all disabled:opacity-70 flex justify-center items-center h-16"
                  variants={interactionVariants}
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap="tap"
                >
                  {status === 'submitting' ? (
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    "Enviar Confirmación"
                  )}
                </motion.button>
              </motion.form>
            ) : (
              /* 4. PANTALLA DE ÉXITO CELEBRATORIA */
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.4 } }}
                className="flex flex-col items-center justify-center text-center py-16"
              >
                {/* Checkmark con animación pop y pulso */}
                <motion.div
                  variants={successPulseVariants}
                  animate="animate"
                >
                    <motion.div
                      variants={successCheckVariants}
                      initial="initial"
                      animate="animate"
                      className="text-8xl text-olivina mb-8 drop-shadow-lg"
                    >
                      <FaCheckCircle />
                    </motion.div>
                </motion.div>
                
                <h3 className="font-serif text-3xl text-stone-800 mb-4 uppercase tracking-widest">
                  ¡Mensaje Recibido!
                </h3>
                <p className="text-stone-500 font-light mb-8 text-lg leading-relaxed max-w-md mx-auto">
                  {formData.asistencia === 'Sí, asistiré' 
                    ? `Gracias por confirmar, ${formData.nombre}. ¡Qué emoción que nos acompañes en nuestro gran día!` 
                    : `Gracias por avisarnos, ${formData.nombre}. Te extrañaremos mucho.`}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
}