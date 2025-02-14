import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const BundleCarouselSkeleton = () => {
     return (
          <div className="w-full h-full md:absolute md:left-0 lg:left-20 xl:left-40">
               <div className="w-full h-full pb-5">
                    <div className="flex flex-col md:flex-row md:items-center md:gap-x-10 lg:gap-x-16 
                    !max-w-[40rem] md:!max-w-[40rem] lg:!max-w-[50rem]">
                         <div className="rounded-3xl w-[23rem]">
                              <Skeleton className="rounded-3xl w-full h-[20rem] max-w-[65vw] 
                                        sm:h-[25rem] sm:max-w-[70vw] md:max-w-[20rem]
                                        lg:h-[30rem] lg:max-w-[26rem] border dark:border-dark"/>
                         </div>
                         <div className="mt-6 md:mb-10 lg:mb-20 w-fit h-fit">
                              <Skeleton className="w-[16rem] h-[2rem] lg:h-[2.5rem] border dark:border-dark" />
                         </div>
                    </div>
               </div>
               <div className="w-full -bottom-10 left-40 md:absolute md:max-w-[35rem] lg:max-w-[50rem]">
                    <div className="flex gap-4 w-full">
                         {Array.from({ length: 3 }).map((_, index) => (
                              <div key={index}
                                   className="w-32 h-40 md:w-52 md:h-48 lg:w-64 lg:h-56 rounded-xl">
                                   <Skeleton className="h-full w-full rounded-xl border dark:border-dark" />
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     )
}

export default BundleCarouselSkeleton