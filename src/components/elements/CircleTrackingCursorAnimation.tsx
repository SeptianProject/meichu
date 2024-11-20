import { motion } from "framer-motion"
import React from "react"

const CircleTrackingCursorAnimation = () => {
     const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 400 })
     // const handleMouseMove = (event: MouseEvent) => {
     //      const position = {
     //           x: event.pageX,
     //           y: event.pageY,
     //      }

     //      const offset = {
     //           left: circleRef.current?.offsetLeft,
     //           top: circleRef.current?.offsetTop,
     //           width: circleRef.current?.clientWidth,
     //           height: circleRef.current?.clientHeight,
     //      }

     //      let reference = circleRef.current?.offsetParent
     //      while (reference) {
     //           offset.left += reference?.offsetLeft
     //           offset.top += reference?.offsetTop
     //           reference = reference?.offsetParent
     //      }

     //      return {
     //           x: position.x - offset.left!,
     //           y: position.y - offset.top!,
     //           width: offset.width!,
     //           height: offset.height!,
     //           centerX: (position.x - offset.left! - offset.width! / 2) / (offset.width! / 2),
     //           centerY: (position.y - offset.top! - offset.height! / 2) / (offset.height! / 2),
     //      }
     // }

     const handleMouseMove = (e: MouseEvent) => {
          setMousePosition({
               x: e.clientX,
               y: e.clientY
          })
     }

     React.useEffect(() => {
          window.addEventListener("mousemove", handleMouseMove)

          return () => {
               window.removeEventListener("mousemove", handleMouseMove)
          }
     }, [])

     return (
          <motion.div className="bg-[#8474DB]/20 size-60 lg:size-[25rem] fixed inset-0 rounded-full 
          blur-[80px] pointer-events-none"
               animate={{
                    x: mousePosition.x - 180,
                    y: mousePosition.y - 180,
               }}
               transition={{ type: "spring", duration: 0.3 }}
          />
     )
}

export default CircleTrackingCursorAnimation