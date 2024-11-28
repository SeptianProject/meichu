import BtnBorderGradient from "../../elements/BtnBorderGradient"
import CardEvent from "../../fragments/event/CardEvent"
import { AnimationProps, motion } from 'framer-motion'

const cardEvent = <CardEvent type="event" />

const listCardEvent = [
     cardEvent, cardEvent, cardEvent, cardEvent, cardEvent, cardEvent, cardEvent, cardEvent, cardEvent
]

const MainContentEvent = () => {
     const containerVariants: AnimationProps["variants"] = {
          hidden: { opacity: 0 },
          visible: {
               opacity: 1,
               transition: {
                    delayChildren: 0.2,
                    staggerChildren: 0.4
               }
          }
     }

     const cardVariants: AnimationProps["variants"] = {
          hidden: { opacity: 0, y: 100 },
          visible: {
               opacity: 1, y: 0,
               transition: {
                    type: 'spring',
                    stiffness: 80,
                    damping: 10,
               }
          }
     }

     return (
          <div className="flex flex-col items-center gap-y-20">
               <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                    {listCardEvent.map((item, index) => (
                         <motion.div
                              key={index}
                              variants={cardVariants}
                              className='w-full'>
                              {item}
                         </motion.div>
                    ))}
               </motion.div>
               <BtnBorderGradient onClick={() => { }} />
          </div>
     )
}

export default MainContentEvent