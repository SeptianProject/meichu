import React from 'react'
import { BiX } from 'react-icons/bi'
import { assetsImage, bestSellerImages } from '../../../assets/assets'
import TextTitleValue from '../../fragments/profile/TextTitleValue'
import ButtonSwitchDiscover from '../../fragments/profile/ButtonSwitchDiscover'
import ButtonActionInProfile from '../../fragments/profile/ButtonActionInProfile'
import ModalOverlay from '../../fragments/ModalOverlay'
import CardEvent from '../../fragments/event/CardEvent'
import { FaHeart } from 'react-icons/fa6'
import { Swiper, SwiperSlide } from 'swiper/react'

interface ProfileLayoutProps {
     profileOpen: boolean
     profileClose: () => void
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({
     profileOpen,
     profileClose
}) => {
     const listCardFavored = [
          <CardFavoredItem />,
          <CardFavoredItem />,
          <CardFavoredItem />,
          <CardFavoredItem />
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
               document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`
          } else {
               const timer = setTimeout(() => {
                    document.body.style.overflow = ''
                    document.body.style.paddingRight = ''
               }, 200);
               return () => clearTimeout(timer)
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
               w-4/5 rounded-xl bg-light dark:bg-[#1e1e1e] border border-[#5e5a5a]
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

const CardFavoredItem = () => {
     return (
          <div className='bg-transparent border border-[#5E5A5A] dark:bg-[#302F35]
               p-2 pb-5 md:p-3 rounded-2xl h-full w-full
               hover:-translate-y-3 transition-all duration-500'>
               {/* Product name */}
               <div className='mt-2 flex items-center justify-between md:mt-0'>
                    <h3 className='dark:text-light text-[14px] text-sm font-bold'>
                         Nama Product
                    </h3>
                    <div className='border border-[#5E5A5A] dark:border-light cursor-pointer 
                    rounded-full p-[5px] w-fit group hover:bg-red-500 
                    hover:border-transparent dark:hover:border-transparent hover:scale-105
                    transition-all duration-300'>
                         <FaHeart className='text-[#5E5A5A] dark:text-light size-3
                    group-hover:text-light group-hover:scale-75 transition-all duration-300' />
                    </div>
               </div>
               {/* Profile */}
               <div className='flex items-center gap-x-2 my-2'>
                    <img className='rounded-full size-7 cursor-pointer'
                         src={assetsImage.BestSellerProfile} alt="" />
                    <h4 className='dark:text-light text-xs font-medium'>
                         @Meichu
                    </h4>
               </div>
               {/* image content */}
               <div className='mt-3'>
                    <img className='w-full h-32 sm:h-24 object-cover object-center rounded-xl'
                         src={bestSellerImages[1]} alt="Product" />
               </div>
               {/* more Button */}
               <div className='mt-5 flex items-center justify-between'>
                    <div className='flex items-center gap-x-2'>
                         <img className='size-6 sm:size-7 rounded-full'
                              src={assetsImage.BundleProduct} alt='' />
                         <div className='flex flex-col'>
                              <h4 className='dark:text-light text-[12px] sm:text-xs font-normal'>
                                   Credits
                              </h4>
                              <h4 className='dark:text-light text-xs font-semibold'>
                                   4.3
                              </h4>
                         </div>
                    </div>
                    <button className='border border-[#5E5A5A] text-[#5E5A5A] font-inter w-fit
                    rounded-full text-[10px] p-1 text-xs
                    dark:border-light dark:text-light hover:bg-bluePrimary 
                    hover:border-transparent hover:text-light dark:hover:border-transparent
                    dark:hover:bg-bluePrimary transition-all duration-300'>
                         Buy Now!
                    </button>
               </div>
          </div>
     )
}