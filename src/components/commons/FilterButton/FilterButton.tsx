import styled from 'styled-components'
import { ButtonProps } from '../../../utils/types'

const StyledButton = styled.button<ButtonProps>`
  height: 40px;
  font-size: 16px;
  line-height: 0;
  border: 0;

  ${({ $shape }) => {
    if ($shape === 'circle') {
      return `
        width: 40px;
        font-size:var(--font-size-s);
        color: var(--color-white);
        background: var(--color-dark-gray);
        border-radius:50%;
      `
    } else if ($shape === 'capsule') {
      return `
        padding: 0 16px;
        min-width: 64px;
        color: var(--color-black);
        background: var(---color-white);
        border-radius: 25px;
      `
    }
  }}

  &.active, &:hover {
    color: var(--color-white);
    background: var(--color-black);
  }
`

const FilterButton = ({
  children,
  $shape = 'capsule',
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton $shape={$shape} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  )
}

export default FilterButton
