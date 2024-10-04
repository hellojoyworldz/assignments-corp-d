import { styled } from 'styled-components'
import { createTypography } from '../../../styles/helper'
import { TextProps, commonDesignProps } from '../../../utils/types'

const StyledText = styled.p<commonDesignProps>`
  ${({ fontFamily }) =>
    fontFamily && `font-family: var(--font-family-${fontFamily});`}
  ${({ size }) => size && createTypography(size)};
  ${({ lineHeight }) =>
    lineHeight && `line-height: var(--line-height-${lineHeight});`}
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight}`};
  ${({ color }) => color && `color: var(--color-${color});`}
`

export const Text = ({
  children,
  as = 'p',
  size = 'm',
  ...props
}: TextProps) => {
  return (
    <StyledText as={as} size={size} {...props}>
      {children}
    </StyledText>
  )
}

export default Text
