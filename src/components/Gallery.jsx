import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    src: `/assets/images/image${i + 1}.jpg`,
    alt: `Gallery image ${i + 1}`
  }))

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="gallery" className="py-20 px-4 bg-primary-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-900 mb-4">
            Our Moments
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto"></div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setSelectedImage(image)
                setCurrentIndex(index)
              }}
              className="relative group cursor-pointer overflow-hidden rounded-lg glass"
            >
              <div className="w-full h-64 bg-gradient-to-br from-primary-200 to-accent-200 flex items-center justify-center overflow-hidden">
                <span className="text-6xl opacity-50">📷</span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="text-white font-poppins font-semibold"
                >
                  View
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 z-40 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-primary-200 to-accent-200 flex items-center justify-center rounded-lg">
              <span className="text-8xl opacity-30">📷</span>
            </div>

            {/* Navigation */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-white hover:text-primary-400 transition-colors"
            >
              <FiChevronLeft size={40} />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-white hover:text-primary-400 transition-colors"
            >
              <FiChevronRight size={40} />
            </button>

            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-primary-400 transition-colors text-2xl"
            >
              ✕
            </button>

            {/* Image counter */}
            <div className="text-center mt-4 text-white">
              <p className="font-poppins font-semibold">
                {currentIndex + 1} / {images.length}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}