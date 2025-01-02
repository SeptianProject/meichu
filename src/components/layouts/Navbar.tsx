import React from "react"
import NavButton from "../elements/buttons/NavBtn"
import NavIcon from "../elements/NavIcon"
import HamburgerMenu from "../fragments/nav/HamburgerMenu"
import NavItems from "../fragments/nav/NavItems"
import { MdOutlineEmail, MdSunny } from "react-icons/md"
import { BsWhatsapp } from "react-icons/bs"
import { IoMoonOutline } from "react-icons/io5"
import { assetItems } from "../../assets/AnotherAssets"
import { useAppDispatch, useAppSelector } from "../../redux/hook"
import { setIsAuthModalOpen, setProfileActive } from "../../redux/slices/authSlice"
import useUI from "../../hooks/useUI"
import { useQuery } from "@tanstack/react-query"
import { getUser } from "../../services/AuthService"
import { UserProfile } from "../../interface"
import { getFullImageUrl } from "../../services/FileUploadService"

const Navbar = () => {
     const [hamburgerActive, setHamburgerActive] = React.useState(false)
     const [contactActive, setContactActive] = React.useState(false)
     const [avatar, setAvatar] = React.useState<string | undefined>('')
     const { mode, toggleDarkMode } = useUI()
     const { token, userId } = useAppSelector((state) => state.auth)
     const dispatch = useAppDispatch()
     const { data: dataUser } = useQuery<UserProfile>(['user'], () => getUser('populate=profilePicture'))

     const isDarkMode = mode === 'dark'

     const handleOpenModal = () => {
          if (token) {
               dispatch(setProfileActive(true))
          } else {
               dispatch(setIsAuthModalOpen(true))
          }
     }
     React.useEffect(() => {
          const handleUserProfile = () => {
               if (token && userId || dataUser) {
                    setAvatar(getFullImageUrl(dataUser?.profilePicture?.url || ''))
               } else {
                    setAvatar(assetItems.Profile)
               }
          }

          handleUserProfile()

          const handleHideHamburger = () => {
               if (window.scrollY > 0) {
                    setHamburgerActive(false)
               }
          }
          window.addEventListener('scroll', handleHideHamburger)
          return () => window.removeEventListener('scroll', handleHideHamburger)
     }, [dataUser, token, userId])


     return (
          <nav className="absolute inset-x-0 -right-5 flex items-center justify-between 
          px-5 md:px-14 xl:px-20 h-28">
               <NavItems modalOnClick={handleOpenModal} isActive={hamburgerActive} />
               <div className="flex items-center gap-x-7 z-20 relative">
                    <div className="hidden lg:block">
                         <NavButton
                              text="Contact"
                              onClick={() => setContactActive(!contactActive)} />
                         <div className={`pt-1 absolute flex flex-col items-center 
                         justify-center gap-y-1 transition-all duration-300 ease-in-out
                         ${contactActive ? 'z-0 opacity-100 top-10' : '-z-10 opacity-0 top-0'}`}>
                              <NavButton icon={MdOutlineEmail} text="Email" />
                              <NavButton icon={BsWhatsapp} text="Whatsapp" />
                         </div>
                    </div>
                    <NavIcon
                         icon={isDarkMode ? IoMoonOutline : MdSunny}
                         onClick={toggleDarkMode}
                         className={`transition-all duration-500 ease-in-out
                              ${hamburgerActive ? 'text-[#d9d9d9]' : ''} 
                              ${isDarkMode ? '' : ''}`} />
                    <HamburgerMenu
                         isActive={hamburgerActive}
                         handleActive={() => setHamburgerActive(!hamburgerActive)} />
                    <NavIcon
                         image={avatar}
                         onClick={handleOpenModal} />
               </div>
          </nav>
     )
}

export default Navbar