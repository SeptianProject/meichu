import React from 'react'
import TextTagline from '../../fragments/home/TextTagline'
import CatalogCards from '../catalog/CatalogCards'
import CatalogCategories from '../catalog/CatalogCategories'

const CatalogLayout = () => {
     const [selectedCategory, setSelectedCategory] = React.useState<number | null>(null)

     return (
          <div className="min-h-full">
               <TextTagline
                    text="Catalog"
                    className='font-semibold'
               />
               <CatalogCategories
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
               />
               <CatalogCards
                    type='homePage'
                    selectedCategory={selectedCategory}
               />
          </div>
     )
}

export default CatalogLayout