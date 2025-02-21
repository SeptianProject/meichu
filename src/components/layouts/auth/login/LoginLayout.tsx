import LoginForm from "./LoginForm.tsx";
import AuthModal from "../AuthModal.tsx";
import AuthButtonSwitch from "../../../fragments/auth/AuthButtonSwitch.tsx";
import React from "react";

interface LoginLayoutProps {
     isModalOpen: boolean;
     isModalClose: VoidFunction;
     onSwitchModal: VoidFunction;
     isAnimating: boolean;
     showPassword: boolean;
     handleTogglePassword: VoidFunction;
     onForgotPassword: VoidFunction;
}

const LoginLayout: React.FC<LoginLayoutProps> = React.memo(({
     isModalOpen,
     isModalClose,
     isAnimating,
     showPassword,
     handleTogglePassword,
     onForgotPassword,
     onSwitchModal
}) => {
     return (
          <AuthModal
               isOpen={isModalOpen}
               onClose={isModalClose}
               isAnimating={isAnimating}
               title="Reconnect and Explore!"
               className="lg:min-h-[85vh]">
               <LoginForm
                    onForgotPassword={onForgotPassword}
                    showPassword={showPassword}
                    handleTogglePassword={handleTogglePassword} />
               <AuthButtonSwitch
                    text="Create An Account"
                    textBtn="Sign Up"
                    onSwitchModal={onSwitchModal} />
          </AuthModal>
     )
})

export default LoginLayout