import styled from 'styled-components'
import Title from '../../components/commons/Title/Title'
import Text from '../../components/commons/Text/Text'
import LinkTo from '../../components/commons/LinkTo/LinkTo'

const StyledErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const ErrorPage404 = () => {
  return (
    <StyledErrorPage>
      <Title>404 - Page Not Found</Title>
      <Text>
        Sorry, the page you are looking for does not exist. Please check the URL
        or return to the homepage.
      </Text>
      <LinkTo to="/">HOME</LinkTo>
    </StyledErrorPage>
  )
}

export default ErrorPage404
