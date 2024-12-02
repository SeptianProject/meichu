import React from "react";

interface AuthButtonSwitchProps {
     text: string;
     textBtn: string;
     onSwitchModal: () => void;
}

const AuthButtonSwitch: React.FC<AuthButtonSwitchProps> = ({ text, textBtn, onSwitchModal }) => {
     return (
          <div className="flex items-center gap-x-2 justify-center">
               <h4 className="dark:text-light/40 text-xs">{text}</h4>
               <button onClick={onSwitchModal}
                    className="underline text-dark/80 dark:text-[#A78CE4] text-sm font-medium">
                    {textBtn}
               </button>
          </div>
     );
}

export default AuthButtonSwitch;