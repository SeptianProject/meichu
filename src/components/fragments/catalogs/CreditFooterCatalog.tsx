import React from 'react'
import { assetItems } from '../../../assets/AnotherAssets'

type CreditFooterCatalogProps = {
     isFavored?: boolean
}

const CreditFooterCatalog: React.FC<CreditFooterCatalogProps> = React.memo(({ isFavored }) => {
     return (
          <div className='flex items-center justify-between'>
               <div className='flex items-center gap-x-2'>
                    <img className={`${isFavored ? 'size-7 md:size-9' : 'size-9'}`}
                         src={assetItems.ImvuIcon} alt='' />
                    <div className='flex flex-col'>
                         <h4 className={`text-graySurface1 dark:text-light font-medium
                              ${isFavored ? 'text-sm md:text-base' : 'text-base'}`}>
                              Credits
                         </h4>
                         <h4 className={`text-graySurface1 dark:text-light font-semibold
                              ${isFavored ? 'text-sm md:text-base' : 'text-base'}`}>
                              4.3
                         </h4>
                    </div>
               </div>
               <button className={`border border-[#5E5A5A] text-[#5E5A5A] font-inter w-fit
                    px-3 py-2 rounded-full text-sm transition-all duration-300 
                    dark:border-light dark:text-light hover:bg-bluePrimary hover:text-light
                    hover:border-transparent dark:hover:border-transparent dark:hover:bg-bluePrimary
                    ${isFavored ? '' : ' font-semibold md:px-12 md:py-[10px]'}`}>
                    Buy Now!
               </button>
          </div>
     )
})

export default CreditFooterCatalog