import useUI from "../../../hooks/useUI"
import TextTagline from "../../fragments/home/TextTagline"
import 'react-loading-skeleton/dist/skeleton.css'
import useThemeAwareSkeleton from "../../../hooks/useThemeAwareSkeleton"

const BestSellerSkeleton = () => {
     const { ThemeAwareSkeleton } = useThemeAwareSkeleton()
     const { screenSize } = useUI()
     const isMobile = screenSize === 'mobile'
     const isTablet = screenSize === 'tablet'
     const skeletonItems = Array.from({ length: isMobile ? 1 : isTablet ? 2 : 3 })

     return (
          <div className="relative">
               <TextTagline text="Best Seller" className='font-semibold' />
               <div className='my-10 flex gap-x-6'>
                    {skeletonItems.map((_, index) => (
                         <div key={index} className='w-full relative h-[22rem]'>
                              <ThemeAwareSkeleton className="rounded-3xl w-full h-full border dark:border-graySurface2" />
                              <ThemeAwareSkeleton circle className="absolute border dark:border-graySurface2 size-16 top-7 left-7" />
                              <div className="absolute top-7 left-28 flex flex-col gap-y-2">
                                   <ThemeAwareSkeleton className="border dark:border-graySurface2 w-48 h-[1.8rem]" />
                                   <ThemeAwareSkeleton className="border dark:border-graySurface2 w-28 h-[1.2rem]" />
                              </div>
                              <div className="absolute top-28 left-7 grid grid-flow-col grid-cols-3 grid-rows-2 gap-2">
                                   {[...Array(2)].map((_, index) => (
                                        <ThemeAwareSkeleton key={index} className="border dark:border-graySurface2 size-20 rounded-xl" />
                                   ))}
                                   <ThemeAwareSkeleton className="absolute border dark:border-graySurface2 w-60 md:w-48 xl:w-60 h-[10.8rem] rounded-xl" />
                              </div>
                              <ThemeAwareSkeleton className="absolute bottom-3 left-7 border dark:border-graySurface2 w-48 h-[1.8rem]" />
                         </div>
                    ))}
               </div>
          </div>
     )
}

export default BestSellerSkeleton