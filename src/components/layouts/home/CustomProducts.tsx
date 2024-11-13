const CustomProducts = () => {
     return (
          <div className="min-h-screen flex items-center justify-between">
               <div className="max-w-[40vw] flex flex-col gap-y-5">
                    <h1 className="text-4xl font-bold">
                         Make it the style of your
                         <span className="text-blue-600"> dreams!</span>
                    </h1>
                    <p className="font-light text-lg tracking-wide leading-relaxed">
                         Hey there! We know you've got a great style, and we're here to help you make it even more attractive! Meichu products from Imvu using imvu+ make your style look HD and high-quality
                    </p>
                    <div className="flex items-center gap-x-5">
                         <button className="bg-blue-600 text-light rounded-full w-40 py-2">Custom Product</button>
                         <button className="bg-transparent text-light border border-light rounded-full w-40 py-2">More Products</button>
                    </div>
               </div>
               <div>
               </div>
          </div>
     )
}

export default CustomProducts