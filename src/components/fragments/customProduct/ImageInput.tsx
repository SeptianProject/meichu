/* eslint-disable @typescript-eslint/no-empty-object-type */
import { FC } from "react";
import { assetsImage } from "../../../assets/assets";

interface ImageInputProps {

}

const ImageInput: FC<ImageInputProps> = () => {
     return (
          <div className="h-64 flex flex-col items-center gap-y-4 justify-center 
                    rounded-2xl border border-[#1F1F2C] dark:bg-[#1F1F2C] lg:h-96">
               <input className="size-16 lg:size-28" type="image" src={assetsImage.CloudSend} alt="" />
               <div className="text-center space-y-2">
                    <h1 className="text-xl dark:text-light font-semibold lg:text-2xl">Drag your item to upload</h1>
                    <p className="text-xs text-opacity-60 lg:text-sm">PNG, GIF, WebP, MP4 Or MP3. Maximum File Size 100 Mb</p>
               </div>
          </div>
     );
}

export default ImageInput;