import { FC } from "react";

interface TextInputProps {
     label: string
     placeholder: string
}

const TextInput: FC<TextInputProps> = ({ label, placeholder }) => {
     return (
          <div className="space-y-8">
               <h1 className="text-xl dark:text-light font-semibold">{label}</h1>
               <input type="text" placeholder={placeholder}
                    className="text-light dark:text-light font-poppins text-opacity-70 bg-transparent border 
                                   border-[#5E5A5A] w-full py-8 rounded-2xl px-10" />
          </div>
     );
}

export default TextInput;