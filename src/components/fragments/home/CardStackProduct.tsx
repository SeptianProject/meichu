import React from 'react'
import { abstrakImages } from '../../../assets/assets'
import { motion } from 'motion/react'

const CardStackProduct = () => {

     return (
          <div className='relative md:hidden w-full h-[50vh]'>
               <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
               >
                    <CardStack
                         delay={1}
                         image={abstrakImages[0]}
                         className='size-52 left-0 top-0'
                         amplitude={15}
                    />
                    <CardStack
                         delay={1.5}
                         image={abstrakImages[2]}
                         className='w-52 h-72 -bottom-5 right-10'
                         amplitude={20}
                    />
                    <CardStack
                         delay={0.5}
                         image={abstrakImages[1]}
                         className='size-44 right-0 top-24'
                         amplitude={10}
                    />
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
                         scale: 1.05,
                         transition: { duration: 0.3 }
                    }}
                    className='w-full h-full object-cover rounded-xl'
               />
          </motion.div>
     )
}