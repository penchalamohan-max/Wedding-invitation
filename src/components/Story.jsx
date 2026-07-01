import { motion } from 'framer-motion'

export default function Story() {
  const storyPoints = [
    {
      year: '2015',
      title: 'The Beginning',
      description: 'Two souls met in a crowded city, their eyes locked for a moment that would change everything.'
    },
    {
      year: '2018',
      title: 'Growing Together',
      description: 'Through laughter, challenges, and dreams, their bond grew stronger with each passing day.'
    },
    {
      year: '2023',
      title: 'The Promise',
      description: 'On a beautiful evening, a ring, a question, and a tear of joy sparked the beginning of forever.'
    },
    {
      year: '2024',
      title: 'Forever Begins',
      description: 'Now, as two become one, they embark on the greatest adventure of their lives.'
    }
  ]

  return (
    <section id="story" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-900 mb-4">
            Our Story
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-300 to-accent-300 hidden md:block"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {storyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex items-center gap-6 md:gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 md:text-right text-center">
                  <div className="glass p-6 rounded-lg backdrop-blur-md">
                    <p className="text-primary-600 font-poppins font-bold text-lg mb-2">
                      {point.year}
                    </p>
                    <h3 className="text-2xl font-playfair font-bold text-dark-900 mb-3">
                      {point.title}
                    </h3>
                    <p className="text-dark-700 font-elegant text-lg leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex-shrink-0 hidden md:block ring-4 ring-white"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}