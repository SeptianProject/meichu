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

export const AnimationWrapper: React.FC<AnimationWrapperProps> = React.memo(({
     children,
     variants,
     initial = "hidden",
     whileInView = "visible",
     exit = "exit",
     className,
     ...rest
}) => {
     return (
          <motion.div
               initial={initial}
               whileInView={whileInView}
               exit={exit}
               variants={variants}
               className={className}
               {...rest}
          >
               {children}
          </motion.div>
     )
})