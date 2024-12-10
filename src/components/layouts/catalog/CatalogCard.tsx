import React from 'react'
import ButtonBuyCatalog from '../../fragments/catalogs/ButtonBuyCatalog'
import CreditCatalog from '../../fragments/catalogs/CreditCatalog'
import HeadProductCatalog from '../../fragments/catalogs/HeadProductCatalog'
import { assetItems } from '../../../assets/AnotherAssets'
import { mainProductBundle } from '../../../assets/meichuBundle'

type CatalogCardProps = {
     type: 'catalog' | 'profile'
}

const CatalogCard: React.FC<CatalogCardProps> = ({ type }) => {

     return (
          <div className={`bg-transparent border border-[#5E5A5A] 
               dark:bg-[#302F35] dark:border-transparent
               p-5 rounded-2xl h-full w-full hover:-translate-y-3
               transition-all duration-500
               ${type === 'catalog' ? 'md:p-5 xl:pb-10' : 'md:p-3'}`}>
               <HeadProductCatalog type={type} />
               {/* Profile */}
               <div className='flex items-center gap-x-2 my-2'>
                    <img className={`rounded-full size-9 cursor-pointer 
                    ${type === 'catalog' ? 'md:size-12' : ''}`}
                         src={assetItems.AnyIcon} alt="" />
                    <h4 className={`dark:text-light text-sm font-medium
                    ${type === 'catalog' ? 'md:text-base' : ''}`}>
                         @Meichu
                    </h4>
               </div>
               {/* image content */}
               <div className='my-5'>
                    <img className={`object-cover object-top rounded-xl 
                    ${type === 'catalog'
                              ? 'md:rounded-2xl w-full h-52 lg:h-80'
                              : 'w-60 h-40 xl:h-56'}`}
                         src={mainProductBundle[2]} alt="Product" />
               </div>
               {/* more Button */}
               <div className='flex items-center justify-between'>
                    <CreditCatalog type={type} />
                    <ButtonBuyCatalog type={type} />
               </div>
          </div>
     )
}

export default CatalogCard