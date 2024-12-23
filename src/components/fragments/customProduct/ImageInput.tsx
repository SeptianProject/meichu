import React from "react";
import { IoCloudUpload } from "react-icons/io5";

interface ImageInputProps {
     onFileUpload?: (file: File) => void;
     maxSizeMb?: number;
}

const ImageInput: React.FC<ImageInputProps> = React.memo(({
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
                    rounded-2xl ring-[1.5px] ring-graySecondary 
                    dark:bg-[#191820] lg:h-[25rem] cursor-pointer">
               <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/png, image/gif, image/webp, video/mp4, audio/mp3"
                    className="hidden" />
               <IoCloudUpload className="size-16 lg:size-28 text-graySecondary/50 dark:text-[#353541]" />
               <div className="text-center space-y-2">
                    <h1 className="text-xl dark:text-light font-semibold lg:text-2xl">
                         {selectedFile ? "File Name: " + selectedFile.name : "Drag your item to upload"}
                    </h1>
                    <p className="text-xs font-light tracking-wider text-graySecondary 
                    lg:text-sm dark:text-light">
                         PNG, GIF, WebP, MP4 Or MP3. Maximum File Size 100 Mb,
                         Current Size ({selectedFile && (selectedFile.size / 1024 / 1024).toFixed(2)} Mb)
                    </p>
               </div>
          </div>
     );
})

export default ImageInput;