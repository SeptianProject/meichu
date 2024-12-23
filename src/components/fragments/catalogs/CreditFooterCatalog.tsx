import React from 'react'
import { assetItems } from '../../../assets/AnotherAssets'
type CreditFooterCatalogProps = {
     type: 'catalog' | 'profile'
}

const CreditFooterCatalog: React.FC<CreditFooterCatalogProps> = React.memo(({ type }) => {
     return (
          <div className='flex items-center justify-between'>
               <div className='flex items-center gap-x-2'>
                    <img className={`size-9 rounded-full
               ${type === 'catalog' ? 'md:size-12' : ''}`}
                         src={assetItems.AnyIcon} alt='' />
                    <div className='flex flex-col'>
                         <h4 className={`dark:text-light text-sm font-normal 
                    ${type === 'catalog' ? 'md:text-base' : ''}`}>
                              Credits
                         </h4>
                         <h4 className={`dark:text-light text-sm font-semibold
                         ${type === 'catalog' ? 'md:text-base' : ''}`}>
                              4.3
                         </h4>
                    </div>
               </div>
               <button className={`border border-[#5E5A5A] text-[#5E5A5A] font-inter w-fit
                    rounded-full text-sm transition-all duration-300 
                    dark:border-light dark:text-light hover:bg-bluePrimary hover:text-light
                    hover:border-transparent dark:hover:border-transparent dark:hover:bg-bluePrimary
                    ${type === 'catalog'
                         ? 'py-2 px-3 font-semibold md:px-5 md:py-3 md:text-sm'
                         : 'p-1'}`}>
                    Buy Now!
               </button>
          </div>
     )
})

export default CreditFooterCatalog