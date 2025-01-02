import React from "react"
import { IconType } from "react-icons"

type NavIconProps = {
     onClick: () => void
     icon?: IconType
     image?: string | undefined
     className?: string
}

const NavIcon: React.FC<NavIconProps> = React.memo(({
     onClick,
     image,
     icon: Icon,
     className
}) => {
     return (
          <button className="w-fit overflow-hidden rounded-full hover:scale-105 transition-all duration-300" onClick={onClick}>
               {image &&
                    <img src={image} alt="Profile" className="hidden lg:block size-10 border-2 
                    border-light/20 rounded-full object-cover object-center" />
               }
               {Icon &&
                    <Icon className={`${className} size-7 text-[#5E5A5A] 
                    hover:text-[#3b3838] dark:text-[#d9d9d9]/70 dark:hover:text-light`} />
               }
          </button>
     )
})

export default NavIcon