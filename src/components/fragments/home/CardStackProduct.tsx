import React from 'react'
import { motion } from 'motion/react'
import { useProducts } from '../../../hooks/useQueryRequest'
import { getCloudinaryUrl } from '../../../services'
import Skeleton from 'react-loading-skeleton'

const cardConfigs = [
     {
          className: 'size-52 left-5 top-0',
          amplitude: 15,
          delay: 0.5,
          skeletonHeight: 192
     },
     {
          className: 'w-52 h-64 -bottom-10 right-20',
          amplitude: 20,
          delay: 0,
          skeletonHeight: 256
     },
     {
          className: 'size-44 right-5 top-24',
          amplitude: 15,
          delay: 1,
          skeletonHeight: 176
     }
]

const CardStackProduct = () => {
     const { data: productData, isLoading } = useProducts()

     if (isLoading) {
          return (
               <div className='md:hidden relative h-[45dvh] w-full'>
                    {cardConfigs.map((config, index) => (
                         <div key={index}
                              className={`absolute ${config.className}`}>
                              <Skeleton height={config.skeletonHeight} className='rounded-xl' />
                         </div>
                    ))}
               </div>
          )
     }

     return (
          <div className='relative md:hidden w-full h-[45dvh]'>
               <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
               >
                    {productData?.data.slice(0, 3).map((product, index) => (
                         <CardStack
                              key={product.id}
                              delay={cardConfigs[index].delay}
                              image={getCloudinaryUrl(product.attributes.thumbnail.data.attributes.url)}
                              className={cardConfigs[index].className}
                              amplitude={cardConfigs[index].amplitude}
                         />
                    ))}
               </motion.div>
          </div>
     )
}

export default CardStackProduct

interface CardStackProps {
     className?: string
     image?: string
     delay?: number
     amplitude?: number
}

export const CardStack: React.FC<CardStackProps> = ({
     className,
     image,
     delay,
     amplitude = 20
}) => {
     return (
          <motion.div
               className={`absolute ${className}`}
               animate={{
                    x: [0, amplitude, -amplitude, 0],
                    transition: {
                         ease: 'linear',
                         repeat: Infinity,
                         repeatType: 'mirror',
                         delay: delay,
                         duration: 5,
                    }
               }}
          >
               <motion.img
                    src={image}
                    alt="Stack Image"
                    whileHover={{
                         type: 'spring',
                         scale: 1.05,
                    }}
                    transition={{
                         duration: 0.3,
                         ease: 'easeInOut'
                    }}
                    className='w-full h-full object-cover rounded-xl'
               />
          </motion.div>
     )
}