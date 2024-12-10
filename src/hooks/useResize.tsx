import React from "react";

export const useResize = () => {
     const [screenSize, setScreenSize] = React.useState<'mobile' | 'tablet' | 'desktop'>('desktop')

     const handleResize = () => {
          const width = window.innerWidth
          if (width < 768 && width < 1024) {
               setScreenSize('mobile')
          } else if (width >= 768 && width < 1024) {
               setScreenSize('tablet')
          } else {
               setScreenSize('desktop')
          }
     }

     React.useEffect(() => {
          handleResize()
          window.addEventListener('resize', handleResize)
          return () => window.removeEventListener('resize', handleResize)
     }, [])

     return { screenSize }
}