import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiBook } from 'react-icons/fi'

export default function Details() {
  const details = [
    {
      icon: FiMapPin,
      title: 'Venue',
      content: 'Parlakonda Village, Groom\'s Home',
      color: 'text-primary-600'
    },
    {
      icon: FiPhone,
      title: 'Contact',
      content: '+91 XXXXXXXXXX',
      color: 'text-accent-600'
    },
    {
      icon: FiMail,
      title: 'Email',
      content: 'contact@wedding.com',
      color: 'text-primary-600'
    },
    {
      icon: FiBook,
      title: 'Dress Code',
      content: 'Traditional / Semi-Formal',
      color: 'text-accent-600'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="details" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-900 mb-4">
            Wedding Details
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {details.map((detail, index) => {
            const Icon = detail.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ translateY: -10 }}
                className="glass p-8 rounded-2xl text-center backdrop-blur-md hover:shadow-xl transition-shadow"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-block mb-4"
                >
                  <Icon className={`${detail.color} text-4xl`} />
                </motion.div>
                <h3 className="text-xl font-playfair font-bold text-dark-900 mb-2">
                  {detail.title}
                </h3>
                <p className="text-dark-700 font-elegant text-lg">
                  {detail.content}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}