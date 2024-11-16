import { useEffect, useState } from "react"
import { assetsImage } from "../../assets/assets"
import NavButton from "../elements/NavButton"
import NavIcon from "../elements/NavIcon"
import HamburgerMenu from "../fragments/nav/HamburgerMenu"
import NavItems from "../fragments/nav/NavItems"

const Navbar = () => {
     const [hamburgerActive, setHamburgerActive] = useState(false)
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

     const handleHideHamburger = () => {
          if (window.scrollY >= 0) {
               setHamburgerActive(false)
          }
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
          <nav className="absolute inset-x-0 flex items-center justify-between 
          px-5 lg:px-20 h-28">
               <NavItems isActive={hamburgerActive} />
               <div className="flex items-center gap-x-7 z-10 relative">
                    {/* Nav Contact */}
                    <NavButton className="hidden lg:block" />
                    {/* Nav Mode */}
                    <NavIcon icon={isDarkMode ? assetsImage.Moon : assetsImage.Sun}
                         onClick={handleToggleDarkMode}
                         className="size-[1.4rem] lg:size-6" />
                    {/* Nav Mobile */}
                    <HamburgerMenu handleActive={handleToggleHamburger} isActive={hamburgerActive} />
                    {/* Nav Profile */}
                    <NavIcon icon={assetsImage.Profile} onClick={() => { }}
                         className="hidden size-8 lg:block" />
               </div>
          </nav>
     )
}

export default Navbar