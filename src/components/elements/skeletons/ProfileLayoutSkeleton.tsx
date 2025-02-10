import Skeleton from "react-loading-skeleton"
import useUI from "../../../hooks/useUI"
import 'react-loading-skeleton/dist/skeleton.css'

export const ProfileContentSkeleton = () => {
     return (
          <div className="w-full h-full flex flex-col items-start gap-y-4 border-light/70 
               md:gap-x-5 md:flex-row md:items-start md:border-b md:pb-10 overflow-hidden">
               <div className='size-44 md:w-7/12 md:h-[15rem] lg:h-[19rem] relative'>
                    <Skeleton className='rounded-lg object-cover object-center size-full 
                         border border-graySurface2' />
               </div>
               <div className="size-full flex flex-col gap-y-5">
                    <div className="flex flex-col gap-y-3">
                         {[...Array(3)].map((_, index) => (
                              <Skeleton key={index}
                                   className="w-full h-14 md:h-16 rounded-xl border border-graySurface2" />
                         ))}
                    </div>
                    <div className="w-full flex items-center justify-center gap-x-2 md:gap-x-3">
                         {[...Array(2)].map((_, index) => (
                              <Skeleton key={index} borderRadius={99}
                                   className="w-[7.5rem] md:w-40 h-10 lg:h-12 border border-graySurface2" />
                         ))}
                    </div>
                    <Skeleton borderRadius={99}
                         className="md:hidden w-full h-10 lg:h-12 border border-graySurface2" />
               </div>
          </div>
     )
}

export const ProfileDiscoverSkeleton = () => {
     const { screenSize } = useUI()
     const cardSkeletons = Array.from({
          length: screenSize === 'mobile' ? 1 : screenSize === 'tablet' ? 2 : 3
     })

     return (
          <div className="w-full overflow-hidden">
               <div className={`md:block hidden`}>
                    <div className="md:pt-4 flex flex-col md:border-none gap-y-2 md:gap-y-7">
                         <div className="flex items-center justify-center gap-x-20">
                              {[...Array(2)].map((_, index) => (
                                   <Skeleton key={index} className="w-32 border border-graySurface2" />
                              ))}
                         </div>
                         <div className="flex items-center justify-center gap-x-5 w-full">
                              {cardSkeletons.map((_, index) => (
                                   <Skeleton key={index} className="h-60 md:w-64 lg:w-52 xl:w-56 
                                        rounded-xl border border-graySurface2" />
                              ))}
                         </div>
                    </div>
               </div>
          </div>
     )
}
