import { forwardRef } from 'react'
import styled from 'styled-components'
import { TextFieldProps } from '../../../utils/types'
import IconButton from '../../commons/IconButton/IconButton'
import ErrorMessage from '../../commons/ErrorMessage/ErrorMessage'

const StyledTextField = styled.div`
  padding-bottom: 40px;
`

const InputField = styled.div`
  position: relative;
  padding: 4px 50px 4px 4px;
  width: 100%;
  height: 50px;
  line-height: 100%;
  border: 1px solid var(--color-white);
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  box-sizing: border-box;

  &.focused {
    border-color: var(--color-success);
  }

  &.error {
    border-color: var(--color-error);

    .icon__error {
      cursor: unset;
      img {
        filter: contrast(0.5);
      }
    }
  }
`

const Input = styled.input`
  padding: 0 16px;
  width: 100%;
  height: 100%;
  color: var(--color-white);
  box-sizing: border-box;
  &::placeholder {
    color: var(--color-white);
  }
`

const StyledIconButton = styled(IconButton)`
  position: absolute;
  top: 50%;
  margin-top: -16px;
  right: 10px;
  width: 32px;
  height: 32px;
`

const StyledErrorMessage = styled(ErrorMessage)`
  position: absolute;
  margin-top: 9px;
  margin-left: 16px;
`

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      id,
      type = 'text',
      value,
      placeholder,
      errorMessage,
      isFieldError,
      validate,
      isFocused,
      setIsFocused,
      onChange,
      iconType = 'submit',
      iconPath,
      iconAlt,
    },
    ref,
  ) => {
    const focused = isFocused ? 'focused' : ''
    const error = isFieldError ? 'error' : ''

    // 포커스 일 때
    const handleFocus = () => {
      setIsFocused(true)
    }

    // 포커스 아웃 일 때
    const handleBlur = () => {
      if (value) {
        validate(value)
      }
      setIsFocused(false)
    }

    return (
      <StyledTextField>
        <InputField
          ref={ref}
          onFocus={() => handleFocus()}
          onBlur={() => handleBlur()}
          className={`${focused} ${error}`}
        >
          <Input
            id={id}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
          <StyledIconButton
            disabled={isFieldError}
            className="icon__error"
            iconType={iconType}
            iconPath={iconPath}
            iconAlt={iconAlt}
          />
        </InputField>
        {isFieldError && (
          <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
        )}
      </StyledTextField>
    )
  },
)

export default TextField
