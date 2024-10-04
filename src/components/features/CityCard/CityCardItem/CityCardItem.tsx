import styled from 'styled-components'
import { CityCardItemProps } from '../../../../utils/types'
import Text from '../../../commons/Text/Text'
import Image from '../../../commons/Image/Image'

const StyledProfileCardItem = styled.li`
  width: 400px;
  padding: 15px 20px 20px 20px;
  border-radius: 10px;
  background: var(--color-gray-opacity-50);
  box-sizing: border-box;
`

const StyledTitle = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 3px 9px;
  line-height: normal;

  .year {
    line-height: normal;
  }
`

const Thumb = styled.div`
  width: 360px;
  height: 228px;
  border-radius: 5px;
  overflow: hidden;
`

const StyledContentsText = styled(Text)`
  margin: 20px 3px 3px 3px;
  display: -webkit-box;
  line-height: normal;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
`

const CityCardItem = ({
  year,
  country,
  city,
  contents,
  imgPath,
  imgAlt,
}: CityCardItemProps) => {
  const title = `${country}, ${city}`

  return (
    <StyledProfileCardItem>
      <StyledTitle forwardedAs="strong" size="lv3">
        {title}
        <Text
          as="span"
          size="m"
          fontFamily="secondary"
          fontWeight="normal"
          className="year"
        >
          {year}
        </Text>
      </StyledTitle>

      <Thumb>
        <Image
          title={title}
          imgPath={imgPath}
          imgAlt={imgAlt}
          width={360}
          height={228}
        />
      </Thumb>
      {contents && (
        <StyledContentsText size="s" fontFamily="secondary">
          {contents}
        </StyledContentsText>
      )}
    </StyledProfileCardItem>
  )
}

export default CityCardItem
