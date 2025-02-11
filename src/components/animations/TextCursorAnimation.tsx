import React from "react";
import { motion, AnimatePresence } from "motion/react"

interface TextCursorAnimationProps {
     words: string[];
     className?: string;
}

const TextCursorAnimation: React.FC<TextCursorAnimationProps> = React.memo(({ words, className, }) => {
     const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
     const [displayText, setDisplayText] = React.useState('');
     const [isDeleting, setIsDeleting] = React.useState(false);
     const [isInView, setIsInView] = React.useState(false);

     React.useEffect(() => {
          if (!isInView) return

          const handleTyping = () => {
               const currentWord = words[currentWordIndex];

               if (!isDeleting) {
                    if (displayText.length < currentWord.length) {
                         setDisplayText(currentWord.substring(0, displayText.length + 1));
                    } else {
                         setTimeout(() => setIsDeleting(true), 2000);
                    }
               } else {
                    if (displayText.length > 0) {
                         const deleteCount = Math.ceil(displayText.length / 8);
                         setDisplayText(currentWord.substring(0, Math.max(0, displayText.length - deleteCount)));
                    } else {
                         setIsDeleting(false);
                         setCurrentWordIndex((prev) => (prev + 1) % words.length)
                    }
               }
          }

          const typingSpeed = isDeleting ? 50 : 100
          const timer = setTimeout(handleTyping, typingSpeed);

          return () => clearTimeout(timer)
     }, [displayText, currentWordIndex, isDeleting, words, isInView])

     return (
          <motion.div
               onViewportEnter={() => setIsInView(true)}
               onViewportLeave={() => setIsInView(false)}
               viewport={{ once: true, amount: 0.5 }}
               className={`relative inline-block size-full text-dark 
               dark:bg-gold dark:bg-clip-text dark:text-transparent ${className}`}>
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
                    className={`inline-block bg-dark dark:bg-gold ml-1
                         ${words.includes('dreams!') ? 'w-1 h-6 lg:h-8' : 'w-[2px] md:w-1 h-5 lg:h-10'}`}
                    whileInView={{
                         opacity: [1, 0],
                         transition: {
                              duration: 0.5,
                              repeat: Infinity,
                              repeatType: "reverse",
                         }
                    }}
                    exit={{
                         opacity: 0,
                         transition: {
                              duration: 0.2
                         }
                    }}
               />
          </motion.div>
     );
})

export default TextCursorAnimation;