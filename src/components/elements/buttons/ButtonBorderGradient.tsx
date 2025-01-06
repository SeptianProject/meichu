import React from "react"
import BounceAnimation from "../../animations/BounceAnimation"

type ButtonBorderGradient = {
     onClick: () => void
}

const ButtonBorderGradient: React.FC<ButtonBorderGradient> = React.memo(({ onClick }) => {
     return (
          <BounceAnimation
               delayVal={0.8}
               hiddenCoordinates={{ y: 100 }}>
               <div className='bg-gold rounded-full w-28 md:w-32 p-[2px] group 
               hover:bg-gold dark:hover:bg-gold transform hover:-translate-y-1
               hover:scale-105 transition-all duration-300'>
                    <button onClick={onClick} className='bg-transparent font-medium dark:bg-dark w-full 
                    rounded-full dark:text-light p-2 group-hover:bg-transparent group-hover:text-light
                    group-hover:dark:bg-transparent transform transition-all duration-300'>
                         Load More
                    </button>
               </div>
          </BounceAnimation>
     )
})

export default ButtonBorderGradient