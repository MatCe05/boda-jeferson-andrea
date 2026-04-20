import { useState, useEffect } from 'react';
import Reveal from './Reveal';

export default function Countdown() {
  // Fecha objetivo: 27 de Febrero de 2026
  const targetDate = new Date(2026, 6, 18, 15, 0, 0).getTime();
  const [timeLeft, setTimeLeft] = useState({ DÍAS: 0, HR: 0, MIN: 0, SEG: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) return clearInterval(interval);
      setTimeLeft({
        DÍAS: Math.floor(distance / (1000 * 60 * 60 * 24)),
        HR: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        MIN: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        SEG: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-24 flex flex-col items-center justify-center overflow-hidden">
      <Reveal>
        <div className="flex flex-col items-center justify-center w-full">
          
          {/* Texto FALTAN ahora en la parte superior */}
          <h2 className="text-2xl md:text-3xl font-serif text-olivina/40 uppercase tracking-[0.5em] mb-12 text-center">
            Faltan
          </h2>

          {/* Contenedor de Números en fila */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-16">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center min-w-[80px]">
                {/* El número con su línea decorativa */}
                <span className="text-5xl md:text-8xl font-light text-olivina leading-none mb-4 relative">
                  {value < 10 ? `0${value}` : value}
                  <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-olivina/20"></div>
                </span>
                
                {/* La unidad (Días, Hr, etc.) */}
                <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-stone-400 font-light">
                  {unit}
                </span>
              </div>
            ))}
          </div>
          
        </div>
      </Reveal>
    </section>
  );
}