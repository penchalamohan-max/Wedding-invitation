import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds, parseISO } from 'date-fns'
import config from '../config'

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isComingSoon, setIsComingSoon] = useState(!config.date)

  useEffect(() => {
    if (!config.date) {
      setIsComingSoon(true)
      return
    }

    const timer = setInterval(() => {
      try {
        const weddingDate = parseISO(config.date)
        const now = new Date()

        if (weddingDate <= now) {
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
          return
        }

        setTimeLeft({
          days: differenceInDays(weddingDate, now),
          hours: differenceInHours(weddingDate, now) % 24,
          minutes: differenceInMinutes(weddingDate, now) % 60,
          seconds: differenceInSeconds(weddingDate, now) % 60
        })
      } catch (error) {
        console.error('Invalid date format in config')
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const CountdownBox = ({ number, label }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="glass p-6 md:p-8 rounded-xl backdrop-blur-md"
    >
      <div className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold gold-text mb-2">
        {String(number).padStart(2, '0')}
      </div>
      <div className="text-sm md:text-base font-poppins text-dark-700 uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  )

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary-100 to-primary-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {isComingSoon ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-900 mb-4">
                Coming Soon
              </h2>
              <p className="text-xl font-elegant text-primary-700 mb-8">
                The date of our wedding will be announced soon. Stay tuned!
              </p>
              <div className="inline-block glass px-8 py-4 rounded-full backdrop-blur-md">
                <p className="text-lg font-poppins font-semibold text-primary-600">
                  ✨ Something magical is on the way ✨
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark-900 mb-4">
                Countdown
              </h2>
              <p className="text-xl font-elegant text-primary-700 mb-12">
                Days until we say "I do"
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <CountdownBox number={timeLeft.days} label="Days" />
                <CountdownBox number={timeLeft.hours} label="Hours" />
                <CountdownBox number={timeLeft.minutes} label="Minutes" />
                <CountdownBox number={timeLeft.seconds} label="Seconds" />
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}