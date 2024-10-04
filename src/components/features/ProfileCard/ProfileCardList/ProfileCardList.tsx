import { styled } from 'styled-components'
import { ProfileCardListProps } from '../../../../utils/types'
import ProfileCardItem from '../ProfileCardItem/ProfileCardItem'

const StyledProfileCardList = styled.ul`
  display: flex;
  gap: 20px;
`

const ProfileCardList = ({ data }: ProfileCardListProps) => {
  return (
    <StyledProfileCardList>
      {data.map((item) => (
        <ProfileCardItem
          id={item.id}
          key={item.id}
          title={item.title}
          contents={item.contents}
          imgPath={item.imgPath}
          imgAlt={item.imgAlt}
          link={item.link}
        />
      ))}
    </StyledProfileCardList>
  )
}

export default ProfileCardList
