import { useState } from 'react'
import { categories } from '../../../assets/assets'

const CatalogCategories = () => {
     const [onSelect, setOnSelect] = useState<string>('All')

     const handleSelect = (category: string) => {
          setOnSelect(category)
     }
     return (
          <div className='flex flex-wrap items-center justify-start gap-3 mt-5'>
               {categories.map((category, index) => {
                    const active = onSelect === category
                         ? 'bg-bluePrimary text-white border-transparent'
                         : 'bg-transparent dark:bg-blueDark text-[#5E5A5A] border-[#5E5A5A]'

                    return (
                         <button onClick={() => handleSelect(category)} key={index}
                              className={`${active} border w-fit py-1 px-5
                              rounded-full font-semibold font-inter transition-all duration-300`}>
                              {category}
                         </button>
                    )
               })}
          </div>
     )
}

export default CatalogCategories