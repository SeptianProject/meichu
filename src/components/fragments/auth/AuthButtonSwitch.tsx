import React from "react";

interface AuthButtonSwitchProps {
     text: string;
     textBtn: string;
     onSwitchModal: VoidFunction;
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
                    className="bg-gold text-transparent bg-clip-text text-sm font-medium">
                    {textBtn}
               </button>
          </div>
     );
})

export default AuthButtonSwitch;