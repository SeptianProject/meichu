import React from 'react'
import { abstrakImages, assetItems } from "../../../assets/AnotherAssets";
import { useMutation } from '@tanstack/react-query';
import { uploadAvatar } from '../../../services/AuthService';
import { AxiosError } from 'axios';
import { UploadResponse } from '../../../interface';

import { getFullImageUrl } from '../../../services/FileUploadService';
interface ProfileAvatarProps {
     currentImageUrl?: string
     onUploadSuccess?: (imageUrl: string, imageId: number) => void
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
     currentImageUrl,
     onUploadSuccess
}) => {
     const fileInputRef = React.useRef<HTMLInputElement>(null)
     const [selectedFile, setSelectedFile] = React.useState<File | null>(null)
     const [previewUrl, setPreviewUrl] = React.useState<string>(
          currentImageUrl ? getFullImageUrl(currentImageUrl) : abstrakImages[1]
     )

     React.useEffect(() => {
          if (currentImageUrl) {
               setPreviewUrl(getFullImageUrl(currentImageUrl))
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

     const validateFile = (file: File) => {
          const allowedTypes = ["image/png", "image/jpg", "image/jpeg"];
          if (!allowedTypes.includes(file.type)) {
               return "Invalid file type. Please upload PNG or JPG/JPEG images only."
          }

          const maxSize = 5 * 1024 * 1024
          if (file.size > maxSize) {
               return "File is too large. Maximum size is 5MB."
          }

          return null
     }

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

     const handleUploadClick = () => {
          fileInputRef.current?.click()
     }

     React.useEffect(() => {
          return () => {
               if (selectedFile) {
                    URL.revokeObjectURL(previewUrl)
               }
          }
     }, [selectedFile, previewUrl])

     return (
          <div className='size-44 md:w-7/12 md:h-[15rem] lg:h-[19rem] relative'>
               <img
                    src={previewUrl}
                    alt='avatar'
                    className='rounded-lg object-cover object-center size-full' />
               <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    aria-label='Upload Image'
                    accept='image/png, image/jpg, image/jpeg'
                    className='hidden'
               />
               <button
                    type="button"
                    onClick={handleUploadClick}
                    disabled={uploadMutation.isLoading}
                    className='bg-light size-8 p-1 rounded-md absolute bottom-2 right-2
                         group transition-all duration-300'>
                    {uploadMutation.isLoading ? (
                         <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900" />
                    ) : (
                         <img
                              src={assetItems.EditIcon}
                              alt="edit-icon"
                              className='size-fit group-hover:scale-90'
                         />)}
               </button>
               {uploadMutation.isError && (
                    <div className="absolute bottom-12 right-2 bg-red-500 text-white p-2 rounded-md text-sm">
                         Upload failed. Please try again.
                    </div>
               )}
          </div>
     )
}

export default ProfileAvatar  