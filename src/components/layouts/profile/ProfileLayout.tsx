import React from 'react'
import { BiX } from 'react-icons/bi'
import { assetsImage } from '../../../assets/assets'
import TextTitleValue from '../../fragments/profile/TextTitleValue'
import ButtonSwitchDiscover from '../../fragments/profile/ButtonSwitchDiscover'
import ButtonActionInProfile from '../../fragments/profile/ButtonActionInProfile'
import ModalOverlay from '../../fragments/ModalOverlay'
import CardEvent from '../../fragments/event/CardEvent'
import { Swiper, SwiperSlide } from 'swiper/react'
import CardFavoredProfile from './CardFavoredProfile'

interface ProfileLayoutProps {
     profileOpen: boolean
     profileClose: () => void
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({
     profileOpen,
     profileClose
}) => {
     const listCardFavored = [
          <CardFavoredProfile />,
          <CardFavoredProfile />,
          <CardFavoredProfile />,
          <CardFavoredProfile />
     ]
     const listCardRequest = [
          <CardEvent />,
          <CardEvent />,
     ]
     const [isFavored, setIsFavored] = React.useState(true)
     const profileContentRef = React.useRef<HTMLDivElement>(null)
     const [maxHeight, setMaxHeight] = React.useState<number>(0)
     const [isTapDiscover, setIsTapDiscover] = React.useState(false)
     const [isMobile, setIsMobile] = React.useState(false)

     const handleSwitchDiscover = () => {
          setIsFavored(!isFavored)
     }

     const handleResize = () => {
          if (window.innerWidth < 1024) {
               setIsMobile(true)
          }
     }

     React.useEffect(() => {
          const updateMaxHeight = () => {
               const calculatedMaxHeight = window.innerHeight * 0.8
               setMaxHeight(calculatedMaxHeight)
          }
          updateMaxHeight()
          window.addEventListener('resize', updateMaxHeight)

          if (profileOpen) {
               document.body.style.overflow = 'hidden'
               document.body.style.position = 'fixed'
               document.body.style.width = '100%'
               document.body.style.top = `-${window.scrollY}px`
          } else {
               const scrollY = document.body.style.top
               document.body.style.overflow = ''
               document.body.style.position = ''
               document.body.style.width = ''
               document.body.style.top = ''

               window.scrollTo(0, parseInt(scrollY || '0') * -1)
          }

          handleResize()
          window.addEventListener('resize', handleResize)
          return () => {
               window.removeEventListener('resize', handleResize)
               window.removeEventListener('resize', updateMaxHeight)
          }
     }, [profileOpen])

     const handleTapDiscover = () => {
          setIsTapDiscover(true)
     }

     const handleBackToProfile = () => {
          setIsTapDiscover(false)
     }

     return (
          <>
               <ModalOverlay isModalClose={profileClose} isModalOpen={profileOpen} />
               <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
               w-4/5 rounded-xl bg-light dark:bg-[#1e1e1e] border border-[#5e5a5a] overflow-y-hidden
               transition-all duration-500 ease-in-out lg:w-3/5 lg:min-h-[85vh] lg:rounded-3xl
               ${isTapDiscover ? 'min-h-[60vh]' : 'min-h-[70vh]'}
               ${profileOpen || !profileClose ? 'z-50 opacity-100' : 'z-0 scale-0 opacity-0'}`}
                    style={{ maxHeight: profileOpen ? `${maxHeight}px` : '0px' }}>
                    <div ref={profileContentRef} style={{ maxHeight: profileOpen ? `${maxHeight}px` : '0px' }}
                         className='relative flex flex-col items-center size-full overflow-y-auto p-10'>
                         <div className="bg-[#8474DB]/10 absolute -top-10 -right-20 size-80 rounded-full blur-2xl" />
                         {/* Head */}
                         <div className='flex items-center justify-between size-full border-b-2 pb-1 dark:border-light/50 z-10'>
                              <h2 className='text-xl font-semibold dark:text-light '>Profile</h2>
                              <BiX onClick={profileClose} className='dark:text-light cursor-pointer' size={25} />
                         </div>
                         <div className='w-full pt-5 z-10'>
                              {/* Content */}
                              <div className={`w-full space-y-5 lg:flex flex-col items-start border-light/70 
                              lg:gap-x-5 lg:flex-row lg:items-end lg:border-b lg:pt-0 lg:pb-5
                              ${isTapDiscover ? 'hidden' : 'block'}`}>
                                   <div className='size-40 lg:w-60 lg:h-64'>
                                        <img src={assetsImage.DetailImg1} alt="profile-picture"
                                             className='rounded-xl object-cover object-center size-full' />
                                   </div>
                                   <div className='flex w-full flex-col gap-y-5 lg:w-80 lg:h-64'>
                                        <div className='space-y-3 lg:space-y-5'>
                                             <TextTitleValue title='Your Email' value='septianz@gmail.com' />
                                             <TextTitleValue title='Date Joined' value='21-January-2020' />
                                             <TextTitleValue title='Phone Number' value='083848789028' />
                                        </div>
                                        <div className='w-full flex items-center gap-x-5'>
                                             <ButtonActionInProfile text='Edit Profile' onClick={() => { }} />
                                             <ButtonActionInProfile text='Log Out' onClick={() => { }} />
                                        </div>
                                        <ButtonActionInProfile
                                             text='Discover More About Me!'
                                             onClick={handleTapDiscover}
                                             className='lg:hidden w-full' />
                                   </div>
                              </div>
                              {/* Discover */}
                              <div className='w-full'>
                                   <div className={`lg:block ${isTapDiscover ? 'block' : 'hidden'}`}>
                                        <div className='pt-5 flex flex-col gap-y-5 lg:border-none'>
                                             <div className='flex items-center justify-between lg:justify-center lg:gap-x-5'>
                                                  <ButtonSwitchDiscover
                                                       text='Favored Items'
                                                       value={4}
                                                       onClick={handleSwitchDiscover}
                                                       onFavored={isFavored} />
                                                  <ButtonSwitchDiscover
                                                       text='Products Requests'
                                                       value={2}
                                                       onClick={handleSwitchDiscover}
                                                       onFavored={!isFavored} />
                                             </div>
                                             {/* Card Content */}
                                             <div className='flex items-center gap-x-3'>
                                                  {isFavored ?
                                                       (isMobile ?
                                                            <Swiper>
                                                                 {listCardFavored.map((item, index) => (
                                                                      <SwiperSlide key={index} className='px-2'>
                                                                           {item}
                                                                      </SwiperSlide>
                                                                 ))}
                                                            </Swiper> : <>
                                                                 {listCardFavored.map((item, index) => (
                                                                      <div key={index} className='w-full'>{item}</div>
                                                                 ))}
                                                            </>) :
                                                       (isMobile ? <>
                                                            <Swiper>
                                                                 {listCardRequest.map((item, index) => (
                                                                      <SwiperSlide key={index} className='px-2 w-full overflow-y-auto'>
                                                                           {item}
                                                                      </SwiperSlide>
                                                                 ))}
                                                            </Swiper>
                                                       </> : <>
                                                            {listCardRequest.map((item, index) => (
                                                                 <div key={index} className='w-full'>{item}</div>
                                                            ))}
                                                       </>)
                                                  }
                                             </div>
                                             <ButtonActionInProfile
                                                  text='Back to Profile'
                                                  onClick={handleBackToProfile}
                                                  className='lg:hidden mx-auto mt-5' />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div >
          </>
     )
}

export default ProfileLayout

