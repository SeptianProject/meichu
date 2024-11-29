import React from "react"
import { assetsImage } from "../../../assets/assets"
import ButtonSelectProduct from "../../fragments/customProduct/ButtonSelectProduct"
import TitleDesc from "../../fragments/customProduct/TitleDesc"

interface CustomTypeProductProps {
     type: 'product' | 'imvu';
}

const CustomTypeProduct: React.FC<CustomTypeProductProps> = ({ type }) => {
     const [selectedProduct, setSelectedProduct] = React.useState<string | null>(null)
     const buttonRef = React.useRef<HTMLDivElement>(null)

     const handleSelectProduct = (title: string) => {
          if (selectedProduct !== title) {
               setSelectedProduct(null)
          }
          setSelectedProduct(title)
     }

     React.useEffect(() => {
          const handleMouseDown = (event: MouseEvent) => {
               if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
                    setSelectedProduct(null)
               }
          }
          document.addEventListener('mousedown', handleMouseDown)
          return () => document.removeEventListener('mousedown', handleMouseDown)
     })

     const productTypes = [
          {
               icon: type === 'product' ? assetsImage.SingleEmoji : assetsImage.imvuLogo,
               title: type === 'product' ? "Create Single Product" : "Imvu+"
          }, {
               icon: type === 'product' ? assetsImage.DuoEmoji : assetsImage.imvuLogo,
               title: type === 'product' ? "Create Bundle" : "Non Imvu+"
          }
     ]

     return (
          <div className="space-y-8">
               <TitleDesc
                    delayAnimation={0.5}
                    title={type === 'product'
                         ? "Custom Product Type For Custom"
                         : "Choose Type Product"}
                    desc={type === 'product'
                         ? "They All Serve The Same Purpose, But Each One Takes."
                         : "They All Serve The Same Purpose"
                    } />
               <div ref={buttonRef}
                    className="flex flex-col lg:flex-row gap-5">
                    {productTypes.map((product) => (
                         <ButtonSelectProduct
                              icon={product.icon}
                              title={product.title}
                              isSelected={selectedProduct === product.title}
                              onSelect={() => handleSelectProduct(product.title)} />
                    ))}
               </div>
          </div>
     )
}

export default CustomTypeProduct