import Star from '../../elements/Star'

const Heading = () => {
     return (
          <div className="relative flex flex-col items-center text-center gap-y-4">
               <h1 className='text-[50px] leading-[60px] font-semibold w-[40rem]'>
                    Meichu Products Make You Unique And Special
               </h1>
               <p className='text-[20px] leading-[50px] font-extralight tracking-wider'>
                    With smooth HD Quality, Korean Style, Goth Style & Cute Stuff.
               </p>
               <Star className='-left-8' />
               <Star className='-right-5 bottom-14' />
          </div>
     )
}

export default Heading