import { useState } from 'react'
import styled from 'styled-components'
import { ImageProps } from '../../../utils/types'
import Noimage from '../Noimage/Noimage'

const StyledImage = styled.img`
  object-fit: cover;
  object-position: center;
`

const Image = ({
  title,
  imgPath,
  imgAlt,
  width,
  height,
  ...props
}: ImageProps) => {
  const [imageError, setImageError] = useState(false)

  return (
    <>
      {imgPath && !imageError ? (
        <StyledImage
          src={imgPath}
          alt={imgAlt ? imgAlt : title}
          width={width}
          height={height}
          onError={() => setImageError(true)}
          {...props}
        />
      ) : (
        <Noimage />
      )}
    </>
  )
}

export default Image
