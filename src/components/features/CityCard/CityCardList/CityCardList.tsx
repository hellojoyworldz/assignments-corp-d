import styled from 'styled-components'
import { CityCardListProps } from '../../../../utils/types'
import CityCardItem from '../CityCardItem/CityCardItem'
import Text from '../../../commons/Text/Text'

const StyledCityCardList = styled.div`
  min-height: 416px;
`

const StyledProfileCardList = styled.ul`
  display: flex;
  gap: 40px;
  width: 100%;
  overflow-x: auto;
`

const CityCardList = ({ data }: CityCardListProps) => {
  return (
    <StyledCityCardList>
      {data.length > 0 ? (
        <StyledProfileCardList>
          {data.map((item) => (
            <CityCardItem
              key={item.id}
              id={item.id}
              continentId={item.continentId}
              continent={item.continent}
              year={item.year}
              country={item.country}
              city={item.city}
              contents={item.contents}
              imgPath={item.imgPath}
              imgAlt={item.imgAlt}
            />
          ))}
        </StyledProfileCardList>
      ) : (
        // 6. 데이터가 없을 때
        <Text size="lv2">
          Sorry, <br />
          there is no data that matches the condition
        </Text>
      )}
    </StyledCityCardList>
  )
}

export default CityCardList
