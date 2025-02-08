import React from "react"
import Skeleton from "react-loading-skeleton"
import useUI from "../../../hooks/useUI"

type CatalogCardPage = {
     type: 'homePage' | 'catalogPage'
}

const CatalogCardSkeleton: React.FC<CatalogCardPage> = ({ type }) => {
     const { screenSize } = useUI()
     const isMobile = screenSize === 'mobile'
     const isTablet = screenSize === 'tablet'
     const skeletonItems = Array.from({
          length: type === 'homePage' && !isMobile && !isTablet ? 3 : isMobile ? 1 : isTablet ? 2 : 3
     })

     return (
          <div className='flex flex-col items-center gap-y-10'>
               <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                    gap-6 lg:gap-4 w-full h-[24rem] lg:h-[28rem]'>
                    {skeletonItems.map((_, index) => (
                         <div key={index} className='relative h-[24rem] lg:h-[28rem] w-full'>
                              <Skeleton className='h-full w-full rounded-2xl border border-graySurface2' />
                              <Skeleton circle className='absolute top-5 right-5 size-12 border border-graySurface2' />
                              <div className='absolute top-5 left-5 flex flex-col gap-y-2'>
                                   <Skeleton className='w-48 h-[1.8rem] border border-graySurface2' />
                                   <Skeleton className='w-28 h-[1.2rem] border border-graySurface2' />
                              </div>
                              <Skeleton className='absolute top-24 -translate-x-1/2 left-1/2 border w-[90%] h-[13rem] lg:h-[16.5rem] border-graySurface2 rounded-xl' />
                              <Skeleton circle className='absolute bottom-4 left-5 size-12 border border-graySurface2' />
                              <div className='absolute bottom-3 left-20 flex flex-col gap-y-1'>
                                   <Skeleton className='w-24 h-[1.4rem] border border-graySurface2' />
                                   <Skeleton className='w-16 h-[0.8rem] border border-graySurface2' />
                              </div>
                              <Skeleton className='absolute right-5 bottom-5 w-32 h-[2.5rem] rounded-md border border-graySurface2' />
                         </div>
                    ))}
               </div>
               <Skeleton className='w-28 md:w-32 h-10 rounded-full border border-graySurface2' />
          </div>
     )
}

export default CatalogCardSkeleton