import Icon from '@mdi/react'
import { mdiStarFourPoints } from '@mdi/js'
import { motion } from 'framer-motion'
import React from 'react'

type StarProps = {
     className?: string
     delayVal: number
     initial: number
}

const Star: React.FC<StarProps> = ({
     className,
     delayVal,
     initial,
}) => {
     const bounceEffect = {
          hidden: { opacity: 0, x: initial },
          visible: { opacity: 1, x: 0 }
     }

     return (
          <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                    delay: delayVal
               }}
               variants={bounceEffect}
               className='size-full absolute'
          >
               <Icon path={mdiStarFourPoints}
                    className={`absolute ${className} text-dark dark:text-light 
                    size-5 md:size-8 lg:size-12`} />
          </motion.div>
     )
}

export default Star