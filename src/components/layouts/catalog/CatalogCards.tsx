import BtnBorderGradient from '../../elements/BtnBorderGradient'
import CardCatalog from '../../fragments/home/CardCatalog'

const CatalogCards = () => {
     return (
          <div className='flex flex-col items-center gap-y-10'>
               <div className='mt-12 grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 w-full'>
                    {/* Card catalog */}
                    <CardCatalog />
                    <CardCatalog />
                    <CardCatalog />
               </div>
               <BtnBorderGradient />
          </div>
     )
}

export default CatalogCards