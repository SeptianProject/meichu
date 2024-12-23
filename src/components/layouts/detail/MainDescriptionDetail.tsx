import React from "react";
import TextTagline from "../../fragments/home/TextTagline";
import RoundedButton from "../../elements/buttons/RoundedBtn";

interface MainDescriptionDetailProps {
     onBuyCLick: () => void;
}

const MainDescriptionDetail: React.FC<MainDescriptionDetailProps> = React.memo(({
     onBuyCLick
}) => {
     return (
          <div className="space-y-10 lg:space-y-5 w-full">
               <div className="space-y-4 lg:max-w-80">
                    <h1 className="dark:text-light uppercase text-4xl font-bold">
                         autumn couple series
                    </h1>
                    <TextTagline text="Korean Style"
                         className="font-light text-xl capitalize font-poppins text-opacity-80" />
               </div>
               <div className="space-y-2 lg:max-w-[23rem]">
                    <h3 className="dark:text-light text-2xl font-semibold">Description</h3>
                    <p className="dark:text-light/70 text-sm font-light">Whether you have a question about talents, pricing, portfolio, or anything else, our team.
                         Whether you have a question about talents, pricing, portfolio, or anything else, our team.
                         Whether you have a question about talents, pricing, portfolio, or anything else, our team.</p>
               </div>
               <div className="space-y-2">
                    <h3 className="dark:text-light text-2xl font-semibold">Price</h3>
                    <p className="dark:text-light/70 text-lg font-light">$70000</p>
               </div>
               <div className="flex items-center gap-x-5 pb-10">
                    <RoundedButton
                         title="Buy Now!"
                         onClick={onBuyCLick}
                         className="lg:w-52" />
                    <RoundedButton
                         title="Cancel"
                         className="lg:w-52" />
               </div>
          </div>
     );
})

export default MainDescriptionDetail;