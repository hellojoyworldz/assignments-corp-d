import { css } from 'styled-components'

export const createTypography = <T extends string>(fontSize: T) => css`
  font-size: var(--font-size-${fontSize});
  line-height: var(--line-height-${fontSize});
  letter-spacing: var(--letter-spacing-default);
`
