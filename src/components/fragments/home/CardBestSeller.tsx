import { useNavigate } from "react-router-dom"
import { assetItems } from "../../../assets/AnotherAssets"
import { butterflyBundle } from "../../../assets/meichuBundle"


const CardBestSeller = () => {
     const navigate = useNavigate()

     return (
          <div
               onClick={() => navigate('/catalog-detail')}
               className='bg-transparent border border-graySurface1 dark:border-transparent
               dark:bg-cardBackground bg-opacity-50 w-full p-5 
               rounded-3xl flex flex-col items-start gap-y-5 cursor-pointer
               hover:-translate-y-3 transition-all duration-500 h-[21rem]'>
               {/* photo & typograph */}
               <div className='flex items-center gap-x-4'>
                    <img className='rounded-full size-14'
                         src={assetItems.AnyIcon} alt="" />
                    <div className='flex flex-col items-start'>
                         <h3 className='text-graySurface1 dark:text-light text-lg font-bold'>Name Product</h3>
                         <h6 className='text-graySurface1 dark:text-light text-base'>@meichu</h6>
                    </div>
               </div>
               <div className='w-full h-44 grid grid-cols-3 grid-rows-2 gap-2'>
                    {butterflyBundle.map((img, index) => {
                         const gridApply = index === 1 ? 'col-span-2 row-span-2' : ''
                         return (
                              <img key={index} src={img} alt={`Best-${index}`}
                                   className={`${gridApply} size-full object-cover 
                                             object-center rounded-2xl`} />
                         )
                    })}
               </div>
               <div>
                    <h3 className='dark:text-light font-semibold text-lg'>Nama Collection</h3>
               </div>
          </div>
     )
}

export default CardBestSeller