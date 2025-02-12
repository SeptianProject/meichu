import React, { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
     icon: IconType;
     placeholder: string;
     type: InputHTMLAttributes<HTMLInputElement>['type'];
     showPassword?: boolean;
     onTogglePassword?: VoidFunction;
     error: FieldError | undefined
}

const AuthInput = React.memo(React.forwardRef<HTMLInputElement, AuthInputProps>(({
     icon: Icon,
     placeholder,
     type,
     showPassword,
     onTogglePassword,
     error,
     ...props
}, ref) => {
     const inputType = type === 'password' && showPassword ? 'text' : type;

     return (
          <>
               <div className={`text-dark p-3 w-60 ring-[0.8px] dark:ring-2 rounded-lg
                    flex items-center justify-between dark:bg-light lg:w-full
                    transition-all duration-300
                    ${error ? 'ring-redDanger' : 'ring-dark dark:ring-graySecondary'}`}>
                    <div className="flex items-center gap-x-2">
                         <Icon className={`text-[#626262]
                              ${type === 'password' ? 'size-5' : 'size-fit'}`} />
                         <input
                              ref={ref}
                              autoComplete="on"
                              type={inputType}
                              placeholder={placeholder}
                              {...props}
                              className={`border-none outline-none font-medium
                                   font-poppins placeholder:text-[12px] text-[12px]
                                   text-dark/90 placeholder:text-dark/80
                                   dark:placeholder:text-dark/50 dark:text-dark/70
                                   bg-transparent dark:selection:text-light dark:selection:bg-blueDark
                                   ${type === 'password' ? 'w-40 lg:w-52' : 'w-44 lg:w-56'}`} />
                    </div>
                    {type === 'password' && (
                         <button
                              type="button"
                              onClick={onTogglePassword}
                              className="cursor-pointer">
                              {showPassword ?
                                   <IoEyeOffOutline className="size-5 text-dark dark:text-[#626262]" />
                                   :
                                   <IoEyeOutline className="size-5 text-dark dark:text-[#626262]" />}
                         </button>
                    )}
               </div>
               {error && (
                    <p className="text-redDanger text-[12px] text-start">{error.message}</p>
               )}
          </>
     );

}))

export default AuthInput;