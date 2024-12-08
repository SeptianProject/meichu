import React from 'react'
import { assetItems } from '../../../assets/AnotherAssets'
type CreditCatalogProps = {
     type: 'catalog' | 'profile'
}

const CreditCatalog: React.FC<CreditCatalogProps> = ({ type }) => {
     return (
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
     )
}

export default CreditCatalog