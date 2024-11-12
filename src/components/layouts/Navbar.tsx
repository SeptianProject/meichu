import { assetsImage } from "../../assets/assets"
import NavButton from "../elements/NavButton"
import NavIcon from "../elements/NavIcon"
import NavItems from "../fragments/NavItems"

const Navbar = () => {
     return (
          <nav className="absolute inset-x-0 -top-3 flex items-center justify-between px-28">
               {/* NavItems */}
               <NavItems />
               {/* NavButton */}
               <div className="flex items-center gap-x-7">
                    <NavButton />
                    <NavIcon icon={assetsImage.Moon} onClick={() => { }}
                         className="size-6" />
                    <NavIcon icon={assetsImage.Profile} onClick={() => { }} />
               </div>
          </nav>
     )
}

export default Navbar