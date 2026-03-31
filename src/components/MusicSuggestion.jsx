import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMusic, FaUser, FaCheckCircle, FaLink } from 'react-icons/fa';
import Reveal from './Reveal';

export default function MusicSuggestion() {
  const [status, setStatus] = useState('idle'); // idle, submitting, success
  const [formData, setFormData] = useState({ nombre: '', cancion: '', enlace: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.cancion) return;
    
    setStatus('submitting');
    
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzX5UEG1YlGfDm3PlwBIC-FHQ8Ef-YL76PaYqq9UUlsAWaa-qBDA8sM77bv5GuI28z-PQ/exec";

    // Empaquetado a prueba de balas
    const payload = new URLSearchParams();
    payload.append("tipo", "musica");
    payload.append("nombre", formData.nombre);
    payload.append("cancion", formData.cancion);
    // Si el usuario escribe algo lo enviamos, si no, mandamos el texto explícito
    payload.append("enlace", formData.enlace ? formData.enlace : "No escribieron enlace"); 

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: payload,
        mode: 'no-cors'
      });
      
      setStatus('success');
      
    } catch (error) {
      console.error("Error al enviar:", error);
      setStatus('idle'); 
      alert("Hubo un error de red. Intenta de nuevo.");
    }
  };

  return (
    <section className="w-full py-24 flex justify-center items-center">
      <Reveal>
        <div className="bg-[#f7f8f3] p-10 md:p-14 rounded-[2rem] shadow-xl border border-stone-100 w-[90%] max-w-lg relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {status !== 'success' ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onSubmit={handleSubmit} 
                className="flex flex-col items-center text-center relative z-10"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-4xl text-olivina mb-6"
                >
                  <FaMusic />
                </motion.div>

                <h2 className="font-serif text-2xl md:text-3xl text-stone-800 uppercase tracking-widest mb-2">
                  ¿Qué canción no puede faltar?
                </h2>
                <p className="text-xs text-stone-500 uppercase tracking-[0.2em] mb-10">
                  Ayúdanos a armar la playlist de la fiesta
                </p>

                <div className="w-full space-y-4 mb-8">
                  {/* Input Nombre */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
                      <FaUser className="text-sm" />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Tu nombre" 
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                      className="w-full pl-11 pr-4 py-4 rounded-xl border-none focus:ring-2 focus:ring-olivina/50 bg-white text-stone-700 placeholder-stone-400 shadow-sm transition-all outline-none"
                    />
                  </div>

                  {/* Input Canción */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
                      <FaMusic className="text-sm" />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Nombre de la canción y artista" 
                      required
                      value={formData.cancion}
                      onChange={(e) => setFormData({...formData, cancion: e.target.value})}
                      className="w-full pl-11 pr-4 py-4 rounded-xl border-none focus:ring-2 focus:ring-olivina/50 bg-white text-stone-700 placeholder-stone-400 shadow-sm transition-all outline-none"
                    />
                  </div>

                  {/* Input Enlace (Opcional) */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
                      <FaLink className="text-sm" />
                    </div>
                    <input 
                      type="url" 
                      placeholder="Link de YouTube o Spotify (Opcional)" 
                      value={formData.enlace}
                      onChange={(e) => setFormData({...formData, enlace: e.target.value})}
                      className="w-full pl-11 pr-4 py-4 rounded-xl border-none focus:ring-2 focus:ring-olivina/50 bg-white text-stone-700 placeholder-stone-400 shadow-sm transition-all outline-none"
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-olivina text-white py-4 rounded-xl uppercase tracking-[0.2em] text-xs font-bold shadow-lg shadow-olivina/20 hover:bg-[#7a8761] transition-all disabled:opacity-70 flex justify-center items-center h-12"
                >
                  {status === 'submitting' ? (
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    "Sugerir Canción"
                  )}
                </button>
              </motion.form>
            ) : (
              /* ESTADO DE ÉXITO */
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-10 relative z-10"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="text-6xl text-olivina mb-6"
                >
                  <FaCheckCircle />
                </motion.div>
                <h3 className="font-serif text-2xl text-stone-800 mb-3">¡Excelente elección!</h3>
                <p className="text-stone-500 font-light mb-8">
                  Ya anotamos <span className="font-bold text-olivina">"{formData.cancion}"</span> para la fiesta.
                </p>
                <button 
                  onClick={() => { setStatus('idle'); setFormData({nombre: '', cancion: '', enlace: ''}); }}
                  className="text-xs uppercase tracking-widest text-olivina hover:text-stone-800 underline transition-colors"
                >
                  Sugerir otra canción
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          
        </div>
      </Reveal>
    </section>
  );
}