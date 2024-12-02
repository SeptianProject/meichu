import React, { forwardRef } from "react";
import { IconType } from "react-icons";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

interface AuthInputProps {
     icon: IconType;
     placeholder: string;
     type: string;
     name?: string;
     value?: string;
     onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
     showPassword?: boolean;
     onTogglePassword?: () => void;
}

const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(({
     icon: Icon,
     placeholder,
     type,
     name,
     value,
     onChange,
     showPassword,
     onTogglePassword
}, ref) => {
     const inputType = type === 'password' && showPassword ? 'text' : type;

     return (
          <div className="text-dark border-dark p-3 w-60 border rounded-md
                    flex items-center justify-between
                    dark:bg-light dark:border-gray-500
                    lg:w-72 lg:rounded-xl">
               <div className="flex items-center gap-x-2">
                    <Icon className={`text-[#626262]
                              ${type === 'password' ? 'size-5' : 'size-fit'}`} />
                    <input
                         ref={ref}
                         autoComplete="on"
                         type={inputType}
                         name={name}
                         value={value}
                         placeholder={placeholder}
                         onChange={onChange}
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
     );

})
// const AuthInput: React.FC<AuthInputProps> = ({
//      icon: Icon,
//      placeholder,
//      type,
//      name,
//      value,
//      onChange,
//      showPassword,
//      onTogglePassword
// }) => {
//      const inputType = type === 'password' && showPassword ? 'text' : type;

//      return (
//           <div className="text-dark border-dark p-3 w-60 border rounded-md 
//                flex items-center justify-between     
//                dark:bg-light dark:border-gray-500
//                lg:w-72 lg:rounded-xl">
//                <div className="flex items-center gap-x-2">
//                     <Icon className={`text-[#626262]
//                          ${type === 'password' ? 'size-5' : 'size-fit'}`} />
//                     <input
//                          autoComplete="on"
//                          type={inputType}
//                          name={name}
//                          value={value}
//                          placeholder={placeholder}
//                          onChange={onChange}
//                          className={`border-none outline-none font-medium  
//                               font-poppins placeholder:text-[12px] text-[12px]
//                               text-dark/90 placeholder:text-dark/80
//                               dark:placeholder:text-dark/50 dark:text-dark/70 
//                               bg-transparent dark:selection:text-light dark:selection:bg-blueDark
//                               ${type === 'password' ? 'w-40 lg:w-52' : 'w-44 lg:w-56'}`} />
//                </div>
//                {type === 'password' && (
//                     <button
//                          type="button"
//                          onClick={onTogglePassword}
//                          className="cursor-pointer">
//                          {showPassword ?
//                               <IoEyeOffOutline className="size-5 text-dark dark:text-[#626262]" />
//                               :
//                               <IoEyeOutline className="size-5 text-dark dark:text-[#626262]" />}
//                     </button>
//                )}
//           </div>
//      );
// }

export default AuthInput;