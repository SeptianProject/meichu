import React from "react";

interface BtnForgotPasswordProps {
     onClick: () => void;
}

const BtnForgotPassword: React.FC<BtnForgotPasswordProps> = ({ onClick }) => {
     return (
          <button
               onClick={onClick}
               className="text-dark/80 dark:text-[#A78CE4] 
                         text-xs lg:text-sm font-medium">
               Forgot Password?
          </button>
     );
}

export default BtnForgotPassword;