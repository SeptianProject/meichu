import BounceAnimation from "../../../animations/BounceAnimation"
import Star from "../../elements/Star"


const Heading = () => {
     return (
          <div className="relative flex flex-col items-center text-center gap-y-2">
               <BounceAnimation
                    className="w-fit"
                    delayVal={0.8}
                    hiddenCoordinates={{ y: 100 }}
                    visibleCoordinates={{ y: 0 }}>
                    <h1 className='text-2xl font-semibold w-[20rem] dark:text-light
                         sm:text-[25px] sm:leading-[30px] 
                         md:text-[35px] md:leading-[40px] md:w-[30rem]
                         lg:text-[50px] lg:leading-[60px] lg:w-[41rem]'>
                         Meichu Products Make You Unique And Special
                    </h1>
               </BounceAnimation>
               <BounceAnimation
                    className="w-full"
                    delayVal={1.2}
                    hiddenCoordinates={{ y: -50 }}
                    visibleCoordinates={{ y: 0 }}>
                    <p className='text-sm font-light w-[22rem] tracking-wider
                         sm:text-[15px] md:text-[18px] md:w-[28rem]
                         lg:text-[20px] lg:leading-[50px] lg:w-full
                         dark:font-extralight dark:text-light'>
                         With smooth HD Quality, Korean Style, Goth Style & Cute Stuff.
                    </p>
               </BounceAnimation>
               <Star className='-left-2 -top-1 md:-left-8 md:top-1 lg:-left-16 lg:top-4 xl:top-2'
                    delayVal={1.5}
                    initial={-50}
               />
               <Star className='right-7 md:right-2 md:bottom-12 lg:-right-12 bottom-14 xl:-right-8'
                    delayVal={1.5}
                    initial={100}
               />
          </div>
     )
}

export default Heading