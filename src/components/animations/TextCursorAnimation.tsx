import React from "react";
import { motion, AnimatePresence } from "motion/react"
import { BASE_VIEWPORT, BaseAnimationProps } from "../../types/animation";
import { useTextCursor } from "../../hooks/useTextCursor";

interface TextCursorProps extends BaseAnimationProps {
     words: string[]
}

const TextCursorAnimation: React.FC<TextCursorProps> = React.memo(({
     words,
     className,
}) => {
     const [isInView, setIsInView] = React.useState(false)
     const { displayText, cursorStyle } = useTextCursor(words, isInView)

     return (
          <motion.div
               viewport={BASE_VIEWPORT}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               onViewportEnter={() => setIsInView(true)}
               onViewportLeave={() => setIsInView(false)}
               className={`relative inline-block size-full
               bg-gold bg-clip-text text-transparent ${className}`}>
               <AnimatePresence mode="wait">
                    <motion.span
                         key={displayText}
                         transition={{
                              ease: "linear",
                              type: "tween",
                              duration: 1
                         }}>
                         {displayText}
                    </motion.span>
               </AnimatePresence>
               <motion.span
                    className={cursorStyle}
                    animate={{
                         opacity: [1, 0]
                    }}
                    transition={{
                         duration: 0.5,
                         repeat: Infinity,
                         repeatType: "reverse",
                    }}
               />
          </motion.div>
     );
})

export default TextCursorAnimation;