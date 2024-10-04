import styled from 'styled-components'
import { TabFilterProps } from '../../../utils/types'
import FilterButton from '../../commons/FilterButton/FilterButton'

const StyledTabFilter = styled.div`
  display: flex;
  gap: 5px;
  padding: 4px;
  width: fit-content;
  border: 1px solid var(--color-black-opacity-50);
  border-radius: 25px;
  box-sizing: border-box;
`

const TabFilter = ({ data, selectedTab, setSelectedTab }: TabFilterProps) => {
  return (
    <StyledTabFilter>
      {data.map((item) => (
        <FilterButton
          key={item.id}
          onClick={() => setSelectedTab && setSelectedTab(item.id)}
          className={selectedTab === item.id ? 'active' : ''}
        >
          {item.value}
        </FilterButton>
      ))}
    </StyledTabFilter>
  )
}

export default TabFilter
