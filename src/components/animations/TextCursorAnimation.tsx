import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface TextCursorAnimationProps {
     words: string[];
     className?: string;
}

const TextCursorAnimation: React.FC<TextCursorAnimationProps> = ({ words, className, }) => {
     const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
     const [displayText, setDisplayText] = React.useState('');
     const [isDeleting, setIsDeleting] = React.useState(false);

     React.useEffect(() => {
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
                         setDisplayText(currentWord.substring(0, displayText.length - 1));
                    } else {
                         setIsDeleting(false);
                         setCurrentWordIndex((prev) => (prev + 1) % words.length)
                    }
               }
          }

          const typingSpeed = isDeleting ? 50 : 100
          const timer = setTimeout(handleTyping, typingSpeed);

          return () => clearTimeout(timer)
     }, [displayText, currentWordIndex, isDeleting, words])


     return (
          <div className={`relative inline-block size-full text-dark 
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
                         ${words.includes('dreams!') ? 'w-1 h-6 lg:h-8' : 'w-1 h-4 lg:h-10'}`}
                    animate={{
                         opacity: [1, 0],
                         transition: {
                              duration: 0.5,
                              repeat: Infinity,
                              repeatType: "reverse",
                         }
                    }} />
          </div>
     );
}

export default TextCursorAnimation;