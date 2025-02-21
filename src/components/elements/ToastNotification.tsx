import { toast, Toast, ToastOptions } from 'react-hot-toast'
import { FaHeart } from 'react-icons/fa'

interface ToastProps {
     isLiked: boolean
     productTitle?: string
     onClick?: VoidFunction
}

const defaultToastOptions: ToastOptions = {
     duration: 2000,
     position: 'bottom-left',
     style: {
          background: '#333',
          color: '#fff',
          padding: '16px 20px',
          borderRadius: '8px',
     }
}

export const showActionToast = ({ isLiked, productTitle, onClick }: ToastProps) => {
     const message = isLiked ? `Liked ${productTitle || 'item'} Product!`
          : `Unliked ${productTitle || 'item'} Product`

     const icon = isLiked ? <FaHeart className='text-red-500 size-5' />
          : <FaHeart className='text-[#5E5A5A] size-5' />

     toast.custom(
          (t: Toast) => (
               <div
                    onClick={onClick}
                    className={`${t.visible ? 'animate-enter' : 'custom-leave'} cursor-pointer
               flex items-center gap-3 bg-[#f1f1f1] dark:bg-[#212121] px-5 py-3 shadow-lg rounded-lg
               transition-all duration-300`}>
                    {icon}
                    <p className='text-dark dark:text-white/70 text-sm md:text-base font-medium'>
                         {message}
                    </p>
               </div>
          ),
          defaultToastOptions
     )
}