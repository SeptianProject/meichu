import React from "react";

interface ProductDetailProps {
     onClick: () => void;
     source: string;
     className?: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
     onClick,
     source,
     className,
}) => {
     return (
          <button
               type="button"
               onClick={onClick}
               className="transition-all duration-300 ease-in-out">
               <img
                    src={source}
                    alt={source}
                    className={`w-fit h-24 border-2 border-light rounded-xl 
                         lg:h-32 ${className}`} />
          </button>
     );
}

export default ProductDetail;