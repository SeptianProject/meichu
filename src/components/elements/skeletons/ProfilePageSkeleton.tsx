import Skeleton from "react-loading-skeleton"
import useUI from "../../../hooks/useUI"

export const ProfileContentSkeleton = () => {
     return (
          <div className="w-full h-full pb-10 flex flex-col items-start gap-y-6
          md:gap-x-14 md:flex-row md:items-start">
               <div className='w-44 h-52 md:w-3/5 lg:w-2/4 md:h-[22rem] lg:h-[24rem] xl:h-[30rem] relative'>
                    <Skeleton className='rounded-lg object-cover object-center size-full 
                         border dark:border-dark' />
               </div>
               <div className="size-full flex flex-col gap-y-4 md:gap-y-5">
                    <Skeleton className="w-60 h-8 md:h-14 rounded-lg border dark:border-dark mt-5" />
                    <Skeleton className="w-60 h-3 rounded-lg border dark:border-dark mt-1 mb-5" />
                    <div className="flex flex-col gap-y-1">
                         {[...Array(3)].map((_, index) => (
                              <Skeleton key={index}
                                   className="w-full h-16 md:h-20 rounded-lg border dark:border-dark" />
                         ))}
                    </div>
                    <div className="w-full flex items-center justify-center gap-x-2 md:gap-x-3">
                         {[...Array(2)].map((_, index) => (
                              <Skeleton key={index} borderRadius={99}
                                   className="w-[10rem] md:w-40 h-10 lg:h-12 border dark:border-dark" />
                         ))}
                    </div>
                    <Skeleton className="md:hidden w-full h-1 border dark:border-dark" />
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
               <div className="pt-4 flex flex-col gap-y-7">
                    <div className="flex items-center justify-center gap-x-20">
                         {[...Array(2)].map((_, index) => (
                              <Skeleton key={index} className="w-32 border dark:border-dark" />
                         ))}
                    </div>
                    <div className="flex items-center justify-center md:gap-x-5">
                         {cardSkeletons.map((_, index) => (
                              <Skeleton key={index} className="w-80 h-60 md:w-64 lg:w-52 xl:w-56 
                                        rounded-xl border dark:border-dark" />
                         ))}
                    </div>
               </div>
          </div>
     )
}
