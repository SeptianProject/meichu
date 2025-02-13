import React from "react"
import BounceAnimation from "../../animations/BounceAnimation"

type ButtonBorderGradient = {
     onClick: VoidFunction
     isExpanded?: boolean
}

const ButtonBorderGradient: React.FC<ButtonBorderGradient> = React.memo(({ onClick, isExpanded }) => {
     return (
          <BounceAnimation
               hiddenCoordinates={{ y: 50 }}>
               <div className='bg-gold rounded-full w-28 md:w-32 p-[2px] group transform hover:-translate-y-1
               hover:scale-105 transition-all duration-300'>
                    <button
                         onClick={onClick}
                         className='bg-light font-medium dark:bg-dark w-full rounded-full 
                         dark:text-light p-2 transform transition-all duration-300'>
                         {isExpanded ? 'Show Less' : 'Load More'}
                    </button>
               </div>
          </BounceAnimation>
     )
})

export default ButtonBorderGradient