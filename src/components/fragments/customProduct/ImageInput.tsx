import React from "react";
import { assetsImage } from "../../../assets/assets";

interface ImageInputProps {
     onFileUpload?: (file: File) => void;
     maxSizeMb?: number;
}

const ImageInput: React.FC<ImageInputProps> = ({
     onFileUpload,
     maxSizeMb = 100
}) => {
     const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
     const fileInputRef = React.useRef<HTMLInputElement>(null);

     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0];
          processFile(file);
     }

     const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
          e.preventDefault();
          e.stopPropagation();
     }

     const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
          e.preventDefault();
          e.stopPropagation();
          const file = e.dataTransfer.files?.[0];
          processFile(file);
     }

     const processFile = (file?: File) => {
          if (!file) return

          const fileSizeMb = file.size / 1024 / 1024;
          if (fileSizeMb > maxSizeMb) {
               alert(`File size must be less than ${maxSizeMb} MB`);
               return
          }

          const allowedTypes = ["image/png", "image/gif", "image/webp", "video/mp4", "audio/mp3"];
          if (!allowedTypes.includes(file.type)) {
               alert("Invalid file type");
               return
          }

          setSelectedFile(file);
          onFileUpload?.(file);
     }

     const triggerFileInput = () => {
          fileInputRef.current?.click();
     }

     return (
          <div
               onClick={triggerFileInput}
               onDragOver={handleDragOver}
               onDrop={handleDrop}
               className="h-64 flex flex-col items-center gap-y-4 justify-center 
                    rounded-2xl border border-[#1F1F2C] dark:bg-[#1F1F2C] lg:h-96
                    cursor-pointer">
               <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/png, image/gif, image/webp, video/mp4, audio/mp3"
                    className="hidden"
               />
               <img alt="Upload Image"
                    src={assetsImage.CloudSend}
                    className="size-16 lg:size-28" />
               <div className="text-center space-y-2">
                    <h1 className="text-xl dark:text-light font-semibold lg:text-2xl">
                         {selectedFile ? "File Name: " + selectedFile.name : "Drag your item to upload"}
                    </h1>
                    <p className="text-xs text-opacity-60 lg:text-sm">
                         PNG, GIF, WebP, MP4 Or MP3. Maximum File Size 100 Mb
                    </p>
                    {selectedFile && (
                         <p className="dark:text-light">File Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    )}
               </div>
          </div>
     );
}

export default ImageInput;