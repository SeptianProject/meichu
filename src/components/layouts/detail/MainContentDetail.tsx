import React from "react";
import ProductDetail from "../../fragments/detail/ProductDetail";
import ScaleAnimation from "../../animations/ScaleAnimtion";
import { AnimatePresence } from "framer-motion";
import { FadeAnimation } from "../../animations/FadeAnimation";

interface ImageContent {
     images: {
          id: 'first' | 'second' | 'third';
          source: string;
     }[]
     content: 'first' | 'second' | 'third';
     onSelectContent: (content: 'first' | 'second' | 'third') => void;
}

const MainContentDetail: React.FC<ImageContent> = React.memo(({
     images,
     content,
     onSelectContent
}) => {
     const contentActive = images.find(img => img.id === content)?.source || images[0].source;

     return (
          <FadeAnimation
               style={{ backgroundImage: `url(${contentActive})` }}
               className="w-full h-[22rem] rounded-2xl bg-cover bg-center 
               transition-all duration-500 flex flex-col items-start justify-center
               gap-y-5 p-5 lg:h-[40rem]">
               <AnimatePresence>
                    {images.map((image) => (
                         <ScaleAnimation>
                              <ProductDetail
                                   key={image.id}
                                   source={image.source}
                                   onClick={() => onSelectContent(image.id)} />
                         </ScaleAnimation>
                    ))}
               </AnimatePresence>
          </FadeAnimation>
     );
})

export default MainContentDetail;