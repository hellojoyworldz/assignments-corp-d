import Text from '../Text/Text'
import { CommonProps } from '../../../utils/types'

const ErrorMessage = ({ children, ...props }: CommonProps) => {
  return (
    <Text as="p" size="s" color="error" {...props}>
      {children}
    </Text>
  )
}

export default ErrorMessage
