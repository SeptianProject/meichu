import TitleDesc from '../../fragments/customProduct/TitleDesc'
import ImageInput from '../../fragments/customProduct/ImageInput'

const UploadImageProduct = () => {
     return (
          <div className="space-y-8">
               <TitleDesc title="Upload Your Product"
                    desc="They All Serve The Same Purpose, But Each One Takes.But Each One Takes A Different Approach And Makes Different Tradeoffs." />
               <ImageInput />
          </div>
     )
}

export default UploadImageProduct