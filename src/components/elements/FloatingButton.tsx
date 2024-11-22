import { useEffect, useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'

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
                    className="bg-blueDark text-light dark:text-dark dark:bg-light rounded-full p-2 transition-all duration-500">
                    <IoIosArrowUp className="size-7" />
               </button>
          </div>
     )
}

export default FloatingButton