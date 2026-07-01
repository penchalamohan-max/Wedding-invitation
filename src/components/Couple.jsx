import { motion } from 'framer-motion'
import config from '../config'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
}

export default function Couple() {
  return (
    <section id="couple" className="min-h-screen py-20 px-4 bg-gradient-to-b from-primary-50 to-primary-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-900 mb-4">
            Meet the Couple
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Groom */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="mb-8 relative">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden glass border-4 border-primary-300 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center">
                  <span className="text-8xl">👨</span>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-accent-500 text-white px-6 py-2 rounded-full font-poppins text-sm font-semibold">
                Groom
              </div>
            </div>
            <h3 className="text-3xl font-playfair font-bold text-dark-900 mt-12 mb-4">
              {config.groom}
            </h3>
            <p className="text-lg font-elegant text-primary-700 leading-relaxed">
              A man of grace and charm, he brings joy and laughter to those around him. With a heart full of dreams and a spirit that shines brightly.
            </p>
          </motion.div>

          {/* Bride */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="mb-8 relative">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden glass border-4 border-primary-300 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-accent-200 to-primary-300 flex items-center justify-center">
                  <span className="text-8xl">👰</span>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-accent-600 text-white px-6 py-2 rounded-full font-poppins text-sm font-semibold">
                Bride
              </div>
            </div>
            <h3 className="text-3xl font-playfair font-bold text-dark-900 mt-12 mb-4">
              {config.bride}
            </h3>
            <p className="text-lg font-elegant text-primary-700 leading-relaxed">
              A woman of elegance and wisdom, she carries beauty not just in appearance but in her soul. Her warmth and kindness inspire everyone she meets.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}