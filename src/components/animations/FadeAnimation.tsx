import React from "react";
import { AnimationWrapper } from "./AnimationWrapper";
import { fadeVariants } from "./Variants";

interface FadeAnimationProps {
     children: React.ReactNode;
     className?: string;
     style?: React.CSSProperties
}

export const FadeAnimation: React.FC<FadeAnimationProps> = React.memo(({
     children,
     className,
     style
}) => {

     return (
          <AnimationWrapper
               variants={fadeVariants}
               whileInView="visible"
               initial="hidden"
               exit="exit"
               style={style}
               className={className}>
               {children}
          </AnimationWrapper>
     );
})

