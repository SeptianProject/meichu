type HamburgerItemProps = {
     className?: string
     isActive?: boolean
}

const HamburgerItem = ({ className, isActive }: HamburgerItemProps) => {
     return (
          <div className={`w-6 h-[3px] bg-[#969698] rounded-full transition-all duration-500
               ${className} ${isActive ? 'absolute right-7 top-[10px]' : ''}`} />
     )
}

export default HamburgerItem