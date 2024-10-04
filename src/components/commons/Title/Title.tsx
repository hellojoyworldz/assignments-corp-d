import styled from 'styled-components'
import { createTypography } from '../../../styles/helper'
import { TitleProps } from '../../../utils/types'

const StyledTitle = styled.h1<TitleProps>`
  ${({ fontFamily }) =>
    fontFamily && `font-family: var(--font-family-${fontFamily});`}
  ${({ size }) => size && createTypography(size)};
  ${({ size }) => size === 'lv1' && 'font-weight: normal;'}
  ${({ lineHeight }) =>
    lineHeight && `line-height: var(--line-height-${lineHeight});`}
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight}`};
  ${({ color }) => color && `color: var(--color-${color});`}
  ${({ lineclamp }) =>
    lineclamp &&
    `
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${lineclamp};
  `}
`

const Title = ({ children, as = 'h1', size = 'lv1', ...props }: TitleProps) => {
  return (
    <StyledTitle as={as} size={size} {...props}>
      {children}
    </StyledTitle>
  )
}

export default Title
