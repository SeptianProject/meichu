import { IoCloudUpload } from 'react-icons/io5'
import TitleDesc from '../../fragments/customProduct/TitleDesc'
import React from 'react'

interface UploadImageProductProps {
     currentImageUrl?: string
     onFileSelect: (file: File) => void
}

const UploadImageProduct: React.FC<UploadImageProductProps> = ({
     currentImageUrl,
     onFileSelect
}) => {
     const fileInputRef = React.useRef<HTMLInputElement>(null)
     const [previewUrl, setPreviewUrl] = React.useState<string>(currentImageUrl ?? '')

     React.useEffect(() => {
          setPreviewUrl(currentImageUrl ?? '')
     }, [currentImageUrl])

     const validateFile = (file: File) => {
          const allowedTypes = ["image/png", "image/gif", "image/webp", "video/mp4", "audio/mp3"];
          if (!allowedTypes.includes(file.type)) {
               return "Invalid file type"
          }

          const maxSize = 100 * 1024 * 1024;
          if (file.size > maxSize) {
               return `File size must be less than ${100} MB`
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

          onFileSelect(file)
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
          <div className="space-y-8">
               <TitleDesc
                    title="Upload Your Product"
                    desc="Send the reference photo you want for custom product." />
               <div
                    onClick={handleUploadClick}
                    className="h-64 flex flex-col items-center gap-y-4 justify-center rounded-2xl 
                              ring-[1.5px] ring-graySurface1 dark:bg-dark lg:h-[25rem] cursor-pointer">
                    <img src={previewUrl} alt="" className="hidden" />
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
               </div>
          </div>
     )
}

export default UploadImageProduct