type TextTaglineProps = {
     text: string
     className?: string
}

const TextTagline = ({ text, className }: TextTaglineProps) => {
     return (
          <div className={`flex flex-col gap-y-2 w-fit`}>
               <h1 className={`text-2xl dark:text-light uppercase ${className}`}>{text}</h1>
               <div className="w-full h-[3px] rounded-full bg-gradient-to-r 
                         from-[#6A45BE] to-transparent dark:to-[#312058] dark:to-50%" />
          </div>
     )
}

export default TextTagline