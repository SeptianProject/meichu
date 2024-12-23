import React from "react"
import { IconType } from "react-icons"

type NavIconProps = {
     onClick: () => void
     icon: IconType | string
     className?: string
}

const NavIcon: React.FC<NavIconProps> = React.memo(({
     onClick,
     icon: Icon,
     className
}) => {
     return (
          <button className="w-fit rounded-full hover:scale-105 transition-all duration-300" onClick={onClick}>
               {typeof Icon === 'string'
                    ? (<img src={Icon} alt="Profile" className="hidden lg:block size-8" />)
                    : (<Icon className={`${className} size-7 text-[#5E5A5A] hover:text-[#3b3838] dark:text-[#d9d9d9]/70 dark:hover:text-light`} />)
               }
          </button>
     )
})

export default NavIcon