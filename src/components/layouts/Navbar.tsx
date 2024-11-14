import { assetsImage } from "../../assets/assets"
import NavButton from "../elements/NavButton"
import NavIcon from "../elements/NavIcon"
import HamburgerMenu from "../fragments/nav/HamburgerMenu"
import NavItems from "../fragments/nav/NavItems"

const Navbar = () => {
     return (
          <nav className="absolute inset-x-0 flex items-center justify-between 
          px-5 lg:px-20 h-28 z-10">
               {/* NavItems */}
               <NavItems />
               {/* NavButton */}
               <div className="flex items-center gap-x-7">
                    <NavButton className="hidden lg:block" />
                    <NavIcon icon={assetsImage.Moon} onClick={() => { }}
                         className="size-[1.4rem] lg:size-6" />
                    <HamburgerMenu />
                    <NavIcon icon={assetsImage.Profile} onClick={() => { }}
                         className="hidden size-8 lg:block" />
               </div>
          </nav>
     )
}

export default Navbar