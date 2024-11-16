import HamburgerItem from '../../elements/HamburgerItem'

type HamburgerMenuProps = {
     handleActive: () => void
     isActive: boolean
}

const HamburgerMenu = ({ handleActive, isActive }: HamburgerMenuProps) => {

     return (
          <button onClick={handleActive} className={`lg:hidden w-6
          ${isActive ? 'space-y-0' : 'space-y-1'}`}>
               <HamburgerItem isActive={isActive}
                    className={`${isActive ? '-rotate-45' : ''}`} />
               <HamburgerItem isActive={isActive}
                    className={`${isActive ? '-translate-x-5 scale-0' : ''}`} />
               <HamburgerItem isActive={isActive}
                    className={`${isActive ? 'rotate-45' : ''}`} />
          </button>
     )
}

export default HamburgerMenu