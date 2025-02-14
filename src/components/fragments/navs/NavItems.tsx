
import { Link, useLocation } from 'react-router-dom'
import { assetItems, navItems } from '../../../assets/assets'
import React from 'react'
import Button from '../../elements/buttons/Button'
import { useAppSelector } from '../../../redux/hook'

type NavItemsProps = {
     isActive: boolean
     modalOnClick: VoidFunction
}

const NavItems: React.FC<NavItemsProps> = React.memo(({ isActive, modalOnClick }) => {
     const { isAuthenticated } = useAppSelector((state) => state.auth)
     const [isLogin, setIsLogin] = React.useState(false)
     const location = useLocation()

     React.useEffect(() => {
          if (isAuthenticated) {
               setIsLogin(true)
          }
     }, [isAuthenticated])

     return (
          <div className='flex items-center gap-x-6 z-20 relative overflow-hidden'>
               <div className='w-fit'>
                    <img src={assetItems.MeichuLogo} alt="meichuLogo"
                         className='w-28 lg:w-40' />
               </div>
               <div className={`fixed flex flex-col bg-[#08070F]/40 dark:bg-dark/60 gap-4 z-50
               backdrop-blur-md top-0 right-0 w-7/12 pl-8 pb-10 pt-32 rounded-b-2xl
               md:w-2/5
               ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
               lg:translate-x-0 lg:opacity-100 lg:bg-transparent lg:flex-row lg:gap-8 lg:backdrop-blur-none 
               lg:static lg:p-0 lg:w-full lg:rounded-none lg:items-center lg:dark:bg-transparent 
               transition-all duration-500
               `}>
                    {navItems.map((item, index) => (
                         <div key={index}
                              className='relative box-border group w-fit'>
                              <Link to={item.link}
                                   className={`font-poppins cursor-pointer font-medium
                              lg:tracking-wider transition-all duration-300
                              ${location.pathname === item.link
                                             ? 'text-light lg:text-dark dark:text-light'
                                             : 'text-light/70 lg:text-dark/70 lg:dark:text-light/70 text-base lg:text-sm xl:text-base'}`}>
                                   {item.name}
                              </Link>
                         </div>
                    ))}
                    <div className='lg:hidden'>
                         <Button
                              isGold
                              title={isLogin ? 'Profile' : 'Login'}
                              onClick={modalOnClick}
                         />
                    </div>
               </div>
          </div>
     )
})

export default NavItems