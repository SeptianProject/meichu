import React from "react";
import { useAppDispatch } from "../../../redux/hook";
import { logout, setProfileActive } from "../../../redux/slices/authSlice";
import ProfileAvatar from "./ProfileAvatar";
import TextInputProfile from "../../fragments/profile/TextInputProfile";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserProfile, uploadFile } from "../../../services/authService.ts";
import Button from "../../elements/buttons/Button";
import { ProfileContentSkeleton } from "../../elements/skeletons/ProfileLayoutSkeleton.tsx";

interface ProfileContentProps {
     isTapDiscover: boolean
     handleTapDiscover: VoidFunction
     emailValue?: string
     dateValue?: string
     username?: string
     telephoneNumber?: string
     profilePicture?: string
     userDataLoading?: boolean
}

const ProfileContent: React.FC<ProfileContentProps> = ({
     isTapDiscover,
     handleTapDiscover,
     emailValue,
     dateValue,
     username,
     telephoneNumber,
     profilePicture,
     userDataLoading
}) => {
     const dispatch = useAppDispatch()
     const queryClient = useQueryClient()
     const [isEditing, setIsEditing] = React.useState(false)
     const [selectedFile, setSelectedFile] = React.useState<File | null>(null)
     const [uploadedImageId, setUploadedImageId] = React.useState<number | null>(null)
     const [editedValues, setEditedValues] = React.useState({
          username: username || '',
          profilePicture: profilePicture,
          telephoneNumber: telephoneNumber || '',
     })

     const updateProfileMutation = useMutation({
          mutationFn: async () => {
               let imageId = uploadedImageId
               if (selectedFile) {
                    try {
                         const uploadResult = await uploadFile(selectedFile)
                         const uploadedImage = uploadResult[0]
                         imageId = uploadedImage.id
                    } catch (error) {
                         console.error('Failed upload avatar', error)
                    }
               }
               return updateUserProfile(
                    editedValues.username,
                    imageId,
                    editedValues.telephoneNumber
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
     }

     const handleLogout = () => {
          dispatch(logout())
          dispatch(setProfileActive(false))
          queryClient.clear()
     }

     React.useEffect(() => {
          setEditedValues({
               username: username || '',
               profilePicture: profilePicture,
               telephoneNumber: telephoneNumber || ''
          })
     }, [username, profilePicture, telephoneNumber])

     if (userDataLoading) return <ProfileContentSkeleton />

     return (
          <div className={`w-full h-full flex flex-col items-start gap-y-4 border-light/70 
          md:gap-x-5 md:flex-row md:items-start md:border-b md:pb-10
          ${isTapDiscover ? 'hidden' : 'block'}`}>
               <ProfileAvatar
                    currentImageUrl={profilePicture}
                    isEditing={isEditing}
                    uploading={updateProfileMutation.isLoading}
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
                                        value={editedValues.profilePicture!}
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
                              value={dateValue ?? Date.now().toString().split('T')[0]} />
                         <TextInputProfile
                              title='Phone Number'
                              value={editedValues.telephoneNumber}
                              isEditing={isEditing}
                              onChange={(value) => setEditedValues(prev => ({ ...prev, telephoneNumber: value }))}
                         />
                    </div>
                    <div className='w-full flex items-center gap-x-3'>
                         <Button
                              isGradient
                              title={updateProfileMutation.isLoading ? 'Updating...' : isEditing ? 'Save Changes' : 'Edit Profile'}
                              onClick={handleEdit}
                              disabled={updateProfileMutation.isLoading}
                              className="lg:py-3 lg:w-40"
                         />
                         {isEditing ? (
                              <Button
                                   isCancel
                                   isGradient={false}
                                   title="Cancel"
                                   disabled={updateProfileMutation.isLoading}
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