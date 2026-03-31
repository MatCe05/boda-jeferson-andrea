import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
// Si no tienes react-icons instaladas, asegúrate de tenerlas para los iconos de música
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

export default function AudioPlayer({ hasOpened }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Inicializar el audio solo una vez
  useEffect(() => {
    audioRef.current = new Audio('/cancion-boda.mp3'); // El nombre de tu canción
    audioRef.current.loop = true; // Para que se repita infinita
    audioRef.current.volume = 0.5; // Volumen al 50% para que no aturda
  }, []);

  // Escuchar cuando el sobre se abre para darle Play
  useEffect(() => {
    if (hasOpened && audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("El navegador bloqueó el autoplay:", err));
    }
  }, [hasOpened]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // No mostramos el botón hasta que no abran el sobre
  if (!hasOpened) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-[200] bg-white text-olivina p-4 rounded-full shadow-2xl border border-stone-200 flex items-center justify-center hover:bg-stone-50 transition-colors"
      style={{ width: '55px', height: '55px' }}
    >
      {isPlaying ? (
        <FaVolumeUp className="text-xl animate-pulse" />
      ) : (
        <FaVolumeMute className="text-xl opacity-50" />
      )}
    </motion.button>
  );
}