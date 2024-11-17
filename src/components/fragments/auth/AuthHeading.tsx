import React from "react";
import { assetsImage } from "../../../assets/assets";

interface AuthHeadingProps {
     title: string;
}

const AuthHeading: React.FC<AuthHeadingProps> = ({ title }) => {
     return (
          <>
               <div>
                    <img src={assetsImage.MeichuLogo} alt=""
                         className="size-24" />
               </div>
               <h2 className="dark:text-light text-lg font-semibold">
                    {title}
               </h2>
          </>
     );
}

export default AuthHeading;