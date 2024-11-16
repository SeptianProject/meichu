import Star from '../../elements/Star'

const Heading = () => {
     return (
          <div className="relative flex flex-col items-center text-center gap-y-4">
               <h1 className='text-[25px] leading-[30px] font-semibold w-[20rem]
               lg:text-[50px] lg:leading-[60px] lg:w-[40rem] dark:text-light'>
                    Meichu Products Make You Unique And Special
               </h1>
               <p className='text-[15px] font-extralight w-[22rem] tracking-wider
               lg:text-[20px] lg:leading-[50px] lg:w-full dark:text-light'>
                    With smooth HD Quality, Korean Style, Goth Style & Cute Stuff.
               </p>
               <Star className='-left-2 -top-1 lg:-left-12 lg:top-5' />
               <Star className='right-7 lg:-right-3 bottom-14' />
          </div>
     )
}

export default Heading