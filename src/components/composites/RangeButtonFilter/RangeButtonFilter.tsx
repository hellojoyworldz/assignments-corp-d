import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { RangeFilterProps } from '../../../utils/types'
import FilterButton from '../../commons/FilterButton/FilterButton'

const StyledRangeButtonFilter = styled.div<{
  $barWidth: number
  $barLeft: number
}>`
  position: relative;
  display: flex;
  gap: 76px;
  padding: 4px;
  width: fit-content;
  height: 50px;
  border-radius: 25px;
  border: 1px solid var(--color-black-opacity-50);
  box-sizing: border-box;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 5px;
    top: 50%;
    margin-top: -5px;
    width: calc(100% - 10px);
    height: 10px;
  }

  &:before {
    background: var(--color-dark-gray);
    z-index: -2;
  }

  &:after {
    margin-left: 5px;
    margin-right: 5px;
    left: ${({ $barLeft }) => $barLeft}%;
    width: calc(${({ $barWidth }) => $barWidth}% - 8px);
    background: var(--color-black);
    z-index: -1;
  }
`

const MAXIMUM = 2 // 버튼 최대 선택 개수
const BAR_WIDTH = 33 // 바 기본 길이

const RangeButtonFilter = ({
  data,
  selectedRange,
  setSelectedRange,
}: RangeFilterProps) => {
  const [rangeLog, setRangeLog] = useState<number[]>(selectedRange)
  const [range, setRange] = useState<number[]>(selectedRange)
  const [barStyle, setBarStyle] = useState({
    barWidth: BAR_WIDTH,
    barLeft: 0,
  })

  const handleRangeClick = (id: number) => {
    const dataLength = data.length // 데이터(버튼) 개수
    const rangeLength = range.length // range 개수
    const nowSelected = range.indexOf(id) // 지금 선택한 값의 index
    const lastSelected = rangeLog[rangeLog.length - 1] // 이전에 선택된 값
    const isRangeIncludeId = range.includes(id) // range에 지금 선택한 값이 포함되어 있는지

    // 이전에 선택된 값, 지금 선택한 값 log
    setRangeLog([lastSelected, id])

    // 오름차순정렬, 중복이 제거된 선택값
    setRange(
      [...range, id]
        .sort((a, b) => a - b)
        .filter((el, idx, ary) => ary.indexOf(el) === idx),
    )

    // 6. 두번쨰 필터 범위 지정
    // 다 선택되어 있을 때
    //    if       지금 선택한 값 < 이전에 선택한 값
    //    else if  지금 선택한 값 > 이전에 선택한 값
    // 3개 이상, 데이터 개수 이하로 선택되어 있을 때
    //    if       지금 선택한 값 < 이전에 선택된 값 && 선택 되어있는 값일 때
    //    else if  지금 선택한 값 > 이전에 선택된 값 && 선택 되어있는 값일 때
    if (rangeLength >= dataLength) {
      if (id < lastSelected) {
        setRange(range.slice(nowSelected, lastSelected))
      } else if (id > lastSelected) {
        setRange(range.slice(lastSelected - 1, nowSelected + 1))
      }
    } else if (rangeLength > MAXIMUM && rangeLength < dataLength) {
      if (id < lastSelected && isRangeIncludeId) {
        setRange(range.slice(nowSelected))
      } else if (id > lastSelected && isRangeIncludeId) {
        setRange(range.slice(0, nowSelected + 1))
      }
    }
  }

  useEffect(() => {
    // 범위 사이에 값 선택하기
    for (let i = range[0]; i < range[range.length - 1]; i++) {
      if (!range.includes(i)) {
        setRange([...range, i].sort((a, b) => a - b))
      }
    }

    // bar 스타일링
    let barWidth
    let barLeft

    switch (range[range.length - 1] - range[0]) {
      case 1:
        barWidth = BAR_WIDTH
        break
      case 2:
        barWidth = BAR_WIDTH * 2
        break
      case 3:
        barWidth = BAR_WIDTH * 3
        break
      default:
        barWidth = BAR_WIDTH
        break
    }

    switch (range[0]) {
      case 1:
        barLeft = 0
        break
      case 2:
        barLeft = BAR_WIDTH
        break
      case 3:
        barLeft = BAR_WIDTH * 2
        break
      default:
        barLeft = 0
        break
    }

    setBarStyle({
      barWidth,
      barLeft,
    })

    // 최종 선택된 값 넣기
    if (setSelectedRange) {
      setSelectedRange(range)
    }
  }, [range, setSelectedRange])

  return (
    <StyledRangeButtonFilter
      $barWidth={barStyle.barWidth}
      $barLeft={barStyle.barLeft}
    >
      {data.map((item) => (
        <FilterButton
          key={item.id}
          range={item.range}
          $shape="circle"
          onClick={() => handleRangeClick(item.id)}
          className={selectedRange.includes(item.id) ? 'active' : ''}
        >
          {item.value}
        </FilterButton>
      ))}
    </StyledRangeButtonFilter>
  )
}

export default RangeButtonFilter
