import React from "react";
import { FieldError } from "react-hook-form";

interface TextInputProps {
     label: 'product' | 'user'
     type: React.InputHTMLAttributes<HTMLInputElement>['type']
     error: FieldError | undefined
}

const TextInput = React.memo(React.forwardRef<HTMLInputElement, TextInputProps>(({
     label,
     error,
     type,
     ...props
}, ref) => {
     return (
          <>
               <div className="space-y-8">
                    <h1 className="text-xl text-dark dark:text-light font-semibold">
                         {label === 'product' ? 'Name Your Product' : 'Enter Your Name'}
                    </h1>
                    <input
                         ref={ref}
                         autoComplete="on"
                         type={type}
                         placeholder={label === 'product'
                              ? 'E.G Redeemable T-Shirt With Logo'
                              : 'Ex: Septianzz'}
                         {...props}
                         className={`text-dark font-poppins ring-[1.5px] w-full py-8 rounded-2xl px-10 bg-transparent outline-none border-none 
                         dark:bg-[#191820] dark:text-light dark:text-opacity-70
                         transition-all duration-300 focus:ring-[2.5px]
                         ${error ? 'ring-redDanger' : 'ring-graySecondary'}`} />
                    {error && <p className="text-redDanger text-[12px] text-start">{error.message}</p>}
               </div>
          </>
     );
}))

export default TextInput;