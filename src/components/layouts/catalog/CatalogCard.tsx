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
               p-2 pb-5 rounded-2xl h-full w-full hover:-translate-y-3
               transition-all duration-500
               ${type === 'catalog' ? 'md:p-5 xl:pb-10' : 'md:p-3'}`}>
               {/* Product name */}
               <div className='mt-2 flex items-center justify-between md:mt-0'>
                    <HeadProductCatalog type={type} />
               </div>
               {/* Profile */}
               <div className='flex items-center gap-x-2 my-2'>
                    <img className={`rounded-full size-7 cursor-pointer 
                    ${type === 'catalog' ? 'md:size-12' : ''}`}
                         src={assetItems.AnyIcon} alt="" />
                    <h4 className={`dark:text-light text-xs font-medium 
                    ${type === 'catalog' ? 'md:text-base' : ''}`}>
                         @Meichu
                    </h4>
               </div>
               {/* image content */}
               <div className='mt-3'>
                    <img className={`h-full object-cover object-center rounded-xl 
                    ${type === 'catalog'
                              ? 'md:rounded-2xl w-[20rem] md:w-full'
                              : 'h-36 sm:h-24 xl:h-40'}`}
                         src={mainProductBundle[4]} alt="Product" />
               </div>
               {/* more Button */}
               <div className='mt-5 flex items-center justify-between'>
                    <CreditCatalog type={type} />
                    <ButtonBuyCatalog type={type} />
               </div>
          </div>
     )
}

export default CatalogCard