import React from "react";
import { motion, Variants } from 'motion/react'
import { BASE_VIEWPORT } from "../../types/animation";

interface BounceAnimationProps {
     hiddenCoordinates: { x?: number, y?: number };
     children: React.ReactNode;
     className?: string;
     delayVal?: number;
}

const BounceAnimation: React.FC<BounceAnimationProps> = React.memo(({
     children,
     className,
     hiddenCoordinates,
     delayVal
}) => {
     const bounceVariants: Variants = {
          hidden: {
               opacity: 0,
               y: hiddenCoordinates.y,
               x: hiddenCoordinates.x,
          },
          visible: {
               opacity: 1,
               y: 0,
               x: 0,
               transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                    delay: delayVal
               }
          },
          exit: {
               opacity: 0,
               y: hiddenCoordinates.y,
               x: hiddenCoordinates.x,
               transition: {
                    duration: 0.2
               }
          }
     }

     return (
          <motion.div
               variants={bounceVariants}
               initial="hidden"
               animate="visible"
               exit='exit'
               viewport={BASE_VIEWPORT}
               className={className}>
               {children}
          </motion.div>
     );
})

export default BounceAnimation;