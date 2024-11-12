

type NavIconProps = {
     onClick: () => void
     icon: string
     className?: string
}

const NavIcon = ({ onClick, icon, className }: NavIconProps) => {

     return (
          <button className="w-fit" onClick={onClick}>
               <img className={`size-8 transition-all duration-500 ${className}`} src={icon} />
          </button>
     )
}

export default NavIcon