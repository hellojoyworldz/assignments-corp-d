import styled from 'styled-components'
import { RangeFilterProps } from '../../../utils/types'
import FilterButton from '../../commons/FilterButton/FilterButton'

const StyledRangeFilter = styled.div`
  padding: 4px;
  width: fit-content;
  min-width: 408px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid var(--color-black-opacity-50);
  box-sizing: border-box;
`
const ButtonBox = styled.div`
  position: relative;
  margin-right: 40px;
`
const StyledFilterButton = styled(FilterButton)`
  ${({ range }) => {
    return `
      position:absolute;
      left: ${range}%;
    `
  }}
`

const RangeFilter = ({ data }: RangeFilterProps) => {
  return (
    <StyledRangeFilter>
      <ButtonBox>
        {data.map((item) => (
          <StyledFilterButton key={item.id} range={item.range} $shape="circle">
            {item.value}
          </StyledFilterButton>
        ))}
      </ButtonBox>
    </StyledRangeFilter>
  )
}

export default RangeFilter
