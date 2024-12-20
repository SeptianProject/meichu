import { useEffect, useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'

const FloatingButton = () => {
     const [onScroll, setOnScroll] = useState(false)
     const [buttonPosition, setButtonPosition] = useState('bottom-10')

     const handleScroll = () => {
          const footer = document.querySelector('footer')

          if (footer) {
               const footerRect = footer.getBoundingClientRect()
               const windowHeight = window.innerHeight

               if (window.scrollY >= 500 && footerRect.top < windowHeight - 200) {
                    setOnScroll(true)
                    setButtonPosition(`-bottom-[50px]`)
               } else if (window.scrollY >= 500) {
                    setOnScroll(true)
                    setButtonPosition('bottom-10')
               } else {
                    setOnScroll(false)
                    setButtonPosition('-bottom-20')
               }
          }
     }

     useEffect(() => {
          window.addEventListener('scroll', handleScroll)
          return () => window.removeEventListener('scroll', handleScroll)
     }, [])

     return (
          <div className={`fixed right-10 transition-all ease-in-out duration-300 z-50
          ${onScroll ? buttonPosition : '-bottom-20'}`}>
               <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="bg-blueDark text-light dark:text-dark dark:bg-light
                    rounded-full p-2 transition-all duration-300 hover:-translate-y-2
                    hover:scale-105 active:scale-75">
                    <IoIosArrowUp className="size-7" />
               </button>
          </div>
     )
}

export default FloatingButton