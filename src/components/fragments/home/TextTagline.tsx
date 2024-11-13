type TextTaglineProps = {
     text: string
     className?: string
}

const TextTagline = ({ text, className }: TextTaglineProps) => {
     return (
          <div className={`flex flex-col gap-y-2 ${className}`}>
               <h1 className="text-2xl font-semibold uppercase">{text}</h1>
               <div className="w-full h-[3px] rounded-full bg-gradient-to-r 
                         from-[#6A45BE] to-[#312058] to-50%" />
          </div>
     )
}

export default TextTagline