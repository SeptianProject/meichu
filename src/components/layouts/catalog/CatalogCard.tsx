import React from 'react'
import HeaderProductCatalog from '../../fragments/catalogs/HeaderProductCatalog'
import { useNavigate } from 'react-router-dom'
import ImageContentCatalog from '../../fragments/catalogs/ImageContentCatalog'
import CreditFooterCatalog from '../../fragments/catalogs/CreditFooterCatalog'

type CatalogCardProps = {
     type: 'catalog' | 'profile'
}

const CatalogCard: React.FC<CatalogCardProps> = React.memo(({ type }) => {
     const navigate = useNavigate()

     return (
          <div
               onClick={type === 'catalog' ? () => navigate('/catalog-detail') : undefined}
               className={`bg-transparent border border-[#5E5A5A] 
               dark:bg-cardBackground dark:border-transparent cursor-pointer
               p-5 rounded-2xl h-full w-full hover:-translate-y-3
               transition-all duration-500
               ${type === 'catalog' ? 'md:p-5' : 'md:p-3'}`}>
               <HeaderProductCatalog type={type} />
               <ImageContentCatalog type={type} />
               <CreditFooterCatalog type={type} />
          </div>
     )
})

export default CatalogCard