import { styled } from 'styled-components'
import { ProfileCardItemProps } from '../../../../utils/types'
import Text from '../../../commons/Text/Text'
import LinkTo from '../../../commons/LinkTo/LinkTo'
import Image from '../../../commons/Image/Image'

const StyledProfileCardItem = styled.li`
  width: 493px;
`

const ProfileThumb = styled.div`
  margin-bottom: 40px;
  width: 108px;
  height: 108px;
  color: var(--color-white);
  background-color: var(--color-gray);
  border-radius: 50%;
  overflow: hidden;
`

const StyledProfileTitle = styled(Text)`
  display: block;
  margin-bottom: 24px;
`

const StyledLinkTo = styled(LinkTo)`
  display: inline-block;
  margin-top: 24px;
`

const ProfileCardItem = ({
  className,
  title,
  contents,
  imgPath,
  imgAlt,
  link,
}: ProfileCardItemProps) => {
  return (
    <StyledProfileCardItem className={className}>
      <ProfileThumb>
        <Image
          title={title}
          imgPath={imgPath}
          imgAlt={imgAlt}
          width={108}
          height={108}
        />
      </ProfileThumb>
      <StyledProfileTitle
        forwardedAs="strong"
        size="lv2"
        fontFamily="secondary"
      >
        {title}
      </StyledProfileTitle>
      {contents && (
        <Text fontFamily="secondary" size="l">
          {contents}
        </Text>
      )}
      {link && <StyledLinkTo to={link}>LEARN MORE</StyledLinkTo>}
    </StyledProfileCardItem>
  )
}

export default ProfileCardItem
