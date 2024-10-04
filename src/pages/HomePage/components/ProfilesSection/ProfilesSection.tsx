import styled from 'styled-components'
import { ProfileCardItemProps } from '../../../../utils/types'
import Title from '../../../../components/commons/Title/Title'
import ProfileCardList from '../../../../components/features/ProfileCard/ProfileCardList/ProfileCardList'
import { profileItemData } from '../../../../utils/data'

const StjyledProfilesSection = styled.section`
  padding: 120px 80px 110px 80px;
`
const StyledProfileTitle = styled(Title)`
  margin-bottom: 70px;
`
// 3.
// 배열의 순서가 랜덤으로 바뀌는 함수
const randomIndex = (ary: ProfileCardItemProps[]) => {
  return ary.sort(() => Math.random() - 0.5)
}

const ProfilesSection = () => {
  return (
    <StjyledProfilesSection>
      <StyledProfileTitle forwardedAs="h2" size="lv1">
        Snap photos and share like
        <br />
        never before
      </StyledProfileTitle>
      <ProfileCardList data={randomIndex(profileItemData)} />
    </StjyledProfilesSection>
  )
}

export default ProfilesSection
