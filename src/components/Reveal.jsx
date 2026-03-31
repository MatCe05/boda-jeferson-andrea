import { motion } from "framer-motion";

export default function Reveal({ children }) {
  return (
    <div className="w-full flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex justify-center"
      >
        {children}
      </motion.div>
    </div>
  );
}