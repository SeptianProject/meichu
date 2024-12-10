import { FC } from "react";
import { BsInstagram, BsTiktok, BsTwitterX, BsYoutube } from "react-icons/bs"
import SingleBadgeSosmed from "../../elements/SingleBadgeSosmed";


interface CardGradientBAProps {
     image: string;
     title: string;
     desc: string;
}

const CardGradientBA: FC<CardGradientBAProps> = ({ image, title, desc }) => {
     return (
          <div
               className="h-[30rem] bg-center bg-cover rounded-2xl relative overflow-hidden
               lg:h-[25rem] xl:h-[35rem]"
               style={{ backgroundImage: `url(${image})` }}>
               <div className="absolute bottom-7 z-10 left-5 flex flex-col gap-y-2">
                    <h1 className="font-semibold lg:text-lg xl:text-2xl text-light">
                         {title}
                    </h1>
                    <p className="lg:text-xs xl:text-base font-extralight text-light">
                         {desc}
                    </p>
                    <div className="flex items-center gap-x-2">
                         <SingleBadgeSosmed icon={BsTwitterX} />
                         <SingleBadgeSosmed icon={BsInstagram} />
                         <SingleBadgeSosmed icon={BsYoutube} />
                         <SingleBadgeSosmed icon={BsTiktok} />
                    </div>
               </div>
               <div className="absolute h-52 w-full bottom-0 rounded-t-2xl 
               bg-gradient-to-t from-[#312058] via-[#3848E9]/40
               to-transparent via-60% from-[5%]"/>
          </div>
     );
}

export default CardGradientBA;