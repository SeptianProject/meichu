import React from "react";
import AuthLayout from "./AuthLayout";
import AuthInput from "../../fragments/auth/AuthInput";
import { FaUser } from "react-icons/fa";
import AuthHeading from "../../fragments/auth/AuthHeading";
import AuthButton from "../../fragments/auth/AuthButton";

interface ForgotPasswordLayoutProps {
     isAnimating: boolean;
     isModalOpen: boolean;
     isModalClose: () => void;
}

const ForgotPasswordLayout: React.FC<ForgotPasswordLayoutProps> = ({
     isAnimating,
     isModalOpen,
     isModalClose
}) => {
     return (
          <AuthLayout
               isAnimating={isAnimating}
               isModalClose={isModalClose}
               isModalOpen={isModalOpen}
               className="min-h-[40vh]">
               <AuthHeading title="Forgot Your Password" />
               <form className="space-y-5 ">
                    <AuthInput
                         icon={FaUser}
                         type="email"
                         placeholder="Enter Your Email Address" />
                    <p className="text-white text-sm font-light">
                         <span className="text-red-600">*</span>
                         We will send you a message to set or reset your new password
                    </p>
                    <AuthButton
                         type="button"
                         text="Submit"
                         onClick={() => console.log('Submit')}
                    />
               </form>
          </AuthLayout>
     );
}

export default ForgotPasswordLayout;