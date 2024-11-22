type textTitleValueProps = {
     title: string
     value: string
}

const TextTitleValue: React.FC<textTitleValueProps> = ({ title, value }) => {
     return (
          <div className=''>
               <h2 className='text-lg font-semibold tracking-wide dark:text-light/70'>{title}</h2>
               <p className='text-[14px] font-light tracking-wide dark:text-light/60 lg:font-extralight'>{value}</p>
          </div>
     )
}

export default TextTitleValue