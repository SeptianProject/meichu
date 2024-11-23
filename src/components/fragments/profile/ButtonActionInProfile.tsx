type ButtonActionInProfileProps = {
     text: string
     onClick: () => void
     className?: string
}

const ButtonActionInProfile: React.FC<ButtonActionInProfileProps> = ({
     onClick,
     text,
     className }) => {
     return (
          <button onClick={onClick} type='button'
               className={`border rounded-full w-32 py-[10px] font-semibold text-sm ${className}
                    transition-all duration-300 ease-in-out
               ${text === 'Log Out'
                         ? 'border-red-600 text-red-600 hover:bg-red-600 hover:text-white hover:border-transparent'
                         : 'bg-bluePrimary text-light border-transparent'}`}>
               {text}
          </button>
     )
}

export default ButtonActionInProfile