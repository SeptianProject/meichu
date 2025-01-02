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
                    desc="They All Serve The Same Purpose, But Each One Takes.But Each One Takes A Different Approach And Makes Different Tradeoffs." />
               <ImageInput
                    currentImageUrl={currentImageUrl}
                    maxSizeMb={100}
                    onUploadSuccess={(imageUrl: string, imageId: number) => onUploadSuccess!(imageUrl, imageId)}
               />
          </div>
     )
}

export default UploadImageProduct