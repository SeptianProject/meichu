import Star from "../../elements/Star"


const Heading = () => {
     return (
          <div className="relative flex flex-col items-center text-center gap-y-4">
               <h1 className='text-2xl font-semibold w-[20rem] dark:text-light
               sm:text-[25px] sm:leading-[30px] 
               md:text-[35px] md:leading-[40px] md:w-[30rem]
               lg:text-[50px] lg:leading-[60px] lg:w-[41rem]'>
                    Meichu Products Make You Unique And Special
               </h1>
               <p className='text-sm font-light w-[22rem] tracking-wider
               sm:text-[15px] md:text-[18px] md:w-[28rem]
               lg:text-[20px] lg:leading-[50px] lg:w-full
               dark:font-extralight dark:text-light'>
                    With smooth HD Quality, Korean Style, Goth Style & Cute Stuff.
               </p>
               <Star className='-left-2 -top-1 md:-left-8 md:top-1 lg:-left-16 lg:top-4' />
               <Star className='right-7 md:right-2 md:bottom-12 lg:-right-12 bottom-14' />
          </div>
     )
}

export default Heading