import React from "react";
import { motion, Variants, MotionProps } from "motion/react"

interface AnimationWrapperProps extends MotionProps {
     children: React.ReactNode
     variants?: Variants
     initial?: MotionProps['initial']
     animate?: MotionProps['animate']
     exit?: MotionProps['exit']
     className?: string
}

export const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
     children,
     variants,
     initial = "hidden",
     animate = "visible",
     exit = "hidden",
     className,
     ...rest
}) => {
     return (
          <motion.div
               initial={initial}
               animate={animate}
               exit={exit}
               variants={variants}
               className={className}
               {...rest}
          >
               {children}
          </motion.div>
     )
}