import HamburgerItem from '../../elements/HamburgerItem'

const HamburgerMenu = () => {

     return (
          <button className='space-y-1 lg:hidden'>
               <HamburgerItem />
               <HamburgerItem />
               <HamburgerItem />
          </button>
     )
}

export default HamburgerMenu