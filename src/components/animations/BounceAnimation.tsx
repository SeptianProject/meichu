import React from "react";
import { motion } from 'motion/react'

interface BounceAnimationProps {
     delayVal?: number;
     hiddenCoordinates: { x?: number, y?: number };
     children: React.ReactNode;
     className?: string;
}

const BounceAnimation: React.FC<BounceAnimationProps> = ({
     delayVal,
     children,
     className,
     hiddenCoordinates,
}) => {
     const bounceEffect = {
          hidden: { opacity: 0, y: hiddenCoordinates.y, x: hiddenCoordinates.x },
          visible: { opacity: 1, y: 0, x: 0 }
     }

     return (
          <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                    delay: delayVal
               }}
               variants={bounceEffect}
               className={className}>
               {children}
          </motion.div>
     );
}

export default BounceAnimation;