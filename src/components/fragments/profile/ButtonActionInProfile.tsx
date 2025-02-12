import React from "react"

type ButtonActionInProfileProps = {
     text: string
     onClick: VoidFunction
     className?: string
     disabled?: boolean
}

const ButtonActionInProfile: React.FC<ButtonActionInProfileProps> = React.memo(({
     onClick,
     text,
     disabled = false,
     className
}) => {
     return (
          <button onClick={onClick} type='button' disabled={disabled}
               className={`border rounded-full w-32 py-[10px] font-semibold text-sm ${className}
                    transition-all duration-300
               ${text === 'Log Out'
                         ? 'border-red-600 text-red-600 hover:bg-red-600 hover:text-white hover:border-transparent'
                         : 'bg-bluePrimary text-light border-transparent hover:bg-bluePrimary/80'}`}>
               {text}
          </button>
     )
})

export default ButtonActionInProfile