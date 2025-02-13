import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const DetailCardSkeleton = () => {
     const skeletonItems = Array.from({ length: 3 })
     const buttonSkeletons = Array.from({ length: 2 })

     const borderClasses = `
     border border-graySurface2
     `

     return (
          <div className='space-y-10 lg:flex items-start gap-x-16'>
               <div className='relative w-full h-[22rem] lg:h-[38rem]'>
                    <Skeleton className={`w-full h-full rounded-2xl ${borderClasses}`} />
                    <div className='absolute top-1/2 -translate-y-1/2 left-5 
                    flex flex-col items-start justify-center gap-y-3 md:gap-y-5'>
                         {skeletonItems.map((_, index) => (
                              <Skeleton key={index}
                                   className={`${borderClasses} rounded-xl cursor-pointer size-24 
                              md:size-28 lg:size-32 xl:size-36 transition-all duration-300 ease-in-out`} />
                         ))}
                    </div>
               </div>
               <div className='flex flex-col gap-y-5 w-full'>
                    <div >
                         <Skeleton className={`${borderClasses} w-80 h-10`} />
                         <Skeleton className={`${borderClasses} w-40 h-8`} />
                         <Skeleton className={`${borderClasses} w-28 h-5 mt-2`} />
                    </div>
                    <div>
                         <Skeleton className={`${borderClasses} w-40 h-8`} />
                         <div>
                              <Skeleton className={`${borderClasses} w-72 h-5`} />
                              <Skeleton className={`${borderClasses} w-64 h-5`} />
                              <Skeleton className={`${borderClasses} w-56 h-5`} />
                              <Skeleton className={`${borderClasses} w-48 h-5`} />
                         </div>
                    </div>
                    <div>
                         <Skeleton className={`${borderClasses} w-40 h-8`} />
                         <Skeleton className={`${borderClasses} w-28 h-5`} />
                    </div>
                    <div className='flex items-center gap-x-4 pb-10'>
                         {buttonSkeletons.map((_, index) => (
                              <Skeleton
                                   key={index}
                                   className={`${borderClasses} w-40 h-12`}
                                   borderRadius={999}
                              />
                         ))}
                    </div>
               </div>
          </div>
     )
}

export default DetailCardSkeleton