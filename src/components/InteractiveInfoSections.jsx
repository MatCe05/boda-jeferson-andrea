import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTshirt, FaGift, FaInfoCircle } from 'react-icons/fa';
import Reveal from './Reveal';

export default function InteractiveInfoSections() {
  const [openSection, setOpenSection] = useState(null);
  const [isFinca, setIsFinca] = useState(false);

  useEffect(() => {
    // Modo sigilo: Leemos la URL sin que se den cuenta
    const params = new URLSearchParams(window.location.search);
    setIsFinca(params.get('invitado') === 'finca');
  }, []);

  const toggleSection = (id) => setOpenSection(openSection === id ? null : id);

  const infoSections = [
    {
      id: 'dresscode',
      title: 'Código de Vestimenta',
      icon: FaTshirt,
      content: (
        <div className="text-center flex flex-col items-center">
          {/* Título actualizado según la foto */}
          <p className="text-olivina font-serif italic text-xl mb-3">Semi-formal</p>
          <p className="text-sm text-stone-500 font-light leading-relaxed mb-6">
            Sugerencia para caballeros:
            Camisa de manga larga (preferiblemente blanca), corbata, pantalón negro y tenis blancos o calzado cómodo. <br />
            Sugerencia para damas:
            Vestido largo o de cóctel en telas ligeras en tonos verde oliva, acompañado de sandalias o calzado cómodo. <br />
            <span className="font-bold text-olivina">Al ser una boda en un entorno campestre, sugerimos el uso de tenis para que puedan disfrutar con mayor comodidad.</span>
          </p>
          
          {/* SECCIÓN DE IMÁGENES DE REFERENCIA */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            
            {/* 1. Imagen de Vestimenta */}
            <div className="flex flex-col items-center">
              <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-2">Inspiración</p>
              <div className="w-full h-48 bg-stone-100 rounded-xl overflow-hidden border border-stone-200">
                {/* Aquí pones la imagen que me acabas de mandar */}
                <img 
                  src="/referencia-vestimenta.jpg" 
                  alt="Referencia de Vestimenta" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* 2. Paleta de Colores */}
            <div className="flex flex-col items-center">
              <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-2">Paleta de Colores</p>
              <div className="w-full h-48 bg-stone-100 rounded-xl overflow-hidden border border-stone-200 flex items-center justify-center p-2">
                {/* Y aquí pones la imagen de la paleta de colores */}
                <img 
                  src="/paleta-colores.png" 
                  alt="Paleta de Colores" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
          </div>
        </div>
      )
    },
    {
      id: 'regalos',
      title: 'Regalos',
      icon: FaGift,
      content: (
        <div className="text-center flex flex-col items-center">
          <p className="mb-6 text-stone-500 text-sm font-light leading-relaxed max-w-sm mx-auto">
            Tu presencia es nuestro mejor regalo. Sin embargo, si deseas tener un detalle con nosotros, contaremos con:
          </p>
          
          {/* Opción 1: Físico */}
          <div className="bg-olivina text-white py-3 px-10 rounded-full inline-block font-serif uppercase tracking-[0.2em] text-xs shadow-lg shadow-olivina/20 mb-8">
            Lluvia de Sobres
          </div>

          <div className="w-full h-[1px] bg-stone-200 mb-8 relative flex justify-center">
            <span className="absolute -top-3 bg-white px-4 text-[10px] text-stone-400 uppercase tracking-widest">Ó</span>
          </div>

          {/* Opción 2: Digital (QR) */}
          <p className="text-stone-500 text-xs font-light leading-relaxed mb-4">
            Para transferencias digitales, puedes escanear el siguiente código QR:
          </p>
          
          <div className="border-2 border-dashed border-olivina/30 p-3 rounded-2xl bg-stone-50">
            {/* Reemplaza este src con tu QR real de Nequi/Bancolombia */}
            <img src="/qr-regalos.png" alt="QR Regalos" className="w-32 h-32 object-contain" />
          </div>
        </div>
      )
    },
    {
      id: 'tips',
      title: 'Tips y Notas',
      icon: FaInfoCircle,
      content: (
        <div className="text-left text-stone-500 text-sm font-light leading-relaxed">
          <ul className="space-y-4 list-disc pl-5 marker:text-olivina/50">
            {isFinca ? (
              // VERSIÓN VIP
              <>
                <li>Check-in dia sábado 12:00 m</li>
                <li>Contarás con parqueadero libre</li>
                <li>Este día el hotel no cuenta con servicio de almuerzo</li>
                <li>Cumplir con el código de vestimenta sugerido</li>
                <li>Tener puntualidad en la hora de la ceremonia y la recepción.</li>
                <li>Lleva ropa cómoda y de cambio ya que contarás con servicio de hospedaje para la noche del sábado y la noche del domingo.</li>
                <li>El día domingo contarás con alimentación, <span className="font-bold text-olivina">"con tu colaboración lo haremos posible, anímate a darnos una mano con la preparación"</span></li>
                <li>Hay juegos disponibles, <span className="font-bold text-olivina">"úsalos y disfrútalos"</span></li>
                <li>Cuidemos el lugar como si fuera nuestro.</li>
                <li>Para que todo fluya mejor te agradecemos venir solo con las personas invitadas</li>
                <li>Check-out lunes 12:00 m</li>
              </>
            ) : (
              // VERSIÓN GENERAL
              <>
                <li>Contarás con parqueadero libre</li>
                <li>Cumplir con el código de vestimenta sugerido</li>
                <li>Tener puntualidad en la hora de la ceremonia y la recepción.</li>
                <li>Te esperamos el día domingo para disfrutar con nosotros el almuerzo. <span className="font-bold text-olivina">"con tu colaboración lo haremos posible, anímate a darnos una mano con la preparación"</span></li>
                <li>Hay juegos disponibles, <span className="font-bold text-olivina">"úsalos y disfrútalos"</span></li>
                <li>Cuidemos el lugar como si fuera nuestro.</li>
                <li>Para que todo fluya mejor te agradecemos venir solo con las personas invitadas</li>
              </>
            )}
          </ul>
        </div>
      )
    }
  ];

  return (
    <section className="w-full py-20 bg-stone-50/50 flex flex-col items-center">
      <Reveal>
        <h2 className="text-center font-serif text-3xl text-olivina mb-16 uppercase tracking-[0.3em]">Detalles Importantes</h2>
      </Reveal>
      
      <div className="w-full max-w-4xl px-6 flex flex-col gap-10">
        {infoSections.map((section) => (
          <div key={section.id} className="w-full flex flex-col items-center">
            
            <motion.button onClick={() => toggleSection(section.id)} className="flex flex-col items-center gap-4 group w-full max-w-md">
              <div className={`p-5 rounded-full border-2 transition-all ${openSection === section.id ? 'bg-olivina border-olivina text-white' : 'bg-white border-olivina/10 text-olivina'}`}>
                <section.icon className="text-4xl" />
              </div>
              <span className="font-serif text-xl uppercase tracking-widest text-stone-600">{section.title}</span>
            </motion.button>
            
            <AnimatePresence>
              {openSection === section.id && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="w-full max-w-xl mt-8 overflow-hidden">
                  <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-xl border border-stone-100">
                    {section.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        ))}
      </div>
    </section>
  );
}