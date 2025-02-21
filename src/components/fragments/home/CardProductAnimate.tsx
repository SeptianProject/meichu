import React from "react";
import { motion, Variants } from 'motion/react'
import { useProducts } from "../../../hooks/useQueryRequest";
import { getCloudinaryUrl } from "../../../services";

const CardProductAnimate = () => {
     const ref = React.useRef(null);
     const containerRefs = Array(4).fill(null).map(() => ref);
     const { data: productData, isLoading } = useProducts()

     const createColumnProducts = React.useCallback(() => {
          const items = [...Array(8)].flatMap(() => isLoading ? []
               : productData?.data.flatMap((product) => product.attributes.thumbnail.data.attributes.url))

          return [...items, ...items]
     }, [productData, isLoading])

     const columns = React.useMemo(() => [...Array(4)].map(
          () => createColumnProducts()
     ), [createColumnProducts])

     const scrollAnimate = (duration: number, direction: number = 1): Variants => ({
          animate: {
               y: direction > 0 ? [0, -10000] : [-10000, 0],
               transition: {
                    y: {
                         repeat: Infinity,
                         repeatType: 'mirror',
                         duration: duration,
                         ease: 'linear',
                    }
               }
          }
     })

     if (isLoading) {
          return (
               <div className="hidden md:block md:min-h-[25rem] lg:min-h-[85vh] relative overflow-y-clip">
                    <div className="absolute right-0 top-0 w-full h-full rotate-[15deg] lg:translate-x-20">
                         <div className="grid grid-cols-4 transform md:gap-x-40 lg:gap-x-52 lg:-translate-x-20">
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
                                        <div key={columnIndex}
                                             className="flex flex-col gap-y-4 lg:gap-y-5 cursor-grab active:cursor-grabbing">
                                             {columnProducts.map((_, index) => (
                                                  <div key={index} className="bg-cardBackground md:w-36 h-60 lg:w-48 lg:h-80" />
                                             ))}
                                        </div>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </div>
          )
     }

     return (
          <div className="hidden md:block md:min-h-[25rem] lg:min-h-[85vh] relative overflow-y-clip">
               <div className="absolute right-0 top-0 w-full h-full rotate-[15deg] lg:translate-x-20">
                    <div className="grid grid-cols-4 transform md:gap-x-40 lg:gap-x-52 lg:-translate-x-20">
                         {columns?.map((columnProducts, columnIndex) => (
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
                                        {columnProducts?.map((product, index) => (
                                             <motion.div
                                                  key={`${columnIndex}-${index}`}
                                                  whileHover={{
                                                       scale: 1.08,
                                                       transition: { duration: 0.3 }
                                                  }}
                                                  className="md:w-36 h-60 lg:w-48 lg:h-80">
                                                  <img src={getCloudinaryUrl(product!)}
                                                       alt={`image-${columnIndex}-${index}`}
                                                       className={`size-full object-cover object-center 
                                                       pointer-events-none transition-opacity duration-300
                                                       ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                                                       onLoad={() => product!.length > 0}
                                                       loading="lazy"
                                                  />
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