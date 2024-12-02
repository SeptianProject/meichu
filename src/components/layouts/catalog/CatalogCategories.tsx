import { useState } from 'react'
import { categories } from '../../../assets/assets'
import { CardStaggerAnimation, ContainerStaggerAnimation } from '../../../animations/StaggerAnimation'

const CatalogCategories = () => {
     const [onSelect, setOnSelect] = useState<string>('All')

     const handleSelect = (category: string) => {
          setOnSelect(category)
     }

     return (
          <ContainerStaggerAnimation
               initialDelay={0.5}
               staggerDelay={0.2}
               className='flex flex-wrap items-center justify-start gap-3 mt-5 w-fit'>
               {categories.map((category, index) => {
                    const active = onSelect === category
                         ? 'bg-bluePrimary text-white border-transparent'
                         : 'bg-transparent dark:bg-blueDark text-[#5E5A5A] border-[#5E5A5A]'

                    return (
                         <CardStaggerAnimation
                              key={index}
                              hiddenPosition={{ x: -50 }}>
                              <button onClick={() => handleSelect(category)}
                                   className={`${active} border w-fit py-1 px-5  hover:border-transparent 
                                   rounded-full font-semibold font-inter transition-all duration-300 
                                   hover:bg-bluePrimary dark:hover:bg-bluePrimary hover:text-white`}>
                                   {category}
                              </button>
                         </CardStaggerAnimation>
                    )
               })}
          </ContainerStaggerAnimation>
     )
}

export default CatalogCategories