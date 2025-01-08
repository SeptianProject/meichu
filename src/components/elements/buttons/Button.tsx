import React from 'react'

interface ButtonProps {
     title: string
     className?: string
     onClick?: () => void
     isGradient: boolean
     isCancel?: boolean
     isLogout?: boolean
     disabled?: boolean
     type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<ButtonProps> = React.memo(({
     title,
     className,
     isGradient,
     isCancel,
     isLogout,
     disabled,
     type = 'button',
     onClick,
}) => {
     return (
          <button
               disabled={disabled}
               type={type}
               onClick={onClick}
               className={`${isGradient ? 'bg-gradient-to-r from-yellowLinear1 to-yellowLinear2 text-light'
                    : isCancel ? 'border border-graySurface1 text-graySurface1 bg-transparent hover:bg-graySurface1 hover:text-white hover:border-transparent'
                         : isLogout ? 'border-redDanger text-redDanger hover:bg-redDanger hover:text-white border hover:border-transparent'
                              : 'border bg-transparent text-graySurface1 border-graySurface1 dark:border-light dark:text-light'}
                    ${className} font-semibold rounded-full w-32 py-2 transition-all duration-300 ease-in-out`}
          >
               {title}
          </button >
     )
})

export default Button