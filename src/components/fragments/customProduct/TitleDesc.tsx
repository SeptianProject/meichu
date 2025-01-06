import React, { FC } from "react";

interface TitleDescProps {
     title: string;
     desc: string;
}

const TitleDesc: FC<TitleDescProps> = React.memo(({ desc, title }) => {
     return (
          <div className="space-y-1">
               <h3 className="dark:text-light font-semibold text-xl">
                    {title}
               </h3>
               <p className="dark:text-light/50 font-light text-opacity-60">
                    {desc}
               </p>
          </div>
     );
})

export default TitleDesc;