import React from 'react'
import { CardStaggerAnimation, ContainerStaggerAnimation } from '../../animations/StaggerAnimation'
import { useQuery } from '@tanstack/react-query'
import { ProductCategoriesResponse } from '../../../types'
import { getProductCategories } from '../../../services/ProductService'

const CatalogCategories = () => {
     const [onSelect, setOnSelect] = React.useState<number | null>(null)
     const { data: categoryData } = useQuery<ProductCategoriesResponse>(
          ['category'], getProductCategories
     )

     return (
          <ContainerStaggerAnimation
               initialDelay={0.5}
               staggerDelay={0.2}
               className='flex flex-wrap items-center justify-start gap-3 mt-5 w-fit'>
               {categoryData?.data.map((category, index) => {
                    const active = onSelect === category.id
                         ? 'bg-gradient-to-r from-yellowLinear1 to-yellowLinear2 text-light border-transparent'
                         : 'bg-transparent dark:bg-dark text-graySurface1 border-graySurface1'

                    return (
                         <CardStaggerAnimation
                              key={index}
                              hiddenPosition={{ x: -50 }}>
                              <button onClick={() => setOnSelect(category.id)}
                                   className={`${active} border w-fit py-1 px-5 hover:text-white
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