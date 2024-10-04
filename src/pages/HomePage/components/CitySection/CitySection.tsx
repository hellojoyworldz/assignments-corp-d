import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Title from '../../../../components/commons/Title/Title'
import CityCardList from '../../../../components/features/CityCard/CityCardList/CityCardList'
import TabFilter from '../../../../components/composites/TabFilter/TabFilter'
import RangeButtonFilter from '../../../../components/composites/RangeButtonFilter/RangeButtonFilter'
import {
  CityContinentFilterData,
  CityRangeYearFilterData,
  cityCardData,
} from '../../../../utils/data'
import { CityCardItemProps } from '../../../../utils/types'

const StyledCitySection = styled.section`
  padding: 120px 0 80px 80px;
`

const CityFilters = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 68px;
`

const StyledCityTitle = styled(Title)`
  margin-bottom: 60px;
`

const CitySection = () => {
  // 대륙 id 초기값 - 첫번째 탭 선택되도록
  const [selectedContinentIds, setselectedContinentIds] = useState<number>(
    CityContinentFilterData[0].id,
  )
  // 년도 id 초기값 - 첫번쨰, 두번째 범위가 선택되도록
  const [selectedYearIds, setselectedYearIds] = useState<number[]>([
    CityRangeYearFilterData[0].id,
    CityRangeYearFilterData[1].id,
  ])
  const [filterCityCardData, setFilterCityCardData] = useState<
    CityCardItemProps[]
  >([])

  useEffect(() => {
    // 선택된 년도 가져오기
    const selectdYear = CityRangeYearFilterData.filter((item) =>
      selectedYearIds.includes(item.id),
    ).map((item) => item.value)

    // 6.
    // 선택된 대륙과 년도 필터링
    const data = cityCardData
      .filter((item) =>
        selectedContinentIds === 0
          ? item
          : item.continentId === selectedContinentIds,
      )
      .filter(
        (item) =>
          item.year >= Number(selectdYear[0]) &&
          item.year <= Number(selectdYear[selectdYear.length - 1]),
      )

    setFilterCityCardData(data)
  }, [selectedContinentIds, selectedYearIds])

  return (
    <StyledCitySection>
      <StyledCityTitle forwardedAs="h2" size="lv1">
        Duis tincidunt ut ligula vitae mollis.
      </StyledCityTitle>
      <CityFilters>
        <TabFilter
          data={CityContinentFilterData}
          selectedTab={selectedContinentIds}
          setSelectedTab={setselectedContinentIds}
        />
        <RangeButtonFilter
          data={CityRangeYearFilterData}
          selectedRange={selectedYearIds}
          setSelectedRange={setselectedYearIds}
        />
      </CityFilters>
      <CityCardList data={filterCityCardData} />
    </StyledCitySection>
  )
}

export default CitySection
