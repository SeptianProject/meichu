import { useState } from "react"

const CustomProducts = () => {
     const [products] = useState(() =>
          Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1))

     return (
          <div className="min-h-[50vh] lg:min-h-screen max-w-full
          flex items-center justify-between gap-x-10 overflow-hidden">
               <div className="max-w-full lg:max-w-[40vw] h-full flex flex-col gap-y-5">
                    <h1 className="dark:text-light text-3xl lg:text-4xl font-bold">
                         Make it the style of your
                         <span className="text-bluePrimary"> dreams!</span>
                    </h1>
                    <p className="dark:text-light font-light text-base lg:tracking-wide leading-relaxed">
                         Hey there! We know you've got a great style, and we're here to help you make it even more attractive! Meichu products from Imvu using imvu+ make your style look HD and high-quality
                    </p>
                    <div className="flex items-center gap-x-5">
                         <button className="bg-bluePrimary text-sm font-semibold text-light 
                         border border-transparent rounded-full w-32 py-3
                         lg:text-base lg:w-40">
                              Custom Product
                         </button>
                         <button className="bg-transparent text-sm font-semibold text-[#5E5A5A] dark:text-light 
                         border border-[#5E5A5A] dark:border-light rounded-full w-32 py-3
                         lg:text-base lg:w-40">
                              More Products
                         </button>
                    </div>
               </div>
               <div className="hidden lg:block relative w-full h-[60vh]">
                    <div className="absolute inset-x-0 grid grid-cols-4 grid-rows-3 gap-x-28 
                    gap-y-3 rotate-[20deg] transform -translate-x-20 -translate-y-60">
                         {products.map((product, index) => (
                              <div key={index} style={{
                                   animation: `float ${1 + index * 0.2}s infinite ease-in-out alternate`,
                              }}
                                   className="bg-bluePrimary/50 p-4 w-40 h-60 transform 
                                   transition-all duration-500 hover:scale-110">
                                   {product}
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     )
}

export default CustomProducts