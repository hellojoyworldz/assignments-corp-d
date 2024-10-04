import { styled } from 'styled-components'
import Title from '../../components/commons/Title/Title'
import ProfilesSection from './components/ProfilesSection/ProfilesSection'
import SubscribeSection from './components/SubscribeSection/SubscribeSection'
import CitySection from './components/CitySection/CitySection'

const StyledHomepage = styled.main`
  margin: 0 auto;
  width: var(--width-inner);
`

const HomePage = () => {
  return (
    <StyledHomepage>
      <Title className="hidden">Difluid Recruitment Challenges</Title>
      <ProfilesSection />
      <SubscribeSection />
      <CitySection />
    </StyledHomepage>
  )
}

export default HomePage
