import { FC } from "react";

interface TitleDescProps {
     title: string;
     desc: string;
}

const TitleDesc: FC<TitleDescProps> = ({ desc, title }) => {
     return (
          <div className="space-y-1">
               <h3 className="dark:text-light font-semibold text-xl">
                    {title}
               </h3>
               <p className="dark:text-light font-extralight text-opacity-80">
                    {desc}
               </p>
          </div>
     );
}

export default TitleDesc;