import { assetsImage } from '../../assets/assets'
type StarProps = {
     className?: string
}

const Star = ({ className }: StarProps) => {
     return (
          <img className={`absolute ${className} size-12`} src={assetsImage.star} alt="star" />
     )
}

export default Star