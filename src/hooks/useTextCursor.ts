/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

interface TextCursorState {
     currentWordIndex: number
     displayText: string
     isDeleting: boolean
}

export const useTextCursor = (words: string[], isInView: boolean) => {
     const [state, setState] = React.useState<TextCursorState>({
          currentWordIndex: 0,
          displayText: '',
          isDeleting: false
     })

     const handleTyping = React.useCallback(() => {
          if (!isInView) return

          setState(prev => {
               const currentWord = words[prev.currentWordIndex]

               if (!prev.isDeleting) {
                    if (prev.displayText.length < currentWord.length) {
                         return {
                              ...prev,
                              displayText: currentWord.substring(0, prev.displayText.length + 1)
                         }
                    }
                    return prev
               }

               if (prev.displayText.length > 0) {
                    const deleteCount = Math.ceil(prev.displayText.length / 8);
                    return {
                         ...prev,
                         displayText: currentWord.substring(0, Math.max(0, prev.displayText.length - deleteCount))
                    };
               }

               return {
                    ...prev,
                    isDeleting: false,
                    currentWordIndex: (prev.currentWordIndex + 1) % words.length
               }
          })
     }, [words, isInView])

     React.useEffect(() => {
          if (!isInView) return
          let deleteTimer: any
          if (!state.isDeleting && state.displayText === words[state.currentWordIndex]) {
               deleteTimer = setTimeout(() => {
                    setState(prev => ({ ...prev, isDeleting: true }))
               }, 2000);
          }

          const typingTimer = setTimeout(
               handleTyping,
               state.isDeleting ? 50 : 100
          );
          return () => {
               clearTimeout(typingTimer)
               if (deleteTimer) clearTimeout(deleteTimer)
          }
     }, [state, handleTyping, words, isInView])

     return {
          displayText: state.displayText,
          cursorStyle: `inline-block bg-dark dark:bg-gold ml-1
                         ${words.includes('dreams!') ? 'w-[2px] md:w-1 h-6 lg:h-8' : 'w-[2px] md:w-1 h-5 lg:h-10'}`
     }
}

