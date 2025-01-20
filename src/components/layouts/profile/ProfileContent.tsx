import React from "react";
import { useAppDispatch } from "../../../redux/hook";
import { logout, setProfileActive } from "../../../redux/slices/authSlice";
import ProfileAvatar from "./ProfileAvatar";
import TextInputProfile from "../../fragments/profile/TextInputProfile";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserProfile, uploadAvatar } from "../../../services/AuthService";
import Button from "../../elements/buttons/Button";

interface ProfileContentProps {
     isTapDiscover: boolean
     handleTapDiscover: () => void
     emailValue?: string
     dateValue?: string
     username?: string
     telpNumber?: string
     profilePicture?: string
}

const ProfileContent: React.FC<ProfileContentProps> = ({
     isTapDiscover,
     handleTapDiscover,
     emailValue,
     dateValue,
     username,
     telpNumber,
     profilePicture
}) => {
     const dispatch = useAppDispatch()
     const queryClient = useQueryClient()
     const [isEditing, setIsEditing] = React.useState(false)
     const [selectedFile, setSelectedFile] = React.useState<File | null>(null)
     const [uploadedImageId, setUploadedImageId] = React.useState<number | null>(null)
     const [editedValues, setEditedValues] = React.useState({
          username: username || '',
          profilePicture: profilePicture || '',
          telpNumber: telpNumber || '',
     })

     const updateProfileMutation = useMutation({
          mutationFn: async () => {
               let imageId = uploadedImageId
               if (selectedFile) {
                    try {
                         const uploadResult = await uploadAvatar(selectedFile)
                         const uploadedImage = uploadResult[0]
                         imageId = uploadedImage.id
                    } catch (error) {
                         console.error('Failed upload avatar', error)
                    }
               }
               return updateUserProfile(
                    editedValues.username,
                    imageId,
                    editedValues.telpNumber
               )
          },
          onSuccess: () => {
               queryClient.invalidateQueries(['user'])
               setIsEditing(false)
               setSelectedFile(null)
               setUploadedImageId(null)
          },
          onError: (error) => {
               alert(`Update Profile Error${error}`)
          }
     })

     const handleFileSelect = (file: File) => {
          setSelectedFile(file)
     }

     const handleEdit = () => {
          if (isEditing) {
               updateProfileMutation.mutate()
          } else {
               setIsEditing(true)
          }
     }

     const handleCancel = () => {
          setIsEditing(false)
          setSelectedFile(null)
          setUploadedImageId(null)
          setEditedValues({
               username: username || '',
               profilePicture: profilePicture || '',
               telpNumber: telpNumber || ''
          })
     }

     const handleLogout = () => {
          dispatch(logout())
          dispatch(setProfileActive(false))
          queryClient.clear()
     }

     React.useEffect(() => {
          setEditedValues({
               username: username || '',
               profilePicture: profilePicture || '',
               telpNumber: telpNumber || ''
          })
     }, [username, profilePicture, telpNumber])

     return (
          <div className={`w-full h-full flex flex-col items-start gap-y-4 border-light/70 
          md:gap-x-5 md:flex-row md:items-start md:border-b md:pb-10
          ${isTapDiscover ? 'hidden' : 'block'}`}>
               <ProfileAvatar
                    currentImageUrl={profilePicture}
                    isEditing={isEditing}
                    isLoading={updateProfileMutation.isLoading}
                    onFileSelect={handleFileSelect}
               />
               <div className='size-full flex flex-col gap-y-5'>
                    <div className='space-y-3 lg:space-y-5'>
                         {isEditing ? (
                              <>
                                   <TextInputProfile
                                        title="Username"
                                        value={editedValues.username}
                                        isEditing={true}
                                        onChange={(value) => setEditedValues(prev => ({ ...prev, username: value }))}
                                   />
                                   <TextInputProfile
                                        title='Profile Picture'
                                        value={editedValues.profilePicture}
                                        isEditing={isEditing}
                                        onChange={(value) => setEditedValues(prev => ({ ...prev, profilePicture: value }))}
                                   />
                              </>
                         ) : null}
                         <TextInputProfile
                              title='Your Email'
                              value={emailValue ?? '-'} />
                         <TextInputProfile
                              title='Date Joined'
                              value={dateValue ?? '-'} />
                         <TextInputProfile
                              title='Phone Number'
                              value={editedValues.telpNumber}
                              isEditing={isEditing}
                              onChange={(value) => setEditedValues(prev => ({ ...prev, telpNumber: value }))}
                         />
                    </div>
                    <div className='w-full flex items-center gap-x-3'>
                         <Button
                              isGradient
                              title={isEditing ? 'Save Changes' : 'Edit Profile'}
                              onClick={handleEdit}
                              disabled={updateProfileMutation.isLoading}
                              className="lg:py-3 lg:w-40"
                         />
                         {isEditing ? (
                              <Button
                                   isCancel
                                   isGradient={false}
                                   title="Cancel"
                                   onClick={handleCancel}
                                   className="lg:py-3 lg:w-40"
                              />
                         ) : (
                              <Button
                                   isLogout
                                   isGradient={false}
                                   title="Log Out"
                                   onClick={handleLogout}
                                   className="lg:py-3 lg:w-40"
                              />
                         )}
                    </div>
                    <Button
                         isGradient
                         title="Discover More About Me!"
                         onClick={handleTapDiscover}
                         className="md:hidden w-full py-3"
                    />
               </div>
          </div>
     );
}

export default ProfileContent;