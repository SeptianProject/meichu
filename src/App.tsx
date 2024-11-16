import { useEffect, useState } from "react"
import Footer from "./components/layouts/Footer"
import Navbar from "./components/layouts/Navbar"
import AppRouter from "./routes/AppRouter"
import { IoIosArrowUp } from "react-icons/io"

const App = () => {

  return (
    <div className="bg-light selection:bg-dark selection:text-light
    dark:bg-dark dark:selection:bg-light transition-all duration-500
    dark:selection:text-dark relative">
      <Navbar />
      <AppRouter />
      <Footer />
      <FloatingButton />
    </div>
  )
}

export default App

const FloatingButton = () => {
  const [onScroll, setOnScroll] = useState(false)

  const handleScroll = () => {
    if (window.scrollY >= 500) {
      setOnScroll(true)
    } else {
      setOnScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed right-10 transition-all  ease-in-out duration-300
    ${onScroll ? 'bottom-10' : '-bottom-20'}`}>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-dark text-light dark:text-dark dark:bg-light rounded-full p-2 transition-all duration-500">
        <IoIosArrowUp className="size-7" />
      </button>
    </div>
  )
}