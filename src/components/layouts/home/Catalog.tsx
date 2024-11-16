import TextTagline from '../../fragments/home/TextTagline'
import CatalogCards from '../catalogs/CatalogCards'
import CatalogCategories from '../catalogs/CatalogCategories'

const Catalog = () => {

     return (
          <div className="min-h-screen">
               <TextTagline text="Catalog" className='font-semibold' />
               <CatalogCategories />
               <CatalogCards />
          </div>
     )
}

export default Catalog