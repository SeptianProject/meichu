import React from 'react'
import { abstrakImages, assetItems } from "../../../assets/assets";
interface ProfileAvatarProps {
     currentImageUrl?: string
     isEditing?: boolean
     isLoading?: boolean
     onFileSelect: (file: File) => void
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
     currentImageUrl,
     isEditing,
     isLoading,
     onFileSelect
}) => {
     const fileInputRef = React.useRef<HTMLInputElement>(null)
     const [previewUrl, setPreviewUrl] = React.useState<string>(currentImageUrl ?? abstrakImages[1])

     React.useEffect(() => {
          setPreviewUrl(currentImageUrl ?? abstrakImages[1])
     }, [currentImageUrl])

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

          const objectUrl = URL.createObjectURL(file)
          setPreviewUrl(objectUrl)
          onFileSelect(file)
     }

     const handleUploadClick = () => {
          if (isEditing && !isLoading) {
               fileInputRef.current?.click()
          }
     }

     React.useEffect(() => {
          return () => {
               if (previewUrl && previewUrl.startsWith('blob:')) {
                    URL.revokeObjectURL(previewUrl)
               }
          }
     }, [previewUrl])

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
               {isEditing && (
                    <button
                         type="button"
                         onClick={handleUploadClick}
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
                              />)}
                    </button>
               )}
          </div>
     )
}

export default ProfileAvatar  