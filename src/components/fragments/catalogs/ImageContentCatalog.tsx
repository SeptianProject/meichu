import React from "react"
import { mainProductBundle } from "../../../assets/meichuBundle"

type ImageContentCatalogProps = {
     type: 'catalog' | 'profile'
}

const ImageContentCatalog: React.FC<ImageContentCatalogProps> = React.memo(({ type }) => {
     return (
          <div className='my-5'>
               <img className={`object-cover object-top rounded-3xl
                    ${type === 'catalog'
                         ? 'md:rounded-3xl w-full h-52 lg:h-80'
                         : 'w-60 h-40'}`}
                    src={mainProductBundle[2]} alt="Product" />
          </div>
     )
})

export default ImageContentCatalog