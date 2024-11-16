import { useEffect, useState } from "react"
import { assetsImage } from "../../assets/assets"
import NavButton from "../elements/NavButton"
import NavIcon from "../elements/NavIcon"
import HamburgerMenu from "../fragments/nav/HamburgerMenu"
import NavItems from "../fragments/nav/NavItems"

const Navbar = () => {
     const [hamburgerActive, setHamburgerActive] = useState(false)
     const [isDarkMode, setIsDarkMode] = useState(false)

     const handleToggleHamburger = () => {
          setHamburgerActive(!hamburgerActive)
     }

     const handleHideHamburger = () => {
          if (window.scrollY >= 0) {
               setHamburgerActive(false)
          }
     }

     const handleToggleDarkMode = () => {
          setIsDarkMode(!isDarkMode)
          document.body.classList.toggle('dark')
     }

     useEffect(() => {
          window.addEventListener('scroll', handleHideHamburger)
          return () => window.removeEventListener('scroll', handleHideHamburger)
     }, [])

     return (
          <nav className="absolute inset-x-0 flex items-center justify-between 
          px-5 lg:px-20 h-28">
               {/* NavItems */}
               <NavItems isActive={hamburgerActive} />
               {/* NavButton */}
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