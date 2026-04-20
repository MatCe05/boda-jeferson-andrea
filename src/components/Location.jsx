import { motion } from "framer-motion";
import { FaChurch, FaGlassCheers, FaMapMarkerAlt } from 'react-icons/fa';
import Reveal from "./Reveal";

const locations = [
  {
    title: "Ceremonia",
    icon: FaChurch,
    time: "18 de Julio 2026 - 3:00 PM",
    place: "Las Mercedes Finca Cafetera",
    //address: "Cumaca, Cundinamarca",
    city: "Cumaca, Cundinamarca",
    date: "18 Jul 2026",
    link: "https://maps.app.goo.gl/jXRMSFbQTkvTHY737" // Reemplaza con el link real
  },
  {
    title: "Celebración",
    icon: FaGlassCheers,
    time: "18 de Julio 2026 - 6:00 PM",
    place: "Las Mercedes Finca Cafetera",
    //address: "Cumaca, Cundinamarca",
    city: "Cumaca, Cundinamarca",
    date: "18 Jul 2026",
    link: "https://maps.app.goo.gl/jXRMSFbQTkvTHY737" // Reemplaza con el link real
  }
];

export default function Location() {
  return (
    <section className="w-full py-24 bg-stone-50 flex flex-col items-center">
      <Reveal>
        <h2 className="text-center font-serif text-3xl md:text-4xl text-olivina mb-16 uppercase tracking-[0.3em]">
          Dónde & Cuándo
        </h2>
      </Reveal>

      <div className="flex flex-col md:flex-row gap-8 px-6 w-full max-w-6xl justify-center">
        {locations.map((loc, index) => (
          <Reveal key={index}>
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 md:p-14 rounded-[2rem] shadow-xl border border-stone-100 flex flex-col items-center text-center w-full md:min-w-[400px]"
            >
              <div className="bg-olivina/10 p-6 rounded-full mb-8">
                <loc.icon className="text-4xl text-olivina" />
              </div>

              <h3 className="font-serif text-2xl md:text-3xl text-stone-800 uppercase tracking-widest mb-4">
                {loc.title}
              </h3>

              <div className="w-12 h-[1px] bg-olivina/30 mb-6"></div>

              <p className="text-olivina font-serif text-xl mb-4 italic">{loc.time}</p>
              
              <div className="space-y-2 mb-10">
                <p className="font-bold text-stone-700 text-lg uppercase tracking-tight">{loc.place}</p>
                <p className="text-stone-500 font-light leading-relaxed">
                  {loc.address}
                  {loc.city} <br />
                </p>
              </div>

              <motion.a
                href={loc.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: "#7a8761" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-olivina text-white px-10 py-4 rounded-full text-xs uppercase tracking-[0.2em] shadow-lg shadow-olivina/20 transition-colors"
              >
                <FaMapMarkerAlt />
                Ver Mapa
              </motion.a>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}