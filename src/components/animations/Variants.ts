import { Variants } from "motion/react";

export const fadeVariants: Variants = {
     hidden: { opacity: 0 },
     visible: {
          opacity: 1,
          transition: { duration: 0.5 }
     },
     exit: {
          opacity: 0,
          transition: { duration: 0.2 }
     }
}

export const scaleVariants: Variants = {
     hidden: { opacity: 0, scale: 0.8 },
     hover: { scale: 1.05, },
     tap: { scale: 0.9, },
     visible: {
          opacity: 1, scale: 1,
          transition: {
               type: "spring",
               stiffness: 300,
          }
     },
     exit: {
          opacity: 0, scale: 0.8,
          transition: {
               duration: 0.2
          }
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