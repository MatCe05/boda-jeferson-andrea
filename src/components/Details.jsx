import { FaTshirt, FaGift } from 'react-icons/fa';
import Reveal from './Reveal';

export default function Details() {
  return (
    <section className="py-24 bg-gradient-to-b from-olivina to-white text-center px-6">
      <Reveal>
        <div className="mb-24 text-white">
          <FaTshirt className="text-5xl mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-serif uppercase tracking-[0.3em] mb-4">Dress Code</h2>
          <p className="text-lg font-light italic mb-4">Formal - Guayabera</p>
          <p className="text-sm opacity-90 max-w-xs mx-auto border border-white/30 p-3 rounded-lg">
            Sugerencia: Colores claros. Favor evitar el blanco y beige.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="max-w-md mx-auto">
          <FaGift className="text-5xl text-olivina mx-auto mb-6" />
          <h2 className="text-3xl font-serif text-stone-800 uppercase tracking-[0.3em] mb-4">Regalos</h2>
          <p className="text-stone-600 font-light leading-relaxed">
            Nuestra mayor alegría es tu compañía. Si deseas tener un detalle con nosotros, contaremos con <b>lluvia de sobres</b> el día del evento.
          </p>
        </div>
      </Reveal>
    </section>
  );
}