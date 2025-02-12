import React from 'react'
import { CardStaggerAnimation, ContainerStaggerAnimation } from '../../animations/StaggerAnimation'
import { useQuery } from '@tanstack/react-query'
import { ProductCategoriesResponse } from '../../../types'
import { getProductCategories } from '../../../services/productService'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface CatalogCategoriesProps {
     onSelectCategory: (categoryId: number | null) => void
     selectedCategory: number | null
}

const CatalogCategories: React.FC<CatalogCategoriesProps> = ({
     onSelectCategory,
     selectedCategory
}) => {
     const { data: categoryData, isLoading } = useQuery<ProductCategoriesResponse>(['category'], getProductCategories)

     if (isLoading) return (
          <div className='flex flex-wrap items-center justify-start gap-3 mt-5 w-fit'>
               {[...Array(5)].map((_, index) => (
                    <Skeleton key={index} className='w-28 h-9 rounded-3xl border dark:border-graySurface2' />
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
                    <button
                         onClick={() => onSelectCategory(null)}
                         className={`${selectedCategory === null
                              ? 'bg-gradient-to-r from-yellowLinear1 to-yellowLinear2 text-light border-transparent'
                              : 'bg-transparent dark:bg-dark text-graySurface1 border-graySurface1'} 
                              border w-fit py-[5px] px-5 hover:dark:text-white rounded-full font-semibold
                              transition-all duration-300`}>
                         All
                    </button>
               </CardStaggerAnimation>
               {categoryData?.data.map((category) => {
                    const active = selectedCategory === category.id
                         ? 'bg-gradient-to-r from-yellowLinear1 to-yellowLinear2 text-light border-transparent'
                         : 'bg-transparent text-graySurface1 border-graySurface1'

                    return (
                         <CardStaggerAnimation
                              key={category.id}
                              hiddenPosition={{ x: -20 }}>
                              <button onClick={() => onSelectCategory(category.id)}
                                   className={`${active} border w-fit py-[5px] px-5 hover:dark:text-white
                                   rounded-full font-semibold font-inter transition-all duration-300`}>
                                   {category.attributes.name}
                              </button>
                         </CardStaggerAnimation>
                    )
               })}
          </ContainerStaggerAnimation>
     )
}

export default CatalogCategories