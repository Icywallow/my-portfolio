import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col justify-center items-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold text-center leading-tight tracking-tight"
      >
        Hey, I'm <span className="text-indigo-400">Simon</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-4 text-xl md:text-2xl text-gray-300 text-center max-w-xl"
      >
        Frontend developer crafting beautiful, performant web interfaces.
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-8 inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full transition duration-300"
      >
        See My Work
      </motion.a>
      <div className="relative z-10">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gray-900 to-transparent"></div>
      </div>
    </section>
    
  );
}
