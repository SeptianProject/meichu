

type NavIconProps = {
     onClick: () => void
     icon: string
     className?: string
}

const NavIcon = ({ onClick, icon, className }: NavIconProps) => {

     return (
          <button className="w-fit" onClick={onClick}>
               <img className={`${className}`} src={icon} />
          </button>
     )
}

export default NavIcon