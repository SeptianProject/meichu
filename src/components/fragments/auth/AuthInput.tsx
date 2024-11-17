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
          <div className="dark:bg-light border dark:border-gray-500
                              rounded-md flex items-center justify-between p-3 w-60">
               <div className="flex items-center gap-x-2">
                    <Icon className="size-fit text-[#626262]" />
                    <input
                         type={inputType}
                         name={name}
                         value={value}
                         placeholder={placeholder}
                         onChange={onChange}
                         className={`border-none outline-none
                         ${type === 'password' ? 'w-40' : 'w-44'}`} />
               </div>
               {type === 'password' && (
                    <button
                         type="button"
                         onClick={onTogglePassword}
                         className="cursor-pointer">
                         {showPassword ?
                              <IoEyeOutline className="size-6 text-[#626262]" /> :
                              <IoEyeOffOutline className="size-6 text-[#626262]" />}
                    </button>
               )}
          </div>
     );
}

export default AuthInput;