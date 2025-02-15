import React from 'react'

interface ButtonProps {
     title: string
     isCirlce?: boolean
     isWidthFull?: boolean
     className?: string
     onClick?: VoidFunction
     isGold: boolean
     isCancel?: boolean
     isLogout?: boolean
     disabled?: HTMLButtonElement['disabled']
     type?: HTMLButtonElement['type']
}

const Button: React.FC<ButtonProps> = React.memo(({
     title,
     className,
     isGold,
     isCirlce = true,
     isCancel,
     isLogout,
     disabled,
     type = 'button',
     onClick,
     isWidthFull
}) => {
     return (
          <div className={`${isGold ? `bg-gold p-[2px] 
          ${isCirlce ? 'rounded-full' : 'rounded-lg'} font-semibold` : 'bg-transparent'} 
          ${isWidthFull ? 'w-full' : 'w-fit'}`}>
               <button
                    disabled={disabled}
                    type={type}
                    onClick={onClick}
                    className={`${isGold ? `bg-light dark:bg-dark text-yellowBloobs border-transparent`
                         : isCancel ? 'border border-graySurface1 text-graySurface1 bg-transparent hover:bg-graySurface1 hover:text-white hover:border-transparent'
                              : isLogout ? 'border-redDanger text-redDanger hover:bg-redDanger hover:text-white border hover:border-transparent'
                                   : 'border bg-transparent text-graySurface1 border-graySurface1 dark:border-light dark:text-light'}
                         border-2 font-semibold py-[8px] rounded-full transition-all duration-300
                         ${isWidthFull ? 'w-full' : `${className}`} `}>
                    <span className={`${isGold ? 'bg-gold bg-clip-text text-transparent' : ''}`}>
                         {title}
                    </span>
               </button >
          </div>
     )
})

export default Button