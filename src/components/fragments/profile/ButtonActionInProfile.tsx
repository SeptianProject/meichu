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
               className={`border rounded-full w-32 py-3 font-semibold text-sm ${className}
               ${text === 'Log Out'
                         ? 'border-red-600 text-red-600'
                         : 'bg-bluePrimary text-light border-transparent'}`}>
               {text}
          </button>
     )
}

export default ButtonActionInProfile