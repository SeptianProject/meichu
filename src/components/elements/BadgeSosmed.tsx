import { badgeSosmedItems } from '../../assets/assets'

const BadgeSosmed = () => {

     return (
          <>
               {badgeSosmedItems.map((item, index) => (
                    <div key={index} className='bg-[#D9D9D9] flex justify-center items-center rounded-xl size-11'>
                         <a href={item.link} target='_blank'>
                              <img className='size-6' src={item.icon} alt="" />
                         </a>
                    </div>
               ))}
          </>
     )
}

export default BadgeSosmed