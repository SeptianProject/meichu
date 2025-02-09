import React from "react";
import { motion, AnimationProps } from "motion/react";

interface ContainerStaggerAnimationProps {
     children: React.ReactNode
     initialDelay?: number
     staggerDelay: number
     className?: string
}

interface CardStaggerAnimationProps {
     children: React.ReactNode
     hiddenPosition: { x?: number, y?: number }
     className?: string
}

export const ContainerStaggerAnimation: React.FC<ContainerStaggerAnimationProps> = ({
     children,
     initialDelay,
     staggerDelay,
     className
}) => {
     const containerVariants: AnimationProps["variants"] = {
          hidden: { opacity: 0 },
          visible: {
               opacity: 1,
               transition: {
                    delayChildren: initialDelay,
                    staggerChildren: staggerDelay
               }
          }
     }

     return (
          <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={containerVariants}
               className={className}>
               {children}
          </motion.div>
     );
}

export const CardStaggerAnimation: React.FC<CardStaggerAnimationProps> = ({
     hiddenPosition,
     children,
     className
}) => {
     const cardVariants: AnimationProps["variants"] = {
          hidden: { opacity: 0, y: hiddenPosition.y, x: hiddenPosition.x },
          visible: {
               opacity: 1, y: 0, x: 0,
               transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
               }
          }
     }

     return (
          <motion.div
               variants={cardVariants}
               className={className}>
               {children}
          </motion.div>
     )
}