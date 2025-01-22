/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { motion } from 'framer-motion';
import { abstrakImages } from "../../../assets/assets";

const CardProductAnimate = () => {
     const containerRefs = Array(4).fill(null).map(() => React.useRef(null));

     const createColumnProducts = () => {
          const items = [...Array(8)].flatMap(() => abstrakImages)
          return [...items, ...items]
     };

     const columns = React.useMemo(() => [...Array(4)].map(() => createColumnProducts()), [])


     const scrollAnimate = (duration: number, direction: number = 1) => ({
          animate: {
               y: direction > 0 ? [0, -10000] : [-10000, 0],
               transition: {
                    y: {
                         repeat: Infinity,
                         repeatType: 'loop',
                         duration: duration,
                         ease: 'linear'
                    }
               }
          }
     })

     return (
          <div className="hidden md:block md:min-h-[25rem] lg:min-h-[85vh] relative overflow-y-clip">
               <div className="absolute right-0 top-0 w-full h-full rotate-[15deg] lg:translate-x-20">
                    <div className="grid grid-cols-4 transform md:gap-x-40
                    lg:gap-x-52 lg:-translate-x-20">
                         {columns.map((columnProducts, columnIndex) => (
                              <motion.div
                                   variants={scrollAnimate(
                                        200 + columnIndex * 10,
                                        columnIndex % 2 === 0 ? -1 : 1
                                   )}
                                   animate="animate"
                                   key={`container-${columnIndex}`}
                                   ref={containerRefs[columnIndex]}
                                   className="h-screen">
                                   <motion.div key={columnIndex}
                                        dragConstraints={containerRefs[columnIndex]}
                                        drag="y"
                                        className="flex flex-col gap-y-4 lg:gap-y-5 cursor-grab active:cursor-grabbing">
                                        {columnProducts.map((product: string, index: number) => (
                                             <motion.div
                                                  key={`${columnIndex}-${index}`}
                                                  whileHover={{
                                                       scale: 1.08,
                                                       transition: { duration: 0.3 }
                                                  }}
                                                  className="md:w-36 h-60 lg:w-48 lg:h-80">
                                                  <img src={product} alt={`image-${columnIndex}-${index}`}
                                                       className="size-full object-cover object-center 
                                                       pointer-events-none" />
                                             </motion.div>
                                        ))}
                                   </motion.div>
                              </motion.div>
                         ))}
                    </div>
               </div>
          </div>
     );
}

export default CardProductAnimate;