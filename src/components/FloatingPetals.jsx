import { useEffect } from 'react'

const petalEmojis = ['🌹', '🌺', '🌸', '🌻', '💐']

export default function FloatingPetals() {
  useEffect(() => {
    const createPetal = () => {
      const petal = document.createElement('div')
      const emoji = petalEmojis[Math.floor(Math.random() * petalEmojis.length)]
      const size = Math.random() * 30 + 10
      const left = Math.random() * window.innerWidth
      const duration = Math.random() * 3 + 2

      petal.className = 'petal text-3xl md:text-4xl'
      petal.textContent = emoji
      petal.style.left = left + 'px'
      petal.style.top = '-50px'
      petal.style.fontSize = size + 'px'
      petal.style.animation = `fall ${duration}s linear`
      petal.style.animationDuration = duration + 's'

      document.body.appendChild(petal)

      setTimeout(() => petal.remove(), duration * 1000)
    }

    const interval = setInterval(createPetal, 500)

    return () => clearInterval(interval)
  }, [])

  return null
}