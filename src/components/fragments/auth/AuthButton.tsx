import React from "react";

interface AuthButtonProps {
     text: string;
     onClick: () => void;
}

const AuthButton: React.FC<AuthButtonProps> = ({ text, onClick }) => {
     return (
          <button onClick={onClick}
               className="w-full py-3 bg-[#312058] rounded-full text-light 
               font-semibold font-poppins">
               {text}
          </button>
     );
}

export default AuthButton;