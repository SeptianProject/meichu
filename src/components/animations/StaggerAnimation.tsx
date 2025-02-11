import React from "react";
import { motion, Variants, AnimatePresence } from "motion/react";

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

export const ContainerStaggerAnimation: React.FC<ContainerStaggerAnimationProps> = React.memo(({
     children,
     initialDelay,
     staggerDelay,
     className
}) => {
     const containerVariants: Variants = {
          hidden: { opacity: 0 },
          visible: {
               opacity: 1,
               transition: {
                    delayChildren: initialDelay,
                    staggerChildren: staggerDelay
               }
          },
          exit: {
               opacity: 0,
               transition: { duration: 0.2 }
          }
     }

     return (
          <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               exit="exit"
               viewport={{
                    once: true,
                    amount: 0.2
               }}
               className={className}>
               <AnimatePresence mode="wait">
                    {children}
               </AnimatePresence>
          </motion.div>
     );
})

export const CardStaggerAnimation: React.FC<CardStaggerAnimationProps> = React.memo(({
     hiddenPosition,
     children,
     className
}) => {
     const cardVariants: Variants = {
          hidden: {
               opacity: 0,
               y: hiddenPosition.y,
               x: hiddenPosition.x,
          },
          visible: {
               opacity: 1,
               y: 0,
               x: 0,
               transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
               }
          },
          exit: {
               opacity: 0,
               y: hiddenPosition.y,
               x: hiddenPosition.x,
               transition: {
                    duration: 0.2
               }
          }
     }

     return (
          <motion.div
               variants={cardVariants}
               whileInView="visible"
               initial="hidden"
               exit="exit"
               viewport={{ once: true, margin: '-20px' }}
               className={className}>
               {children}
          </motion.div>
     )
})