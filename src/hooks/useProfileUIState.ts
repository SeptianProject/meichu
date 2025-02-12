import React from 'react'

const useProfileUIState = (isOpen: boolean) => {
     const [maxHeight, setMaxHeight] = React.useState(0)

     React.useEffect(() => {
          const updateMaxHeight = () => {
               setMaxHeight(window.innerHeight * 0.8)
          }
          updateMaxHeight()
          window.addEventListener('resize', updateMaxHeight)

          if (isOpen) {
               const scrollY = window.scrollY
               document.body.style.cssText = `
               overflow: hidden;
               position: fixed;
               width: 100%;
               top: -${scrollY}px;
               `
          } else {
               const scrollY = parseInt(document.body.style.top || '0') * -1
               document.body.style.cssText = ''
               window.scrollTo(0, scrollY)
          }

          return () => window.removeEventListener('resize', updateMaxHeight)
     }, [isOpen])

     const modalStyle = {
          maxHeight: isOpen ? `${maxHeight}px` : '0px'
     }

     const contentStyle = {
          maxHeight: isOpen ? `${maxHeight}px` : '0px'
     }

     return {
          maxHeight,
          modalStyle,
          contentStyle
     }
}

export default useProfileUIState