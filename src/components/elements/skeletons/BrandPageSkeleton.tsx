import Skeleton from "react-loading-skeleton"

const BrandPageSkeleton = () => {
     const cardSkeletonItems = Array.from({ length: 3 })
     const badgeSkeletonItems = Array.from({ length: 4 })

     return (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
               {cardSkeletonItems.map((_, index) => (
                    <div key={index}
                         className="relative h-[30rem lg:h-[25rem] xl:h-[32rem]">
                         <Skeleton className="w-full h-full rounded-2xl border border-graySurface2" />
                         <div className="absolute bottom-7 z-10 left-5 flex flex-col gap-y-3">
                              <Skeleton className="w-48 h-[1.8rem] border border-graySurface2" />
                              <Skeleton className="w-28 h-[1.2rem] border border-graySurface2" />
                              <div className="flex items-center gap-x-2">
                                   {badgeSkeletonItems.map((_, index) => (
                                        <Skeleton key={index} className="size-12 border border-graySurface2 rounded-full" />
                                   ))}
                              </div>
                         </div>
                    </div>
               ))}
          </div>
     )
}

export default BrandPageSkeleton