import React from "react";
import { IconType } from "react-icons";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

interface AuthInputProps {
     icon: IconType;
     placeholder: string;
     type: string;
     name: string;
     value?: string;
     onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
     showPassword?: boolean;
     onTogglePassword?: () => void;
}

const AuthInput: React.FC<AuthInputProps> = ({
     icon: Icon,
     placeholder,
     type,
     name,
     value,
     onChange,
     showPassword,
     onTogglePassword
}) => {
     const inputType = type === 'password' && showPassword ? 'text' : type;

     return (
          <div className="dark:bg-light border dark:border-gray-500 p-3 w-60
                              rounded-md flex items-center justify-between
                              lg:w-72 lg:rounded-xl">
               <div className="flex items-center gap-x-2">
                    <Icon className={`text-[#626262]
                         ${type === 'password' ? 'size-5' : 'size-fit'}`} />
                    <input
                         autoComplete="on"
                         type={inputType}
                         name={name}
                         value={value}
                         placeholder={placeholder}
                         onChange={onChange}
                         className={`border-none outline-none font-medium  
                              font-poppins placeholder:text-[12px] text-[12px]
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
                              <IoEyeOffOutline className="size-5 text-[#626262]" />
                              :
                              <IoEyeOutline className="size-5 text-[#626262]" />}
                    </button>
               )}
          </div>
     );
}

export default AuthInput;