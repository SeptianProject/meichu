import { useEffect, useState } from "react"
import NavButton from "../elements/NavButton"
import NavIcon from "../elements/NavIcon"
import HamburgerMenu from "../fragments/nav/HamburgerMenu"
import NavItems from "../fragments/nav/NavItems"
import { MdOutlineEmail, MdSunny } from "react-icons/md"
import { BsWhatsapp } from "react-icons/bs"
import { IoMoonOutline } from "react-icons/io5"
import { assetsImage } from "../../assets/assets"

type NavbarProps = {
     modalOnClick: (modalType: 'login' | 'register') => void;
}

const Navbar = ({ modalOnClick }: NavbarProps) => {
     const [hamburgerActive, setHamburgerActive] = useState(false)
     const [contactActive, setContactActive] = useState(false)
     const [isDarkMode, setIsDarkMode] = useState(() => {
          const savedTheme = localStorage.getItem('theme')
          if (savedTheme) {
               return savedTheme === 'dark'
          }
          if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
               return true
          }
          return true
     })

     const handleToggleHamburger = () => {
          setHamburgerActive(!hamburgerActive)
     }

     const handleContactActive = () => {
          setContactActive(!contactActive)
     }

     const handleToggleDarkMode = () => {
          const newDarkMode = !isDarkMode
          setIsDarkMode(newDarkMode)
          localStorage.setItem('theme', newDarkMode ? 'dark' : 'light')
          if (newDarkMode) {
               document.documentElement.classList.add('dark')
          } else {
               document.documentElement.classList.remove('dark')
          }
     }

     useEffect(() => {
          const handleHideHamburger = () => {
               if (window.scrollY > 0) {
                    setHamburgerActive(false)
               }
          }

          window.addEventListener('scroll', handleHideHamburger)
          return () => window.removeEventListener('scroll', handleHideHamburger)
     }, [])

     useEffect(() => {
          if (isDarkMode) {
               document.documentElement.classList.add('dark')
          } else {
               document.documentElement.classList.remove('dark')
          }
     }, [isDarkMode])

     useEffect(() => {
          const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
          const handleChange = (e: MediaQueryListEvent) => {
               const newDarkMode = e.matches
               setIsDarkMode(newDarkMode)
               localStorage.setItem('theme', newDarkMode ? 'dark' : 'light')
               if (newDarkMode) {
                    document.documentElement.classList.add('dark')
               } else {
                    document.documentElement.classList.remove('dark')
               }
          }

          mediaQuery.addEventListener('change', handleChange)
          return () => mediaQuery.removeEventListener('change', handleChange)
     }, [])


     return (
          <nav className="absolute inset-x-0 -right-5 flex items-center justify-between 
          px-5 md:px-14 xl:px-20 h-28">
               <NavItems modalOnClick={() => modalOnClick('login')} isActive={hamburgerActive} />
               <div className="flex items-center gap-x-7 z-20 relative">
                    <div className="hidden lg:block">
                         <NavButton text="Contact" onClick={handleContactActive} />
                         <div className={`pt-1 absolute flex flex-col items-center 
                         justify-center gap-y-1 transition-all duration-300 ease-in-out
                         ${contactActive ? 'z-0 opacity-100 top-10' : '-z-10 opacity-0 top-0'}`}>
                              <NavButton icon={MdOutlineEmail} text="Email" />
                              <NavButton icon={BsWhatsapp} text="Whatsapp" />
                         </div>
                    </div>
                    <NavIcon
                         icon={isDarkMode ? IoMoonOutline : MdSunny}
                         onClick={handleToggleDarkMode}
                         className={`transition-all duration-500 ease-in-out
                              ${hamburgerActive ? 'text-[#d9d9d9]' : ''} 
                              ${isDarkMode ? '' : ''}`} />
                    <HamburgerMenu handleActive={handleToggleHamburger} isActive={hamburgerActive} />
                    <NavIcon icon={assetsImage.Profile} onClick={() => modalOnClick('login')} />
               </div>
          </nav>
     )
}

export default Navbar