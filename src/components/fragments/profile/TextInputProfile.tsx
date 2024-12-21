type TextInputProfileProps = {
     title: string
     value: string
     isEditing?: boolean
     onChange?: (e: string) => void
}

const TextInputProfile: React.FC<TextInputProfileProps> = ({
     title,
     value,
     isEditing = false,
     onChange
}) => {
     if (isEditing) {
          return (
               <div className="bg-grayPrimary/50 py-2 px-5 rounded-md">
                    <h2 className='text-lg font-semibold tracking-wide dark:text-light/70'>
                         {title}
                    </h2>
                    <input
                         type="text"
                         value={value}
                         onChange={(e) => onChange?.(e.target.value)}
                         placeholder={`Enter your ${title}`}
                         className='w-full bg-transparent text-[14px] font-light tracking-wide 
                         dark:text-light/60 lg:font-extralight focus:outline-none'
                    />
               </div>
          )
     }

     return (
          <div className='bg-grayPrimary/50 py-2 px-5 rounded-md'>
               <h2 className='text-lg font-semibold tracking-wide dark:text-light/70'>
                    {title}
               </h2>
               <p className='text-[14px] font-light tracking-wide 
               dark:text-light/60 lg:font-extralight'>
                    {value}
               </p>
          </div>
     )
}

export default TextInputProfile