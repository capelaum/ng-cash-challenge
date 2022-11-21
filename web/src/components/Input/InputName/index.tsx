import { InputHTMLAttributes } from 'react'
import { Control, FieldError, RegisterOptions } from 'react-hook-form'
import { MdPersonOutline } from 'react-icons/md'
import { Input } from '..'

interface NameImputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError
  errorMessage?: string
  control?: Control
  validate?: RegisterOptions
}

export function InputName({
  error,
  errorMessage = '',
  control,
  validate,
  ...props
}: NameImputProps) {
  return (
    <Input.Root error={error} required={props.required}>
      <Input.Icon>
        <MdPersonOutline />
      </Input.Icon>

      <Input.Input
        id="username"
        name="username"
        type="text"
        placeholder="Nome de usuário"
        control={control}
        validate={validate}
        {...props}
      />
    </Input.Root>
  )
}
