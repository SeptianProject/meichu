type BadgeSosmedItem = {
     className: string;
     badgeItems: {
          icon: string;
          link: string;
     }[]
}

const ListBadgeSosmed = ({ className, badgeItems }: BadgeSosmedItem) => {
     return (
          <>
               {badgeItems.map((item, index) => (
                    <div key={index} className={`flex justify-center 
                    items-center size-11 ${className}`}>
                         <a href={item.link} target='_blank'>
                              <img className='size-6' src={item.icon} alt="" />
                         </a>
                    </div>
               ))}
          </>
     )
}

export default ListBadgeSosmed