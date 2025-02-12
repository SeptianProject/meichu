import React from "react";
import { motion } from "motion/react"
import { BASE_VIEWPORT, BaseAnimationProps } from "../../types/animation";

export const AnimationWrapper: React.FC<BaseAnimationProps> = React.memo(({
     children,
     variants,
     initial = "hidden",
     whileInView = "visible",
     exit = "exit",
     viewport = BASE_VIEWPORT,
     className,
     ...rest
}) => {
     return (
          <motion.div
               initial={initial}
               whileInView={whileInView}
               exit={exit}
               variants={variants}
               viewport={viewport}
               className={className}
               {...rest}
          >
               {children}
          </motion.div>
     )
})