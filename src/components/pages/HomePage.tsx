import HeadCarousel from "../layouts/home/HeadCarousel"
import Heading from "../layouts/home/Heading"

const HomePage = () => {
     return (
          <>
               <div className='min-h-screen flex items-center justify-center pt-32'>
                    <div className="flex flex-col items-center gap-y-10">
                         {/* Carousel */}
                         <HeadCarousel />
                         {/* Heading */}
                         <Heading />
                    </div>
               </div>
               <div className="min-h-screen">

               </div>
          </>
     )
}

export default HomePage