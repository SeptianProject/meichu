import CatalogCategories from "../layouts/catalogs/CatalogCategories"
import CatalogCards from "../layouts/catalogs/CatalogCards"
import TextTagline from "../fragments/home/TextTagline"
import RouteHistory from "../layouts/RouteHistory"


const CatalogPage = () => {
     return (
          <section className='px-7 space-y-10 lg:px-20'>
               {/* Route History */}
               <RouteHistory currentRoute="/catalog" currentText="Catalog" />
               {/* main */}
               <div className="">
                    <TextTagline text="Catalog" className="font-semibold" />
                    <CatalogCategories />
                    <CatalogCards />
               </div>
          </section>
     )
}

export default CatalogPage