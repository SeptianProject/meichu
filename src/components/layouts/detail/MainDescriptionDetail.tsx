import React from "react";
import GradientButton from "../../elements/buttons/Button";
import { useNavigate } from "react-router-dom";

interface MainDescriptionDetailProps {
     onBuyCLick: () => void;
}

const MainDescriptionDetail: React.FC<MainDescriptionDetailProps> = React.memo(({
     onBuyCLick
}) => {
     const navigate = useNavigate();

     return (
          <div className="space-y-10 lg:space-y-5 w-full">
               <div className="space-y-1 lg:max-w-80">
                    <h1 className="dark:text-light uppercase text-3xl font-bold">
                         autumn couple series
                    </h1>
                    <div className='flex flex-col gap-y-1 w-fit'>
                         <h5 className='font-light text-opacity-70 dark:text-light/60'>Korean Style</h5>
                         <div className="w-full h-[3px] rounded-full bg-gold" />
                    </div>
               </div>
               <div className="space-y-2 lg:max-w-[23rem]">
                    <h3 className="dark:text-light text-xl font-semibold">Description</h3>
                    <p className="dark:text-light/60 text-sm text-opacity-70 font-light dark:font-extralight">Whether you have a question about talents, pricing, portfolio, or anything else, our team.
                         Whether you have a question about talents, pricing, portfolio, or anything else, our team.
                         Whether you have a question about talents, pricing, portfolio, or anything else, our team.</p>
               </div>
               <div className="space-y-2">
                    <h3 className="dark:text-light text-xl text-opacity-70 font-semibold">Price</h3>
                    <p className="dark:text-light/60 text-opacity-70 font-light dark:font-extralight">$70000</p>
               </div>
               <div className="flex items-center gap-x-5 pb-10">
                    <GradientButton
                         isGradient
                         title="Buy Now!"
                         onClick={onBuyCLick}
                         className="lg:w-44"
                    />
                    <GradientButton
                         isCancel
                         isGradient={false}
                         title="Cancel"
                         onClick={() => navigate('/')}
                         className="lg:w-44"
                    />
               </div>
          </div>
     );
})

export default MainDescriptionDetail;