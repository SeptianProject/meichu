import { assetsImage, navItems } from '../../../assets/assets'
import { Link, useLocation } from 'react-router-dom'

type NavItemsProps = {
     isActive: boolean
     modalOnClick: () => void
}

const NavItems = ({ isActive, modalOnClick }: NavItemsProps) => {
     const location = useLocation()

     return (
          <div className='flex items-center gap-x-6 z-10 relative overflow-hidden'>
               <div className='w-fit'>
                    <img src={assetsImage.MeichuLogo} alt="meichuLogo"
                         className='size-24 lg:size-32' />
               </div>
               <div className={`fixed flex flex-col bg-[#1E1E1E]/40 dark:bg-[#1D1A24]/75 gap-4 z-50
               backdrop-blur-md top-0 right-0 w-7/12 pl-8 pb-10 pt-32 rounded-b-2xl
               ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
               lg:translate-x-0 lg:opacity-100 lg:bg-transparent lg:flex-row lg:gap-8 lg:backdrop-blur-none 
               lg:static lg:p-0 lg:w-full lg:rounded-none lg:items-center lg:dark:bg-transparent 
               transition-all duration-500
               `}>
                    {navItems.map((item, index) => (
                         <Link key={index} to={item.link}
                              className={`font-poppins text-light lg:text-dark lg:dark:text-light cursor-pointer
                              lg:tracking-wider transition-all duration-300
                              ${location.pathname === item.link
                                        ? 'text-lg font-semibold text-opacity-100'
                                        : 'text-opacity-75'}
                              `}>
                              {item.name}
                         </Link>
                    ))}
                    <button onClick={modalOnClick}
                         className='font-medium text-light rounded-md bg-[#6A45BE] 
                         w-32 py-3 lg:hidden'>
                         Login
                    </button>
               </div>
          </div>
     )
}

export default NavItems