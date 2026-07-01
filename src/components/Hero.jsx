import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import config from '../config'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-20 md:pt-32 pb-20 px-4 flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl relative z-10"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-primary-600 font-elegant text-lg md:text-xl mb-4">
            We invite you to celebrate
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-dark-900 mb-4">
            {config.groom}
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
            <p className="text-2xl md:text-3xl font-elegant text-primary-600">&</p>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-playfair font-bold text-dark-900 mt-4">
            {config.bride}
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <p className="text-lg md:text-xl font-elegant text-primary-700">
            @
          </p>
          <p className="text-xl md:text-2xl font-poppins font-medium text-dark-800 mt-2">
            {config.venue}
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <a href="#couple" className="text-primary-600 hover:text-primary-700 transition-colors">
              <FiChevronDown size={32} className="mx-auto" />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}