import React from "react";
import { assetItems } from "../../../assets/assets";

interface AuthHeadingProps {
     title: string;
}

const AuthHeading: React.FC<AuthHeadingProps> = React.memo(({ title }) => {
     return (
          <div className="flex flex-col items-center gap-y-4 pt-5 pb-2">
               <div>
                    <img src={assetItems.MeichuLogo}
                         alt=""
                         loading='lazy'
                         className="w-28 lg:w-40 select-none" />
               </div>
               <h2 className="dark:text-light text-lg font-semibold lg:text-[1.7rem]">
                    {title}
               </h2>
          </div>
     );
})

export default AuthHeading;