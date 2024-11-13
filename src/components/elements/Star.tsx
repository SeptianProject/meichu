import { assetsImage } from '../../assets/assets'
type StarProps = {
     className?: string
}

const Star = ({ className }: StarProps) => {
     return (
          <img className={`absolute ${className} size-5 lg:size-12`}
               src={assetsImage.Star} alt="star" />
     )
}

export default Star