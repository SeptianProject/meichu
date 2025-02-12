import React from "react"
import { IconType } from "react-icons"

type NavButtonProps = {
     text: string
     icon?: IconType
     className?: string
     onClick?: VoidFunction
}

const NavButton: React.FC<NavButtonProps> = React.memo(({
     text,
     className,
     icon: Icon,
     onClick
}) => {
     return (
          <button onClick={onClick}
               className={`w-32 xl:w-40 py-[6px] bg-transparent border text-[#5E5A5A] font-medium
               font-poppins rounded-full flex items-center md:text-sm xl:text-base
               dark:bg-[#353535] dark:text-light ${className} dark:hover:bg-[#353535]/70 
               hover:scale-[1.02] transition-all duration-300
               ${Icon ? 'justify-start md:pl-4 xl:pl-5 dark:bg-transparent gap-x-2 border-[#353535] dark:border-light'
                         : 'justify-center border-[#353535] gap-x-0'}`}>
               <span>
                    {Icon ? <Icon className="md:size-4 xl:size-5" /> : null}
               </span>
               {text}
          </button>
     )
})

export default NavButton