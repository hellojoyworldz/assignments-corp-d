import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LinkToProps } from '../../../utils/types'

const StyledLink = styled(Link)`
  font-weight: bold;
  font-size: var(--font-size-l);
  line-height: var(--line-height-l);
  color: var(--color-link);

  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`

const LinkTo = ({ children, to, ...props }: LinkToProps) => {
  return (
    <>
      <StyledLink to={to} {...props}>
        {children}
      </StyledLink>
    </>
  )
}

export default LinkTo
