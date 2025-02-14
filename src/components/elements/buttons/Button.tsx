import React from 'react'

interface ButtonProps {
     title: string
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
     isCancel,
     isLogout,
     disabled,
     type = 'button',
     onClick,
}) => {
     return (
          <div className={`${isGold ? 'bg-gold rounded-full font-semibold' : 'bg-transparent'} 
          p-[2px] w-fit h-fit`}>
               <button
                    disabled={disabled}
                    type={type}
                    onClick={onClick}
                    className={`${isGold ? 'bg-light dark:bg-dark text-yellowBloobs border-transparent'
                         : isCancel ? 'border border-graySurface1 text-graySurface1 bg-transparent hover:bg-graySurface1 hover:text-white hover:border-transparent'
                              : isLogout ? 'border-redDanger text-redDanger hover:bg-redDanger hover:text-white border hover:border-transparent'
                                   : 'border bg-transparent text-graySurface1 border-graySurface1 dark:border-light dark:text-light'}
                         border-2 font-semibold w-32 py-[10px] rounded-full transition-all duration-300
                         ${className}`}>
                    {title}
               </button >
          </div>
     )
})

export default Button