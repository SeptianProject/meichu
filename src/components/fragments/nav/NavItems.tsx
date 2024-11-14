import { assetsImage, navItems } from '../../../assets/assets'
import { Link } from 'react-router-dom'

const NavItems = () => {
     return (
          <div className='flex items-center gap-x-6'>
               <div className='w-fit'>
                    <img src={assetsImage.MeichuLogo} alt="meichuLogo"
                         className='size-24 lg:size-32' />
               </div>
               <div className='hidden md:flex items-center gap-x-8 '>
                    {navItems.map((item, index) => (
                         <Link key={index} to={item.link}
                              className='font-poppins text-light cursor-pointer text-base font-light 
                              tracking-wider'>
                              {item.name}
                         </Link>
                    ))}
               </div>
          </div>
     )
}

export default NavItems