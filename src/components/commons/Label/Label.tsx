import styled from 'styled-components'
import { LabelProps, commonDesignProps } from '../../../utils/types'

const StyledLabel = styled.label<commonDesignProps>`
  display: block;
  font-weight: bold;
  font-size: var(--font-size-m);
  line-height: var(--line-height-normal);
  color: var(--color-white);
  letter-spacing: var(--letter-spacing-default);
`

const Label = ({ children, htmlFor, ...props }: LabelProps) => {
  return (
    <StyledLabel htmlFor={htmlFor} {...props}>
      {children}
    </StyledLabel>
  )
}

export default Label
