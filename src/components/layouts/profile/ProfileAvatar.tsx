/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { abstrakImages, assetItems } from "../../../assets/AnotherAssets";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { uploadAvatar } from '../../../services/AuthService';
import { AxiosError } from 'axios';

interface UploadResponse {
     id: number
     formats: {
          thumbnail: {
               url: string
          }
     }
     url: string
}

interface ProfileAvatarProps {
     currentImageUrl?: string
     onImageUpload?: (imageUrl: string) => void
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
     currentImageUrl,
     onImageUpload
}) => {
     const [selectedFile, setSelectedFile] = React.useState<File | null>(null)
     const [previewUrl, setPreviewUrl] = React.useState<string>(currentImageUrl || abstrakImages[1])
     const fileInputRef = React.useRef<HTMLInputElement>(null)
     const queryClient = useQueryClient()

     const uploadMutation = useMutation<UploadResponse, AxiosError, File>({
          mutationFn: uploadAvatar,
          onSuccess: (data) => {
               setPreviewUrl(data.formats.thumbnail.url)
               if (onImageUpload) {
                    onImageUpload(data.id.toString())
               }
               queryClient.invalidateQueries({ queryKey: ['user'] })
               console.log('Upload Success: ', data.formats.thumbnail.url)
          },
          onError: (error) => {
               console.log('Upload Error: ', error)
               alert('Upload Error')
          }
     })

     const processFile = (file?: File) => {
          if (!file) return

          const allowedTypes = ["image/png", "image/jpg", "image/jpeg"];
          if (!allowedTypes.includes(file.type)) {
               alert("Invalid file type. Please upload PNG or JPG/JPEG images only.");
               return
          }

          const maxSize = 5 * 1024 * 1024
          if (file.size > maxSize) {
               alert("File is too large. Maximum size is 5MB.")
               return
          }

          setSelectedFile(file)
          setPreviewUrl(URL.createObjectURL(file))
     }

     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0]

          if (file) {
               processFile(file)
               uploadMutation.mutate(file)
          }
     }

     const triggerFileInput = () => {
          fileInputRef.current?.click()
     }

     React.useEffect(() => {
          if (currentImageUrl) {
               setPreviewUrl(currentImageUrl)
          }
     }, [currentImageUrl])

     React.useEffect(() => {
          return () => {
               if (previewUrl !== abstrakImages[1] && previewUrl !== currentImageUrl) {
                    URL.revokeObjectURL(previewUrl)
               }
          }
     }, [previewUrl, currentImageUrl])

     const isLoading = uploadMutation.isLoading

     return (
          <div className='size-40 lg:w-3/5 lg:h-[20rem] relative'>
               <img
                    src={previewUrl}
                    alt={previewUrl.split('/').pop()}
                    className='rounded-xl object-cover object-center size-full' />
               <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept='image/png, image/jpg, image/jpeg'
                    className='hidden'
               />
               <button
                    type="button"
                    onClick={triggerFileInput}
                    disabled={isLoading}
                    className='bg-light size-8 p-1 rounded-md absolute bottom-2 right-2
                         group transition-all duration-300'>
                    {isLoading ? (
                         <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900" />
                    ) : (
                         <img
                              src={assetItems.EditIcon}
                              alt="edit-icon"
                              className='size-fit group-hover:scale-90'
                         />
                    )
                    }
               </button>
          </div>
     )
}

export default ProfileAvatar  