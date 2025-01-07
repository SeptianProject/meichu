import React from "react";
import AuthLayout from "./AuthLayout";
import AuthInput from "../../fragments/auth/AuthInput";
import { FaUser } from "react-icons/fa";
import AuthHeading from "../../fragments/auth/AuthHeading";
import Button from "../../elements/buttons/Button";

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
               className="lg:min-h-[70vh] pb-20">
               <AuthHeading title="Forgot Your Password?" />
               <form
                    className="flex gap-y-8 flex-col w-full h-full max-w-60 items-center justify-center">
                    <div className="space-y-1">
                         <AuthInput
                              icon={FaUser}
                              type="email"
                              placeholder="Enter Your Email Address"
                              error={undefined}
                         />
                         <p className="text-dark dark:text-light/80 text-[12px] dark:font-extralight">
                              <span className="text-red-600 text-xl mr-1">*</span>
                              We will send you a message to set or reset your new password
                         </p>
                    </div>
                    <Button
                         isGradient
                         type="submit"
                         title="Submit"
                         onClick={() => console.log('Submit')}
                         className="w-full"
                    />
               </form>
          </AuthLayout>
     );
})

export default ForgotPasswordLayout;