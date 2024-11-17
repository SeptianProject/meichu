import React from "react";

interface AuthButtonSwitchProps {
     text: string;
     textBtn: string;
     onSwitchModal: () => void;
}

const AuthButtonSwitch: React.FC<AuthButtonSwitchProps> = ({ text, textBtn, onSwitchModal }) => {
     return (
          <div className="flex items-center gap-x-3 justify-center">
               <h4 className="dark:text-light/40 text-sm">
                    {text}
               </h4>
               <button onClick={onSwitchModal}
                    className="underline text-[#A78CE4]">
                    {textBtn}
               </button>
          </div>
     );
}

export default AuthButtonSwitch;