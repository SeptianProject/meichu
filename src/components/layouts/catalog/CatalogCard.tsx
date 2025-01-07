import React from 'react'
import HeaderProductCatalog from '../../fragments/catalogs/HeaderProductCatalog'
import { useNavigate } from 'react-router-dom'
import CreditFooterCatalog from '../../fragments/catalogs/CreditFooterCatalog'
import { mainProductBundle } from '../../../assets/meichuBundle'

type CatalogCardProps = {
     isFavored?: boolean
}

const CatalogCard: React.FC<CatalogCardProps> = React.memo(({ isFavored }) => {
     const navigate = useNavigate()

     return (
          <div
               onClick={isFavored ? undefined : () => navigate('/catalog-detail')}
               className={`bg-transparent border border-graySurface1 rounded-2xl 
               h-full w-full cursor-pointer dark:border-transparent dark:bg-cardBackground
               hover:-translate-y-3 transition-all duration-500 ${isFavored ? 'p-3' : 'p-5'}`}>
               <HeaderProductCatalog isFavored={isFavored} />
               <div className='my-5'>
                    <img className={`object-cover object-top w-full rounded-2xl  
                    ${isFavored ? 'h-36 sm:h-44' : 'h-52 lg:h-80'}`}
                         src={mainProductBundle[2]} alt="Product" />
               </div>
               <CreditFooterCatalog isFavored={isFavored} />
          </div>
     )
})

export default CatalogCard