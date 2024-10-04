import styled from 'styled-components'

const StyledNoimage = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: var(--color-white);
  background-color: var(--color-gray);
`

const Noimage = () => {
  return <StyledNoimage>No Image</StyledNoimage>
}

export default Noimage
