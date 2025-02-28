import AuthButtonSwitch from "../../../fragments/auth/AuthButtonSwitch";
import RegisForm from "./RegisForm";
import AuthModal from "../AuthModal";
import React from "react";


interface RegisterLayoutProps {
     isModalOpen: boolean;
     isModalClose: VoidFunction;
     onSwitchModal: VoidFunction;
     isAnimating: boolean;
     showPassword: boolean;
     handleTogglePassword: VoidFunction;
     showConfirmPass: boolean;
     handleToggleConfirmPass: VoidFunction;
}

const RegisterLayout: React.FC<RegisterLayoutProps> = React.memo(({
     isModalOpen,
     isModalClose,
     isAnimating,
     onSwitchModal,
     showPassword,
     handleTogglePassword,
     showConfirmPass,
     handleToggleConfirmPass
}) => {
     return (
          <AuthModal
               isAnimating={isAnimating}
               isOpen={isModalOpen}
               onClose={isModalClose}
               title="Step Into Your Space!"
               className="pb-10">
               <RegisForm
                    showPassword={showPassword}
                    handleTogglePassword={handleTogglePassword}
                    showConfirmPass={showConfirmPass}
                    handleToggleConfirmPass={handleToggleConfirmPass} />
               <AuthButtonSwitch
                    text="Already Have An Account?"
                    textBtn="Login"
                    onSwitchModal={onSwitchModal} />
          </AuthModal>
     );
})

export default RegisterLayout;