import { assetsImage } from "../../assets/assets"
import TextTagline from "../fragments/home/TextTagline"
import RouteHistory from "../layouts/RouteHistory"


const CustomProductPage = () => {
     return (
          <section className="px-7 space-y-16 lg:px-20">
               <div className="space-y-10">
                    <RouteHistory currentRoute="/custom-product" currentText="Custom Product" />
                    <TextTagline text="custom product" className="font-semibold" />
               </div>
               {/* Type Custom */}
               <div className="space-y-8">
                    <div className="space-y-1">
                         <h3 className="font-semibold text-xl">Custom Product Type For Custom</h3>
                         <p className="font-extralight text-opacity-80">They All Serve The Same Purpose, But Each One Takes.</p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5">
                         <div className="h-28 border border-[#5E5A5A] rounded-2xl 
                         flex items-center gap-x-5 px-5 w-full">
                              <div className="bg-[#303037] w-28 h-20 rounded-xl 
                         flex items-center justify-center">
                                   <img className="size-10 object-cover"
                                        src={assetsImage.SingleEmoji} alt="" />
                              </div>
                              <h2 className="font-semibold">Create Single Product</h2>
                         </div>
                         <div className="h-28 border border-[#5E5A5A] rounded-2xl 
                         flex items-center gap-x-5 px-5 w-full">
                              <div className="bg-[#303037] w-28 h-20 rounded-xl 
                         flex items-center justify-center">
                                   <img className="size-14 object-cover"
                                        src={assetsImage.DuoEmoji} alt="" />
                              </div>
                              <h2 className="font-semibold">Create Bundle</h2>
                         </div>
                    </div>
               </div>
               {/* Upload Image */}
               <div className="space-y-8">
                    <div className="space-y-2">
                         <h1 className="font-semibold text-xl">Upload Your Product</h1>
                         <p className="font-extralight text-opacity-80">They All Serve The Same Purpose, But Each One Takes.But Each One Takes A Different Approach And Makes Different Tradeoffs.</p>
                    </div>
                    <div className="h-64 flex flex-col items-center gap-y-4 justify-center 
                    rounded-2xl bg-[#1F1F2C] lg:h-96">
                         <input className="size-16 lg:size-28" type="image" src={assetsImage.CloudSend} alt="" />
                         <div className="text-center space-y-2">
                              <h1 className="text-xl font-semibold lg:text-2xl">Drag your item to upload</h1>
                              <p className="text-xs text-opacity-60 lg:text-sm">PNG, GIF, WebP, MP4 Or MP3. Maximum File Size 100 Mb</p>
                         </div>
                    </div>
               </div>
               {/* Name Product */}
               <div className="space-y-8">
                    <h1 className="text-xl fontsemi">Name Your Peoduct</h1>
                    <input type="text" placeholder="E.G Redeemable T-Shirt With Logo"
                         className="text-light font-poppins text-opacity-70 bg-transparent border 
                         border-[#5E5A5A] w-full py-8 rounded-2xl px-10" />
               </div>
               {/* Choose Type */}
               <div className="space-y-8">
                    <div className="space-y-1">
                         <h3 className="font-semibold text-xl">Choose Type Product</h3>
                         <p className="font-extralight text-opacity-80">They All Serve The Same Purpose</p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5">
                         <div className="h-28 border border-[#5E5A5A] rounded-2xl flex 
                         items-center gap-x-5 px-5 w-full">
                              <div className="bg-[#303037] w-28 h-20 rounded-xl 
                         flex items-center justify-center">
                                   <img className="size-10 object-cover"
                                        src={assetsImage.SingleEmoji} alt="" />
                              </div>
                              <h2 className="font-semibold">Imvu+</h2>
                         </div>
                         <div className="h-28 border border-[#5E5A5A] rounded-2xl flex 
                         items-center gap-x-5 px-5 w-full">
                              <div className="bg-[#303037] w-28 h-20 rounded-xl 
                         flex items-center justify-center">
                                   <img className="size-14 object-cover"
                                        src={assetsImage.DuoEmoji} alt="" />
                              </div>
                              <h2 className="font-semibold">Non Imvu+</h2>
                         </div>
                    </div>
               </div>
               {/* Username */}
               <div className="space-y-8">
                    <h1 className="text-xl font-semibold">Enter Your Name</h1>
                    <input type="text" placeholder="Ex: Sepatianzz"
                         className="text-light font-poppins text-opacity-70 bg-transparent border 
                         border-[#5E5A5A] w-full py-8 rounded-2xl px-10"/>
               </div>
               {/* Button */}
               <div className="flex items-center gap-x-5 pb-20 lg:pb-0">
                    <button className="text-[#5E5A5A] border border-[#5E5A5A] 
                    bg-transparent rounded-full w-36 py-3 lg:w-44">
                         Cancel
                    </button>
                    <button className="text-light border border-transparent 
                    bg-bluePrimary rounded-full w-36 py-3 lg:w-44">
                         Publish
                    </button>
               </div>
          </section>
     )
}

export default CustomProductPage