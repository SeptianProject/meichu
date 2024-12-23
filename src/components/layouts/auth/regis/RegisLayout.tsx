import AuthHeading from "../../../fragments/auth/AuthHeading";
import AuthButtonSwitch from "../../../fragments/auth/AuthButtonSwitch";
import RegisForm from "./RegisForm";
import AuthLayout from "../AuthLayout";
import React from "react";


interface RegisterLayoutProps {
     isModalOpen: boolean;
     isModalClose: () => void;
     onSwitchModal: () => void;
     isAnimating: boolean;
     showPassword: boolean;
     handleTogglePassword: () => void;
     showConfirmPass: boolean;
     handleToggleConfirmPass: () => void;
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
          <AuthLayout
               isAnimating={isAnimating}
               isModalClose={isModalClose}
               isModalOpen={isModalOpen}
               className="min-h-[65vh] lg:min-h-[85vh]">
               <AuthHeading title="Step Into Your Space!" />
               <RegisForm
                    onLogin={onSwitchModal}
                    showPassword={showPassword}
                    handleTogglePassword={handleTogglePassword}
                    showConfirmPass={showConfirmPass}
                    handleToggleConfirmPass={handleToggleConfirmPass} />
               <AuthButtonSwitch
                    text="Already Have An Account?"
                    textBtn="Login"
                    onSwitchModal={onSwitchModal} />
          </AuthLayout>
     );
})

export default RegisterLayout;