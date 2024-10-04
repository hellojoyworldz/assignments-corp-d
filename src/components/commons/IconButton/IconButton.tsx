import { IconButtonProps } from '../../../utils/types'

const IconButton = ({
  iconType = 'submit',
  iconPath,
  iconAlt,
  onIconClick,
  ...props
}: IconButtonProps) => {
  return (
    <button type={iconType} onClick={onIconClick} {...props}>
      <img src={iconPath} alt={iconAlt} />
    </button>
  )
}

export default IconButton
