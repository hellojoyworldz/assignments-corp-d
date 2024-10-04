import { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import { validateEmail } from '../../../../utils/regex'
import Title from '../../../../components/commons/Title/Title'
import Text from '../../../../components/commons/Text/Text'
import Label from '../../../../components/commons/Label/Label'
import TextField from '../../../../components/composites/TextField/TextField'
import useFetchImage from '../../../../hooks/useFetchImage'

const StyledSubscribeSection = styled.section<{
  $bg: string | null
}>`
  position: relative;
  padding: 152px 80px 112px 80px;
  text-align: center;
  background-color: #ddd;
  background-image: url(${({ $bg }) => $bg});
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-black-opacity-50);
    z-index: -1;
  }
`

const SubscribseSectionTitle = styled(Title)`
  margin-bottom: 23px;
`

const StyledInfoText = styled(Text)`
  position: relative;
  margin-top: 32px;
  padding-top: 32px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--color-white-opacity-50);
  }
`

const SendEmailForm = styled.div`
  margin: 116px auto 0;
  width: 500px;
`

const StyledFieldLabel = styled(Label)`
  margin-bottom: 16px;
`

const SubscribeSection = () => {
  const [email, setEmail] = useState<string>('')
  const [isEmailError, setIsEmailError] = useState<boolean>(false)
  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false)
  const emailRef = useRef<HTMLInputElement>(null)

  // 4.
  // 배경 이미지
  const { image: bg } = useFetchImage()

  // 5.
  // 이메일이 비어있을 때는 오류 메시지 없애기
  useEffect(() => {
    if (email === '') {
      setIsEmailError(false)
    }
  }, [email])

  // 이메일 에러 처리 함수
  const handleEmailError = (value: string) => {
    if (value === '') {
      setIsEmailError(true)
      console.log('email error')
    } else if (validateEmail(value)) {
      setIsEmailError(false)
    } else {
      setIsEmailError(true)
    }
  }

  // 이메일 입력 할 때 - 유효할 때는 오류 메시지 없애기
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (validateEmail(email)) {
      setIsEmailError(false)
    }
  }

  // 이메일 보낼 떄
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleEmailError(email)
    if (validateEmail(email)) {
      emailRef.current?.blur()
      setEmail('')
      alert('Success Subscribe')
    }
  }

  return (
    <StyledSubscribeSection $bg={bg}>
      <SubscribseSectionTitle forwardedAs="h2" size="lv2" color="white">
        Sed ut perspiciatis unde omnis
      </SubscribseSectionTitle>
      <Text fontFamily="secondary" color="white-opacity-80" size="l">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary.
      </Text>
      <StyledInfoText fontFamily="secondary" color="white-opacity-60">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore.
      </StyledInfoText>
      <SendEmailForm>
        <form onSubmit={(e) => handleSubmit(e)}>
          <StyledFieldLabel htmlFor="email">
            Subscribe to our newsletter
          </StyledFieldLabel>
          <TextField
            ref={emailRef}
            id="email"
            value={email}
            placeholder="Enter your email"
            errorMessage="Please enter a valid email!"
            isFieldError={isEmailError}
            validate={handleEmailError}
            isFocused={isEmailFocused}
            setIsFocused={setIsEmailFocused}
            iconPath="/images/ico_send.svg"
            iconAlt="send"
            onChange={handleChangeEmail}
          />
        </form>
      </SendEmailForm>
    </StyledSubscribeSection>
  )
}

export default SubscribeSection
