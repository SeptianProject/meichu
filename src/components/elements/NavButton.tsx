type NavButtonProps = {
     className?: string
}

const NavButton = ({ className }: NavButtonProps) => {
     return (
          <button className={`w-36 py-[6px] bg-transparent border border-[#353535] 
               dark:text-light text-[#353535] font-medium flex items-center justify-center font-poppins
          rounded-full dark:bg-[#353535] bg-opacity-50 ${className}`}>
               Contact
          </button>
     )
}

export default NavButton