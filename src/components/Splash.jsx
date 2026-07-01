import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Splash({ onEnter }) {
  const [animate, setAnimate] = useState(true)

  const handleTap = () => {
    setAnimate(false)
    setTimeout(onEnter, 500)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      handleTap()
    }, 4500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: animate ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gradient-to-b from-primary-100 via-primary-50 to-primary-100 flex items-center justify-center z-50 cursor-pointer"
      onClick={handleTap}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: animate ? 1 : 0, opacity: animate ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="text-6xl font-playfair font-bold gold-text">
            ✨
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: animate ? 1 : 0, y: animate ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <h1 className="text-3xl md:text-5xl font-playfair font-bold text-dark-800 mb-2">
            Together
          </h1>
          <p className="text-lg md:text-xl font-elegant text-primary-700">
            A celebration of love
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: animate ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12"
        >
          <motion.p
            animate={animate ? { y: [0, 10, 0] } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-primary-600 font-poppins text-sm"
          >
            Tap to enter invitation
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  )
}