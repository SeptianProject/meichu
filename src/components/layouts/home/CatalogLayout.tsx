import TextTagline from '../../fragments/home/TextTagline'
import CatalogCards from '../catalog/CatalogCards'
import CatalogCategories from '../catalog/CatalogCategories'

const CatalogLayout = () => {

     return (
          <div className="min-h-full">
               <TextTagline text="Catalog" className='font-semibold' />
               <CatalogCategories />
               <CatalogCards />
          </div>
     )
}

export default CatalogLayout