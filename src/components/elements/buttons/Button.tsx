import React from 'react'

// customProduct layout,
// customProduct page publish,
// cardEvent,
// buyNow detailPage
// login
// modal Published customProduct page
// buyNow detailPage
// forgotPassword
// editProfile

interface ButtonProps {
     title: string
     className?: string
     onClick?: () => void
     isGradient: boolean
     isCancel?: boolean
     type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = React.memo(({
     title,
     className,
     isGradient,
     isCancel,
     type = 'button',
     onClick,
}) => {
     return (
          <button
               type={type}
               onClick={onClick}
               className={`${isGradient ? 'bg-gradient-to-r from-yellowLinear1 to-yellowLinear2 text-light'
                    : isCancel ? 'border border-graySurface1 text-graySurface1 bg-transparent'
                         : 'border border-light text-light bg-transparent'}
                    ${className} font-semibold rounded-full w-36 py-2`}
          >
               {title}
          </button >
     )
})

export default Button