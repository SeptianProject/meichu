import React from "react"

type TextInputProfileProps = {
     title: string
     value: string
     isEditing?: boolean
     onChange?: (e: string) => void
}

const TextInputProfile: React.FC<TextInputProfileProps> = React.memo(({
     title,
     value,
     isEditing = false,
     onChange
}) => {
     if (isEditing) {
          return (
               <div className="bg-graySurface1/10 dark:bg-[#303033] p-3 lg:p-4 xl:p-5 rounded-md">
                    <h2 className='text-lg font-semibold tracking-wide dark:text-light/80'>
                         {title}
                    </h2>
                    <input
                         type="text"
                         value={value}
                         onChange={(e) => onChange?.(e.target.value)}
                         placeholder={`Enter your ${title.toLowerCase()}`}
                         className='w-full bg-transparent text-[14px] xl:text-[15px] font-light tracking-wide 
                         dark:text-light/60 focus:outline-none'
                    />
               </div>
          )
     }

     return (
          <div className='bg-graySurface1/10 dark:bg-[#303033] p-3 lg:p-4 xl:p-5 rounded-md'>
               <h2 className='text-lg font-semibold tracking-wide dark:text-graySurface1'>
                    {title}
               </h2>
               <p className='text-[14px] font-light tracking-wide
               xl:text-[15px] dark:text-light/60'>
                    {value}
               </p>
          </div>
     )
})

export default TextInputProfile