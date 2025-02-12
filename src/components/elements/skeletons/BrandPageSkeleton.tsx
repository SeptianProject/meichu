import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import useUI from "../../../hooks/useUI"

const BrandPageSkeleton = () => {
     const { screenSize } = useUI()
     const isMobile = screenSize === 'mobile'
     const cardSkeletonItems = Array.from({ length: isMobile ? 1 : 3 })
     const badgeSkeletonItems = Array.from({ length: 4 })

     return (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
               {cardSkeletonItems.map((_, index) => (
                    <div key={index}
                         className="relative h-[30rem] lg:h-[25rem] xl:h-[32rem]">
                         <Skeleton className="w-full h-full rounded-2xl border dark:border-graySurface2" />
                         <div className="absolute bottom-7 z-10 left-5 flex flex-col gap-y-3">
                              <Skeleton className="w-48 h-[1.8rem] border dark:border-graySurface2" />
                              <Skeleton className="w-28 h-[1.2rem] border dark:border-graySurface2" />
                              <div className="flex items-center gap-x-2">
                                   {badgeSkeletonItems.map((_, index) => (
                                        <Skeleton key={index} className="size-12 border dark:border-graySurface2 rounded-full" />
                                   ))}
                              </div>
                         </div>
                    </div>
               ))}
          </div>
     )
}

export default BrandPageSkeleton