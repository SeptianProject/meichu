import { Variants } from "motion/react";
import { CoordinateProps } from "../../types/animation";
import { BASE_TRANSITION, SPRING_TRANSITION } from "../../types/animation";

export const createFadeVariants = (delay?: number): Variants => ({
     hidden: { opacity: 0 },
     visible: {
          opacity: 1,
          transition: {
               ...BASE_TRANSITION,
               delay
          }
     },
     exit: {
          opacity: 0,
          transition: BASE_TRANSITION
     }
})

export const createBounceVariants = (coordinates: CoordinateProps, delay?: number): Variants => ({
     hidden: {
          opacity: 0,
          x: coordinates.x,
          y: coordinates.y
     },
     visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
               ...SPRING_TRANSITION,
               delay
          }
     },
     exit: {
          opacity: 0,
          x: coordinates.x,
          y: coordinates.y,
          transition: BASE_TRANSITION
     }
})

export const scaleVariants: Variants = {
     hidden: { opacity: 0, scale: 0.8 },
     visible: {
          opacity: 1,
          scale: 1,
          transition: SPRING_TRANSITION
     },
     hover: { scale: 1.05, },
     tap: { scale: 0.9 },
     exit: {
          opacity: 0,
          scale: 0.8,
          transition: BASE_TRANSITION
     }
}

export const containerVariants: Variants = {
     hidden: { opacity: 0 },
     visible: {
          opacity: 1,
          transition: {
               delayChildren: 0.5,
               staggerChildren: 0.4
          }
     },
     exit: {
          opacity: 0,
          transition: { duration: 0.2 }
     }
}

export const cardVariants: Variants = {
     hidden: {
          opacity: 0,
          y: 100
     },
     visible: {
          opacity: 1,
          y: 0,
          transition: {
               type: 'spring',
               stiffness: 100,
               damping: 10,
          }
     },
     exit: {
          opacity: 0,
          y: 100,
          transition: {
               duration: 0.2
          }
     }
}