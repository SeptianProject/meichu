import React from "react";
import { motion, Variants } from "motion/react"

interface CircleMoveAnimationProps {
     initialPosition: 'right' | 'left';
     initialDelay?: number;
     className?: string
}

const CircleMoveAnimation: React.FC<CircleMoveAnimationProps> = React.memo(({
     initialPosition,
     className,
     initialDelay
}) => {
     const fadeVariants: Variants = {
          hidden: { opacity: 0 },
          visible: {
               opacity: 1,
               transition: {
                    delay: initialDelay ? initialDelay : 1,
                    duration: 1
               }
          },
          exit: {
               opacity: 0,
               transition: { duration: 0.2 }
          }
     }

     const moveVariants: Variants = {
          visible: {
               // y: initialPosition === 'right' ? [0, 50, 0] : [0, -50, 0],
               x: initialPosition === 'right' ? [20, -120, 20] : [-20, 120, -20],
               transition: {
                    type: 'tween',
                    ease: 'linear',
                    duration: initialPosition === 'right' ? 4 : 3.5,
                    repeat: Infinity
               }
          },
          exit: {
               opacity: 0,
               transition: { duration: 0.2 }
          }
     }


     return (
          <motion.div
               initial="hidden"
               animate="visible"
               exit="exit"
               variants={fadeVariants}
               className={`absolute z-0 ${className}
               ${initialPosition === 'right' ? '-right-60' : '-left-60'}`}>
               <motion.span
                    animate="visible"
                    exit="exit"
                    variants={moveVariants}
                    className={`bg-circle-gold bg-opacity-10 size-60 lg:size-[30rem] absolute
               rounded-full blur-[80px] pointer-events-none
               ${initialPosition === 'right' ? 'right-0' : 'left-0'}`}>
               </motion.span>
          </motion.div>
     );
})

export default CircleMoveAnimation;