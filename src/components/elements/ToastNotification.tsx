import { toast, Toast, ToastOptions } from 'react-hot-toast'
import { FaHeart } from 'react-icons/fa'

interface ToastProps {
     isLiked: boolean
     productTitle?: string
     onClick?: VoidFunction
}

const defaultToastOptions: ToastOptions = {
     duration: 3000,
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
                    className={`${t.visible ? 'animate-enter' : 'animate-leave'}
               flex items-center gap-3 bg-[#C4C4C4] dark:bg-[#333] px-5 py-3 shadow-lg rounded-lg`}>
                    {icon}
                    <p className='text-dark dark:text-white/60 font-medium'>
                         {message}
                    </p>
               </div>
          ),
          defaultToastOptions
     )
}