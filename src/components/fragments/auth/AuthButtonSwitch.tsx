import React from "react";

interface AuthButtonSwitchProps {
     text: string;
     textBtn: string;
     onSwitchModal: () => void;
}

const AuthButtonSwitch: React.FC<AuthButtonSwitchProps> = React.memo(({
     text,
     textBtn,
     onSwitchModal
}) => {
     return (
          <div className="flex items-center gap-x-2 justify-center">
               <h4 className="dark:text-light/40 text-xs">{text}</h4>
               <button onClick={onSwitchModal}
                    className="underline-offset-2 underline text-transparent bg-clip-text bg-gradient-to-r from-yellowLinear1 to-yellowLinear2 text-sm font-medium">
                    {textBtn}
               </button>
          </div>
     );
})

export default AuthButtonSwitch;