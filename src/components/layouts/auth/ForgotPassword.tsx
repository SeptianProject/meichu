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

const ForgotPasswordLayout: React.FC<ForgotPasswordLayoutProps> = React.memo(({
     isAnimating,
     isModalOpen,
     isModalClose
}) => {
     return (
          <AuthLayout
               isAnimating={isAnimating}
               isModalClose={isModalClose}
               isModalOpen={isModalOpen}
               className="min-h-[30vh] lg:min-h-[70vh]">
               <AuthHeading title="Forgot Your Password?" />
               <form
                    className="space-y-5 flex flex-col w-full h-full max-w-72 items-center justify-center ">
                    <AuthInput
                         icon={FaUser}
                         type="email"
                         placeholder="Enter Your Email Address"
                         error={undefined}
                    />
                    <p className="text-dark dark:text-light text-sm dark:font-light">
                         <span className="text-red-600 text-xl mr-1">*</span>
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
})

export default ForgotPasswordLayout;