import React from "react";
import { useAppDispatch } from "../../../redux/hook";
import { logout, setProfileActive } from "../../../redux/slices/authSlice";
import ProfileAvatar from "./ProfileAvatar";
import TextInputProfile from "../../fragments/profile/TextInputProfile";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserProfile } from "../../../services/AuthService";
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
     const [uploadedImageId, setUploadedImageId] = React.useState<number | null>(null)
     const [editedValues, setEditedValues] = React.useState({
          username: username || '',
          profilePicture: profilePicture || '',
          telpNumber: telpNumber || '',
     })

     const handleUploadSuccess = (imageUrl: string, imageId: number) => {
          setUploadedImageId(imageId)
          setEditedValues(prev => ({ ...prev, profilePicture: imageUrl }))
     }

     const updateProfileMutation = useMutation({
          mutationFn: () => updateUserProfile(
               editedValues.username,
               uploadedImageId,
               editedValues.telpNumber
          ),
          onSuccess: (data) => {
               console.log('Update Profile Success: ', data)
               queryClient.invalidateQueries({ queryKey: ['user'] })
               setIsEditing(false)
          },
          onError: (error) => {
               console.log('Update Profile Error: ', error)
               alert('Update Profile Error')
          }
     })

     const handleEdit = () => {
          if (isEditing) {
               updateProfileMutation.mutate()
          } else {
               setIsEditing(true)
          }
          console.log('Edited Values: ', editedValues)
     }

     const handleCancel = () => {
          setIsEditing(false)
          console.log('Edited Cancel Values: ', editedValues)
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
                    onUploadSuccess={handleUploadSuccess}
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