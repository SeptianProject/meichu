import TitleDesc from '../../fragments/customProduct/TitleDesc'
import ImageInput from '../../fragments/customProduct/ImageInput'
import React from 'react'

interface UploadImageProductProps {
     currentImageUrl?: string
     onUploadSuccess?: (imageUrl: string, imageId: number) => void
}

const UploadImageProduct: React.FC<UploadImageProductProps> = ({ currentImageUrl, onUploadSuccess }) => {
     return (
          <div className="space-y-8">
               <TitleDesc
                    title="Upload Your Product"
                    desc="Send the reference photo you want for custom product." />
               <ImageInput
                    currentImageUrl={currentImageUrl}
                    maxSizeMb={100}
                    onUploadSuccess={(imageUrl: string, imageId: number) => onUploadSuccess!(imageUrl, imageId)}
               />
          </div>
     )
}

export default UploadImageProduct