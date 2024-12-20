import React from "react";
import ButtonActionInProfile from "../../fragments/profile/ButtonActionInProfile";
import { useAppDispatch } from "../../../redux/hook";
import { logout, setProfileActive } from "../../../redux/slices/authSlice";
import ProfileAvatar from "./ProfileAvatar";
import TextInputProfile from "../../fragments/profile/TextInputProfile";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserProfile } from "../../../services/AuthService";

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
     const [editedValues, setEditedValues] = React.useState({
          username: username || '',
          profilePicture: profilePicture || '',
          telpNumber: telpNumber || '',
     })

     const updateProfileMutation = useMutation({
          mutationFn: () => updateUserProfile(
               editedValues.username,
               editedValues.profilePicture,
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
     }

     const handleCancel = () => {
          setIsEditing(false)
     }

     const handleLogout = () => {
          dispatch(logout())
          dispatch(setProfileActive(false))
          queryClient.clear()
     }

     return (
          <div className={`w-full space-y-5 lg:flex flex-col items-start 
               border-light/70 lg:gap-x-5 lg:flex-row lg:items-start lg:border-b 
               lg:pt-0 lg:pb-5 ${isTapDiscover ? 'hidden' : 'block'}`}>
               <ProfileAvatar
                    currentImageUrl={profilePicture}
                    onImageUpload={(imageUrl) => {
                         setEditedValues(prev => ({
                              ...prev,
                              profilePicture: imageUrl
                         }))
                    }}
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
                    <div className='w-full flex items-center gap-x-5'>
                         <ButtonActionInProfile
                              text={isEditing ? 'Save Changes' : 'Edit Profile'}
                              onClick={handleEdit}
                              disabled={updateProfileMutation.isLoading}
                         />
                         {isEditing ? (
                              <ButtonActionInProfile
                                   text='Cancel'
                                   onClick={handleCancel}
                              />
                         ) : (
                              <ButtonActionInProfile
                                   text='Log Out'
                                   onClick={handleLogout}
                              />
                         )}
                    </div>
                    <ButtonActionInProfile
                         text='Discover More About Me!'
                         onClick={handleTapDiscover}
                         className='lg:hidden w-full' />
               </div>
          </div>
     );
}

export default ProfileContent;