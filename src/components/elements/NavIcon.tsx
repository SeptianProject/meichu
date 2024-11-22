import { IconType } from "react-icons"

type NavIconProps = {
     onClick: () => void
     icon: IconType | string
     className?: string
}

const NavIcon = ({ onClick, icon: Icon, className }: NavIconProps) => {

     return (
          <button className="w-fit rounded-full" onClick={onClick}>
               {typeof Icon === 'string'
                    ? (<img src={Icon} alt="Profile" className="hidden lg:block size-8" />)
                    : (<Icon className={`${className} size-7 text-[#5E5A5A] dark:text-[#d9d9d9]/70`} />)
               }
          </button>
     )
}

export default NavIcon