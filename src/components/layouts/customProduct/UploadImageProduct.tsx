import React from 'react'
import { IoCloudUpload } from 'react-icons/io5'
import TitleDesc from '../../fragments/customProduct/TitleDesc'
import ReactCrop, { Crop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { assetItems } from '../../../assets/assets'

interface UploadImageProductProps {
     currentImageUrl?: string
     onFileSelect: (file: File) => void
}

const UploadImageProduct: React.FC<UploadImageProductProps> = ({
     currentImageUrl,
     onFileSelect
}) => {
     const fileInputRef = React.useRef<HTMLInputElement>(null)
     const imgRef = React.useRef<HTMLImageElement>(null)
     const [previewUrl, setPreviewUrl] = React.useState<string>(currentImageUrl ?? assetItems.EventImage)
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
          setPreviewUrl(currentImageUrl ?? assetItems.EventImage
          )
     }, [currentImageUrl])

     const validateFile = (file: File) => {
          const allowedTypes = ["image/png", "image/jpg", "image/jpeg", "image/gif", "image/webp", "video/mp4", "audio/mp3"];
          if (!allowedTypes.includes(file.type)) {
               return "Invalid file type"
          }

          const maxSize = 100 * 1024 * 1024;
          if (file.size > maxSize) {
               return `File size must be less than 100 MB`
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
          fileInputRef.current?.click()
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
               <div className="space-y-8">
                    <TitleDesc
                         title="Upload Your Product"
                         desc="Send the reference photo you want for custom product." />
                    <div
                         onClick={handleUploadClick}
                         className="h-64 flex flex-col items-center gap-y-4 justify-center rounded-2xl 
                              ring-[1.5px] ring-graySurface1 dark:bg-dark lg:h-[25rem] cursor-pointer">
                         <input
                              type="file"
                              ref={fileInputRef}
                              onChange={handleFileChange}
                              accept="image/png, image/gif, image/webp, video/mp4, audio/mp3"
                              className="hidden" />
                         <IoCloudUpload className="size-16 lg:size-28 text-graySecondary/50 dark:text-graySurface2" />
                         <div className="text-center">
                              <p className="text-xs font-light tracking-wider text-graySecondary 
                                   lg:text-sm dark:text-light/60">
                                   PNG, GIF, WebP, MP4 Or MP3. Maximum File Size 100 Mb
                              </p>
                         </div>
                         <img src={previewUrl} alt="" className="w-40 h-40 border-2 border-graySurface2 rounded-xl" />
                    </div>
               </div>
               {showCropModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                         <div className="bg-white p-4 rounded-lg max-w-2xl w-full mx-4">
                              <h3 className="text-lg font-semibold mb-4">Cropper Image</h3>
                              <div className="max-h-[60vh] overflow-auto">
                                   <ReactCrop
                                        crop={crop}
                                        onChange={c => setCrop(c)}
                                        aspect={1}
                                        className="max-w-full">
                                        <img
                                             ref={imgRef}
                                             src={previewUrl}
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

export default UploadImageProduct