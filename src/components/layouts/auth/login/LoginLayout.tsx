import AuthHeading from "../../../fragments/auth/AuthHeading.tsx";
import LoginForm from "./LoginForm.tsx";
import AuthLayout from "../AuthLayout.tsx";
import AuthButtonSwitch from "../../../fragments/auth/AuthButtonSwitch.tsx";
import React from "react";

interface LoginLayoutProps {
     isModalOpen: boolean;
     isModalClose: () => void;
     onSwitchModal: () => void;
     isAnimating: boolean;
     showPassword: boolean;
     handleTogglePassword: () => void;
     onForgotPassword: () => void;
     onProfile: () => void;
}

const LoginLayout: React.FC<LoginLayoutProps> = React.memo(({
     isModalOpen,
     isModalClose,
     isAnimating,
     onProfile,
     showPassword,
     handleTogglePassword,
     onForgotPassword,
     onSwitchModal
}) => {
     return (
          <AuthLayout
               isAnimating={isAnimating}
               isModalClose={isModalClose}
               isModalOpen={isModalOpen}
               className="lg:min-h-[85vh]">
               <AuthHeading title="Reconnect and Explore!" />
               <LoginForm
                    onForgotPassword={onForgotPassword}
                    onProfile={onProfile}
                    showPassword={showPassword}
                    handleTogglePassword={handleTogglePassword} />
               <AuthButtonSwitch
                    text="Create An Account"
                    textBtn="Sign Up"
                    onSwitchModal={onSwitchModal} />
          </AuthLayout>
     )
})

export default LoginLayout