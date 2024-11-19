/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from "react";
import { motion } from 'framer-motion';
import { productItems } from "../../../assets/assets";

interface CardProductAnimateProps {
     readonly customProductItems?: string[];
}

const CardProductAnimate: React.FC<CardProductAnimateProps> = () => {
     const containerRefs = Array(4).fill(null).map(() => useRef(null));

     const createColumnProducts = () => {
          const items = [...Array(8)].flatMap(() => productItems)
          return [...items, ...items]
     };

     const columns = [...Array(4)].map(() => createColumnProducts())


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
          <div className="hidden lg:block min-h-[85vh] relative overflow-y-clip">
               <div className="absolute right-0 top-0 w-full h-full rotate-[15deg] translate-x-20">
                    <div className="grid grid-cols-4 gap-x-52 transform -translate-x-20">
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
                                        className="flex flex-col gap-y-5 cursor-grab active:cursor-grabbing">
                                        {columnProducts.map((product: string, index: number) => (
                                             <motion.div
                                                  key={`${columnIndex}-${index}`}
                                                  whileHover={{
                                                       scale: 1.08,
                                                       transition: { duration: 0.3 }
                                                  }}
                                                  className="w-48 h-80">
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