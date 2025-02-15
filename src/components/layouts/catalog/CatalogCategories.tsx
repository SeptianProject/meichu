import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useProductCategory } from '../../../hooks/useQueryRequest'
import { CardStaggerAnimation, ContainerStaggerAnimation } from '../../animations/StaggerAnimation'
import 'react-loading-skeleton/dist/skeleton.css'

interface CatalogCategoriesProps {
     onSelectCategory: (categoryId: number | null) => void
     selectedCategory: number | null
}

const CatalogCategories: React.FC<CatalogCategoriesProps> = ({
     onSelectCategory,
     selectedCategory
}) => {
     const { data: categoryData, isLoading } = useProductCategory()

     if (isLoading) return (
          <div className='flex flex-wrap items-center justify-start gap-3 mt-5 w-fit'>
               {[...Array(5)].map((_, index) => (
                    <Skeleton key={index} className='w-28 h-9 rounded-3xl border dark:border-dark' />
               ))}
          </div>
     )

     return (
          <ContainerStaggerAnimation
               initialDelay={0.5}
               staggerDelay={0.2}
               className='flex flex-wrap items-center justify-start gap-3 mt-5 w-fit'>
               <CardStaggerAnimation
                    hiddenPosition={{ x: -20 }}>
                    <div className={`${selectedCategory === null
                         ? 'bg-gold rounded-full font-semibold p-[2px]'
                         : 'bg-transparent'} w-fit h-fit`}>
                         <button
                              onClick={() => onSelectCategory(null)}
                              className={`${selectedCategory === null
                                   ? 'bg-light dark:bg-dark text-yellowBloobs border-transparent'
                                   : 'bg-transparent text-graySurface1 border-graySurface1 border-2'}
                                   border-graySurface1 py-[6px] px-5 rounded-full`}>
                              All
                         </button>
                    </div>
               </CardStaggerAnimation>
               {categoryData?.data.map((category) => (
                    <CardStaggerAnimation
                         key={category.id}
                         hiddenPosition={{ x: -20 }}>
                         <div className={`${selectedCategory === category.id
                              ? 'bg-gold rounded-full font-semibold p-[2px]' : 'bg-transparent'} rounded-full w-fit h-fit`}>
                              <button onClick={() => onSelectCategory(category.id)}
                                   className={`${selectedCategory === category.id
                                        ? 'bg-light dark:bg-dark text-yellowBloobs border-transparent'
                                        : 'bg-transparent text-graySurface1 border-graySurface1 border-2'} 
                                             py-[6px] px-5 rounded-full`}>
                                   {category.attributes.name}
                              </button>
                         </div>
                    </CardStaggerAnimation>
               ))}
          </ContainerStaggerAnimation>
     )
}

export default CatalogCategories