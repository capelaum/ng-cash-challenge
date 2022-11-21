import { useTheme } from 'contexts/ThemeContext'
import { InputHTMLAttributes, ReactNode, useState } from 'react'
import {
  Control,
  Controller,
  FieldError,
  RegisterOptions,
} from 'react-hook-form'
import { TbEye, TbEyeOff } from 'react-icons/tb'
import {
  InputContainer,
  InputErrorMessage,
  InputIconWrapper,
  InputLabel,
  InputStyled,
  InputWrapper,
  ShowPasswordButton,
} from './styles'

export interface InputRootProps {
  children: ReactNode
  label?: string
  labelFor?: string
  disabled?: boolean
  error?: FieldError
  required?: boolean
}

function InputRoot({
  children,
  labelFor = '',
  label = '',
  disabled = false,
  error,
  required = false,
}: InputRootProps) {
  const { theme } = useTheme()

  return (
    <InputContainer>
      {label && (
        <InputLabel htmlFor={labelFor} theme={theme}>
          {label} {required && <span>*</span>}
        </InputLabel>
      )}

      <InputWrapper error={!!error} disabled={disabled} theme={theme}>
        {children}
      </InputWrapper>

      {error && (
        <InputErrorMessage theme={theme}>{error.message}</InputErrorMessage>
      )}
    </InputContainer>
  )
}

export interface InputIconProps {
  children: ReactNode
}

function InputIcon({ children }: InputIconProps) {
  const { theme } = useTheme()

  return <InputIconWrapper theme={theme}>{children}</InputIconWrapper>
}

export interface InputInputProps extends InputHTMLAttributes<HTMLInputElement> {
  control?: Control
  validate?: RegisterOptions
  name: string
}

export function InputInput({ validate, control, ...props }: InputInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const { theme } = useTheme()

  const handleShowPassword = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const showPassword = props.type === 'password' && isPasswordVisible

  return (
    <>
      {control ? (
        <Controller
          rules={validate}
          control={control}
          name={props.name}
          render={({ field: { onChange, value } }) => (
            <>
              <InputStyled
                {...props}
                type={showPassword ? 'text' : props.type}
                theme={theme}
                onChange={onChange}
                value={value}
              />
            </>
          )}
        />
      ) : (
        <InputStyled
          {...props}
          type={showPassword ? 'text' : props.type}
          theme={theme}
        />
      )}

      {props.type === 'password' && (
        <ShowPasswordButton
          type="button"
          title={isPasswordVisible ? 'Esconder senha' : 'Mostrar senha'}
          theme={theme}
          onClick={handleShowPassword}
        >
          {isPasswordVisible ? <TbEyeOff size={20} /> : <TbEye size={20} />}
        </ShowPasswordButton>
      )}
    </>
  )
}

InputRoot.displayName = 'Input.Root'
InputIcon.displayName = 'Input.Icon'
InputInput.displayName = 'Input.Input'

export const Input = {
  Root: InputRoot,
  Input: InputInput,
  Icon: InputIcon,
}
