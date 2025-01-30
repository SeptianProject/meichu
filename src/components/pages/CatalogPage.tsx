import CatalogCards from "../layouts/catalog/CatalogCards"
import TextTagline from "../fragments/home/TextTagline"
import RouteHistory from "../layouts/RouteHistory"
import CatalogCategories from "../layouts/catalog/CatalogCategories"
import React from "react"

const CatalogPage = () => {
     const [selectedCategory, setSelectedCategory] = React.useState<number | null>(null)

     return (
          <section className='px-7 space-y-10 lg:px-20 relative'>
               <RouteHistory currentRoute="/catalog" currentText="Catalog" />
               <div className="">
                    <TextTagline
                         text="Catalog"
                         className="font-semibold"
                    />
                    <CatalogCategories
                         onSelectCategory={setSelectedCategory}
                         selectedCategory={selectedCategory}
                    />
                    <CatalogCards
                         type="catalogPage"
                         selectedCategory={selectedCategory}
                    />
               </div>
          </section>
     )
}

export default CatalogPage