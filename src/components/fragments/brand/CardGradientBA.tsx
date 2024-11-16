import { FC } from "react";
import { BsInstagram, BsTiktok, BsTwitterX, BsYoutube } from "react-icons/bs"
import LinearGradient from "./LinearGradient";
import SingleBadgeSosmed from "../../elements/SingleBadgeSosmed";


interface CardGradientBAProps {
     key: number;
     image: string;
     title: string;
     desc: string;
}

const CardGradientBA: FC<CardGradientBAProps> = ({ key, image, title, desc }) => {
     return (
          <div key={key}
               className="h-[30rem] bg-center bg-cover rounded-2xl 
                                   relative overflow-hidden"
               style={{ backgroundImage: `url(${image})` }}>
               {/* Typograph & badge */}
               <div className="absolute bottom-7 z-10 left-5 flex flex-col gap-y-2">
                    <h1 className="font-semibold text-xl text-light">
                         {title}
                    </h1>
                    <p className="text-sm font-extralight text-light">
                         {desc}
                    </p>
                    {/* Badge sosmed */}
                    <div className="flex items-center gap-x-2">
                         <SingleBadgeSosmed icon={BsTwitterX} />
                         <SingleBadgeSosmed icon={BsInstagram} />
                         <SingleBadgeSosmed icon={BsYoutube} />
                         <SingleBadgeSosmed icon={BsTiktok} />
                    </div>
               </div>
               {/* Linear gradient */}
               <LinearGradient />
          </div>
     );
}

export default CardGradientBA;