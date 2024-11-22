import React from "react";

interface AuthButtonProps {
     text: string;
     onClick: () => void;
}

const AuthButton: React.FC<AuthButtonProps> = ({ text, onClick }) => {
     return (
          <button type="button" onClick={onClick}
               className={`w-full py-[10px] rounded-full 
               font-semibold font-poppins border
               ${text === 'Login'
                         ? 'bg-[#312058] border-transparent text-light'
                         : 'bg-transparent border-[#6A45BE] text-[#6A45BE] dark:text-light'}`}>
               {text}
          </button>
     );
}

export default AuthButton;