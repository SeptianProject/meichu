type HamburgerItemProps = {
     className?: string
     isActive?: boolean
}

const HamburgerItem = ({ className, isActive }: HamburgerItemProps) => {
     return (
          <div className={`w-6 h-[3px] bg-[#5E5A5A] dark:bg-[#969698] rounded-full transition-all duration-500
               ${className} ${isActive ? 'absolute right-7 top-[10px] bg-[#d9d9d9]' : ''}`} />
     )
}

export default HamburgerItem