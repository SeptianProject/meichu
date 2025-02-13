import React from 'react'
import { abstrakImages, assetItems } from "../../../assets/assets";
import ReactCrop, { Crop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

interface ProfileAvatarProps {
     currentImageUrl?: string
     isEditing?: boolean
     uploading?: boolean
     onFileSelect: (file: File) => void
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
     currentImageUrl,
     isEditing,
     uploading,

     onFileSelect
}) => {
     const fileInputRef = React.useRef<HTMLInputElement>(null)
     const imgRef = React.useRef<HTMLImageElement>(null)
     const [previewUrl, setPreviewUrl] = React.useState<string>(currentImageUrl ?? abstrakImages[1])
     const [showCropModal, setShowCropModal] = React.useState(false)
     const [selectedFile, setSelectedFile] = React.useState<File | null>(null)
     const [crop, setCrop] = React.useState<Crop>({
          unit: '%',
          width: 90,
          height: 90,
          x: 5,
          y: 5
     })

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

          setSelectedFile(file)
          const objectUrl = URL.createObjectURL(file)
          setPreviewUrl(objectUrl)
          setShowCropModal(true)
     }

     const getCroppedImg = async (
          image: HTMLImageElement,
          crop: Crop
     ): Promise<File> => {
          const canvas = document.createElement('canvas')
          const scaleX = image.naturalWidth / image.width
          const scaleY = image.naturalHeight / image.height
          canvas.width = crop.width!
          canvas.height = crop.height!
          const ctx = canvas.getContext('2d')!

          ctx.drawImage(
               image,
               crop.x! * scaleX,
               crop.y! * scaleY,
               crop.width! * scaleX,
               crop.height! * scaleY,
               0,
               0,
               crop.width!,
               crop.height!
          )

          return new Promise((resolve) => {
               canvas.toBlob((blob) => {
                    if (!blob || !selectedFile) return
                    const croppedFile = new File([blob], selectedFile.name, {
                         type: selectedFile.type,
                         lastModified: Date.now(),
                    })
                    resolve(croppedFile)
               }, selectedFile?.type)
          })
     }

     const handleCropComplete = async () => {
          if (!imgRef.current) return

          try {
               const croppedFile = await getCroppedImg(imgRef.current, crop)
               onFileSelect(croppedFile)
               setShowCropModal(false)
          } catch (error) {
               console.error('Failed to crop image', error)
          }
     }

     const handleUploadClick = () => {
          if (isEditing && !uploading) {
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
          <>
               <div className='size-44 md:w-7/12 md:h-[15rem] lg:h-[19rem] relative'>
                    <img
                         src={previewUrl}
                         alt='avatar'
                         loading='lazy'
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
                              disabled={uploading}
                              className='bg-light size-8 p-1 rounded-md absolute bottom-2 right-2
                         group transition-all duration-300'>
                              {uploading ? (
                                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-graySurface2" />
                              ) : (
                                   <img src={assetItems.EditIcon}
                                        loading='lazy'
                                        alt="edit-icon"
                                        className='size-fit group-hover:scale-90'
                                   />)}
                         </button>
                    )}
               </div>
               {showCropModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                         <div className="bg-white p-4 rounded-lg max-w-2xl w-full mx-4">
                              <h3 className="text-lg font-semibold mb-4">Crop your Image</h3>
                              <div className="max-h-[60vh] overflow-auto">
                                   <ReactCrop
                                        crop={crop}
                                        onChange={c => setCrop(c)}
                                        aspect={1}
                                        className="max-w-full">
                                        <img
                                             ref={imgRef}
                                             src={previewUrl}
                                             loading='lazy'
                                             alt="Crop preview"
                                             className="max-w-full"
                                        />
                                   </ReactCrop>
                              </div>
                              <div className="mt-4 flex justify-end gap-2">
                                   <button
                                        onClick={() => setShowCropModal(false)}
                                        className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                                        Cancel
                                   </button>
                                   <button
                                        onClick={handleCropComplete}
                                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                        Apply
                                   </button>
                              </div>
                         </div>
                    </div>
               )}
          </>
     )
}

export default ProfileAvatar  