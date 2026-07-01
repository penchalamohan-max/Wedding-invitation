import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Splash from './components/Splash'
import Hero from './components/Hero'
import FloatingPetals from './components/FloatingPetals'
import Couple from './components/Couple'
import Story from './components/Story'
import Gallery from './components/Gallery'
import Details from './components/Details'
import Countdown from './components/Countdown'
import Map from './components/Map'
import RSVP from './components/RSVP'
import Footer from './components/Footer'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setShowSplash(false)
    }, 5000)

    return () => clearTimeout(splashTimer)
  }, [])

  if (showSplash) {
    return <Splash onEnter={() => setShowSplash(false)} />
  }

  return (
    <div className="w-full overflow-x-hidden">
      <FloatingPetals />
      <Navbar />
      <Hero />
      <Couple />
      <Story />
      <Countdown />
      <Gallery />
      <Details />
      <Map />
      <RSVP />
      <Footer />
    </div>
  )
}