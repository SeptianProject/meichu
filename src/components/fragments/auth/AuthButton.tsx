import React from "react";

interface AuthButtonProps {
     text: string;
     onClick: () => void;
}

const AuthButton: React.FC<AuthButtonProps> = ({ text, onClick }) => {
     return (
          <button onClick={onClick}
               className={`w-full py-[10px] rounded-full text-light 
               font-semibold font-poppins border
               ${text === 'Login'
                         ? 'bg-[#312058] border-transparent'
                         : 'bg-transparent border-[#6A45BE]'}`}>
               {text}
          </button>
     );
}

export default AuthButton;