import React from "react";
import { assetsImage } from "../../../assets/assets";

interface AuthHeadingProps {
     title: string;
}

const AuthHeading: React.FC<AuthHeadingProps> = ({ title }) => {
     return (
          <div className="flex flex-col items-center">
               <div>
                    <img src={assetsImage.MeichuLogo} alt=""
                         className="size-24 lg:size-36 select-none" />
               </div>
               <h2 className="dark:text-light text-lg font-semibold lg:text-[1.7rem]">
                    {title}
               </h2>
          </div>
     );
}

export default AuthHeading;