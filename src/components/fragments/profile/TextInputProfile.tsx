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
               <div className="bg-graySurface1/10 dark:bg-[#303033] p-4 md:p-5 rounded-md">
                    <h2 className='text-lg font-semibold tracking-wide dark:text-light/80'>
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
          <div className='bg-graySurface1/10 dark:bg-[#303033] p-4 md:p-5 rounded-md'>
               <h2 className='text-lg font-semibold tracking-wide dark:text-graySurface1'>
                    {title}
               </h2>
               <p className='text-[14px] font-light tracking-wide 
               dark:text-light/60 md:font-extralight'>
                    {value}
               </p>
          </div>
     )
})

export default TextInputProfile