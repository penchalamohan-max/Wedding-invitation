import { motion } from 'framer-motion'
import { FiMapPin, FiExternalLink } from 'react-icons/fi'
import config from '../config'

export default function Map() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-900 mb-4">
            Venue Location
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden glass shadow-2xl"
          >
            <div className="w-full h-96 bg-gradient-to-br from-primary-200 to-accent-200 flex items-center justify-center">
              <div className="text-center">
                <FiMapPin className="text-6xl text-primary-600 mx-auto mb-4" />
                <p className="text-lg font-poppins font-semibold text-dark-800">
                  Parlakonda Village
                </p>
                <p className="text-sm font-elegant text-dark-700 mt-2">
                  {config.coordinates.lat}, {config.coordinates.lng}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-playfair font-bold text-dark-900 mb-6">
              {config.venue}
            </h3>
            <p className="text-lg font-elegant text-dark-700 mb-8 leading-relaxed">
              Join us at our beautiful venue nestled in the heart of nature. This picturesque location provides the perfect backdrop for our celebration of love and togetherness.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={config.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-full font-poppins font-semibold transition-all shadow-lg"
            >
              <FiExternalLink size={20} />
              Get Directions
            </motion.a>

            <div className="mt-12 space-y-4">
              <div className="flex items-start gap-4 p-4 glass rounded-lg backdrop-blur-md">
                <FiMapPin className="text-primary-600 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <p className="font-poppins font-semibold text-dark-900 mb-1">
                    Address
                  </p>
                  <p className="font-elegant text-dark-700">
                    {config.venue}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}