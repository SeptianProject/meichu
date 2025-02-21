import { useProfileData } from '../../hooks/useProfileData'
import ProfileContent from '../layouts/profile/ProfileContent'
import ProfileDiscover from '../layouts/profile/ProfileDiscover'
import { getCloudinaryUrl } from '../../services'

const ProfilePage = () => {
     const {
          userData,
          userDataLoading,
          userDataDetailLoading,
          isFavored,
          listCardFavored,
          listCardRequest,
          renderCardContent,
          handleSwitchDiscover,
     } = useProfileData()

     return (
          <div className="w-full min-h-screen bg-light dark:bg-dark">
               <div className="max-w-7xl mx-auto px-7 md:px-12 lg:px-20 pt-32 lg:pt-40 pb-20">
                    <ProfileContent
                         userDataLoading={userDataLoading}
                         emailValue={userData?.email ?? '-'}
                         dateValue={userData?.createdAt?.split('T')[0]}
                         username={userData?.username ?? '-'}
                         telephoneNumber={userData?.telephoneNumber ?? '-'}
                         profilePicture={getCloudinaryUrl(userData?.profilePicture?.url || '')}
                    />
                    <ProfileDiscover
                         isLoading={userDataDetailLoading}
                         isFavored={isFavored}
                         favoredValue={userData?.likes?.length}
                         requestedValue={userData?.requests?.length}
                         handleSwitchDiscover={handleSwitchDiscover}
                         renderCardContent={renderCardContent}
                         listCardFavored={listCardFavored || []}
                         listCardRequest={listCardRequest || []}
                    />
               </div>
          </div>
     )
}

export default ProfilePage