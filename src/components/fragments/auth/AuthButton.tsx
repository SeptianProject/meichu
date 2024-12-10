import React from "react";

interface AuthButtonProps {
     text: string;
     onClick?: () => void;
     type: 'submit' | 'button' | 'reset';
}

const AuthButton: React.FC<AuthButtonProps> = ({
     text, onClick, type = "button"
}) => {
     return (
          <button
               type={type}
               onClick={onClick}
               className={`w-full py-[8px] rounded-full 
               font-semibold font-poppins border
               transition-all duration-300
               ${text === 'Login' || text === 'Submit'
                         ? 'bg-purplePrimary border-transparent text-light hover:bg-purplePrimary/80'
                         : 'bg-transparent border-[#6A45BE] text-[#6A45BE] hover:text-light dark:text-light hover:bg-purplePrimary hover:border-transparent'}`}>
               {text}
          </button>
     );
}

export default AuthButton;