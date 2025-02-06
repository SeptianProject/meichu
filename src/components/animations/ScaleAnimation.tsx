import React from "react";
import { AnimationWrapper } from "./AnimationWrapper";
import { scaleVariants } from "./Variants";

interface ScaleAnimationProps {
     children: React.ReactNode
     className?: string
}

const ScaleAnimation: React.FC<ScaleAnimationProps> = ({
     children,
     className
}) => {
     return (
          <AnimationWrapper
               whileTap="tap"
               whileHover="hover"
               variants={scaleVariants}
               className={className}>
               {children}
          </AnimationWrapper>
     );
}

export default ScaleAnimation;