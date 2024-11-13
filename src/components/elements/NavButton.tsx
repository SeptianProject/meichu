type NavButtonProps = {
     className?: string
}

const NavButton = ({ className }: NavButtonProps) => {
     return (
          <button className={`w-36 py-[6px] text-light font-medium
          flex items-center justify-center font-poppins
          rounded-full bg-[#353535] bg-opacity-50 ${className}`}>
               Contact
          </button>
     )
}

export default NavButton