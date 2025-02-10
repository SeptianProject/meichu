import useThemeAwareSkeleton from "../../../hooks/useThemeAwareSkeleton"

const BrandPageSkeleton = () => {
     const { ThemeAwareSkeleton } = useThemeAwareSkeleton()
     const cardSkeletonItems = Array.from({ length: 3 })
     const badgeSkeletonItems = Array.from({ length: 4 })

     return (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
               {cardSkeletonItems.map((_, index) => (
                    <div key={index}
                         className="relative h-[30rem lg:h-[25rem] xl:h-[32rem]">
                         <ThemeAwareSkeleton className="w-full h-full rounded-2xl border dark:border-graySurface2" />
                         <div className="absolute bottom-7 z-10 left-5 flex flex-col gap-y-3">
                              <ThemeAwareSkeleton className="w-48 h-[1.8rem] border dark:border-graySurface2" />
                              <ThemeAwareSkeleton className="w-28 h-[1.2rem] border dark:border-graySurface2" />
                              <div className="flex items-center gap-x-2">
                                   {badgeSkeletonItems.map((_, index) => (
                                        <ThemeAwareSkeleton key={index} className="size-12 border dark:border-graySurface2 rounded-full" />
                                   ))}
                              </div>
                         </div>
                    </div>
               ))}
          </div>
     )
}

export default BrandPageSkeleton