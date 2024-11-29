import React from "react"
import BounceAnimation from "../../animations/BounceAnimation"

type BtnBorderGradientProps = {
     onClick: () => void
}

const BtnBorderGradient: React.FC<BtnBorderGradientProps> = ({ onClick }) => {
     return (
          <BounceAnimation
               delayVal={0.5}
               hiddenCoordinates={{ y: 100 }}>
               <div className='bg-gradient-to-r from-[#FFBA00] to-[#0163E0] 
               rounded-full w-28 md:w-32 p-[2px] group hover:bg-bluePrimary hover:from-transparent
               dark:hover:bg-bluePrimary dark:hover:from-transparent transform
               hover:-translate-y-1 hover:scale-105 transition-all duration-300'>
                    <button onClick={onClick} className='bg-light font-medium dark:bg-dark w-full 
                    rounded-full dark:text-light p-2 group-hover:bg-transparent group-hover:text-light
                    group-hover:dark:bg-transparent transform transition-all duration-300'>
                         Load More
                    </button>
               </div>
          </BounceAnimation>
     )
}

export default BtnBorderGradient