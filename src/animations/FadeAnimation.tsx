import React from "react";
import { AnimationWrapper } from "./AnimationWrapper";
import { fadeVariants } from "./Variants";

interface FadeAnimationProps {
     children: React.ReactNode;
     className?: string;
     style?: React.CSSProperties
}

export const FadeAnimation: React.FC<FadeAnimationProps> = ({
     children,
     className,
     style
}) => {

     return (
          <AnimationWrapper
               variants={fadeVariants}
               style={style}
               className={className}>
               {children}
          </AnimationWrapper>
     );
}

