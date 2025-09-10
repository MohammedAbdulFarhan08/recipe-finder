import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-rose-500 via-red-500 to-orange-500 text-white py-6 shadow-lg">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-lg">
          🍲 Recipe Ideas
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-sm md:text-base mt-2 italic text-orange-100"
        >
          Find delicious recipes by ingredients ✨
        </motion.p>
      </motion.div>
    </header>
  );
}
