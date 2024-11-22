import { useNavigate } from 'react-router-dom'
import { assetsImage, bestSellerImages } from '../../../assets/assets'
import ButtonBuyCatalog from '../../fragments/catalogs/ButtonBuyCatalog'
import CreditCatalog from '../../fragments/catalogs/CreditCatalog'
import HeadProductCatalog from '../../fragments/catalogs/HeadProductCatalog'

const CatalogCard = () => {
     const navigate = useNavigate()

     return (
          <div onClick={() => navigate('/catalog-detail')}
               className='bg-transparent border border-[#5E5A5A] dark:bg-[#302F35] 
               p-2 pb-5 rounded-2xl h-full md:p-5 xl:pb-10'>
               {/* Product name */}
               <div className='mt-2 flex items-center justify-between md:mt-0'>
                    <HeadProductCatalog />
               </div>
               {/* Profile */}
               <div className='flex items-center gap-x-2 my-2'>
                    <img className='rounded-full size-7 md:size-12'
                         src={assetsImage.BestSellerProfile} alt="" />
                    <h4 className='dark:text-light text-xs font-medium md:text-base'>
                         @Meichu
                    </h4>
               </div>
               {/* image content */}
               <div className='mt-3 md:mt-5'>
                    <img className='w-full h-24 sm:h-28 object-cover object-center rounded-xl 
                    md:rounded-2xl md:h-56 lg:h-48 xl:h-64'
                         src={bestSellerImages[1]} alt="Product" />
               </div>
               {/* more Button */}
               <div className='mt-5 flex items-center justify-between'>
                    <CreditCatalog />
                    <ButtonBuyCatalog />
               </div>
          </div>
     )
}

export default CatalogCard