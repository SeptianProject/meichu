import { assetsImage } from '../../../assets/assets'

const CreditCatalog = () => {
     return (
          <div className='flex items-center gap-x-2'>
               <img className='size-6 sm:size-7 rounded-full md:size-12'
                    src={assetsImage.BundleProduct} alt='' />
               <div className='flex flex-col'>
                    <h4 className='dark:text-light text-[12px] sm:text-xs font-normal 
                    md:text-base'>
                         Credits
                    </h4>
                    <h4 className='dark:text-light text-xs font-semibold md:text-base'>
                         4.3
                    </h4>
               </div>
          </div>
     )
}

export default CreditCatalog