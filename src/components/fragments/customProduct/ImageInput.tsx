import React from "react";
import { IoCloudUpload } from "react-icons/io5";
import { getFullImageUrl } from "../../../services/FileUploadService";
import { useMutation } from "@tanstack/react-query";
import { UploadResponse } from "../../../interface";
import { AxiosError } from "axios";
import { uploadAvatar } from "../../../services/AuthService";

interface ImageInputProps {
     onUploadSuccess?: (imageUrl: string, imageId: number) => void
     maxSizeMb?: number;
     currentImageUrl?: string;
}

const ImageInput: React.FC<ImageInputProps> = React.memo(({
     onUploadSuccess,
     currentImageUrl,
     maxSizeMb = 100
}) => {
     const fileInputRef = React.useRef<HTMLInputElement>(null);
     const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
     const [previewUrl, setPreviewUrl] = React.useState<string>(
          currentImageUrl ? getFullImageUrl(currentImageUrl) : ''
     );

     React.useEffect(() => {
          if (currentImageUrl) {
               setPreviewUrl(getFullImageUrl(currentImageUrl));
          }
     }, [currentImageUrl])

     const uploadMutation = useMutation<UploadResponse[], AxiosError, File>({
          mutationFn: uploadAvatar,
          onSuccess: (data) => {
               const uploadedImage = data[0]
               const imageUrl = getFullImageUrl(uploadedImage.url)
               setPreviewUrl(imageUrl)
               onUploadSuccess?.(imageUrl, uploadedImage.id)
          },
          onError: (error) => {
               console.log('Upload Error: ', error)
               alert(`Upload Error ${error.message}`)
          }
     })

     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0]
          if (!file) return

          const error = validateFile(file)
          if (error) {
               alert(error)
               return
          }

          setSelectedFile(file)
          uploadMutation.mutate(file)
     }

     const validateFile = (file?: File) => {
          if (!file) return

          const fileSizeMb = file.size / 1024 / 1024;
          if (fileSizeMb > maxSizeMb) {
               return `File size must be less than ${maxSizeMb} MB`
          }

          const allowedTypes = ["image/png", "image/gif", "image/webp", "video/mp4", "audio/mp3"];
          if (!allowedTypes.includes(file.type)) {
               return "Invalid file type"
          }

          return null
     }

     const triggerFileInput = () => {
          fileInputRef.current?.click();
     }

     return (
          <div
               onClick={triggerFileInput}
               className="h-64 flex flex-col items-center gap-y-4 justify-center 
                    rounded-2xl ring-[1.5px] ring-graySecondary 
                    dark:bg-[#191820] lg:h-[25rem] cursor-pointer">
               <img src={previewUrl} alt="" className="size-10 object-cover object-center" />
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