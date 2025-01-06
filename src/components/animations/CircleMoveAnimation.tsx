import React from "react";
import { AnimationProps, motion } from "framer-motion";

interface CircleMoveAnimationProps {
     initialPosition: 'right' | 'left';
     initialDelay?: number;
     className?: string
}

const CircleMoveAnimation: React.FC<CircleMoveAnimationProps> = ({
     initialPosition,
     className,
     initialDelay
}) => {
     const fadeVariants: AnimationProps["variants"] = {
          hidden: { opacity: 0 },
          visible: {
               opacity: 1,
               transition: {
                    delay: initialDelay ? initialDelay : 1,
                    duration: 1
               }
          }
     }

     const moveVariants: AnimationProps["variants"] = {
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
     }


     return (
          <motion.div
               initial="hidden"
               animate="visible"
               variants={fadeVariants}
               className={`absolute z-0 ${className}
               ${initialPosition === 'right' ? '-right-60' : '-left-60'}`}>
               <motion.span
                    animate="visible"
                    variants={moveVariants}
                    className={`bg-circle-gold bg-opacity-10 size-60 lg:size-[30rem] absolute
               rounded-full blur-[80px] pointer-events-none
               ${initialPosition === 'right' ? 'right-0' : 'left-0'}`}>
               </motion.span>
          </motion.div>
     );
}

export default CircleMoveAnimation;