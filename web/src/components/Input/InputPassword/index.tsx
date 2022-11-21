import { InputHTMLAttributes } from 'react'
import { Control, FieldError, RegisterOptions } from 'react-hook-form'
import { TbLock } from 'react-icons/tb'
import { Input } from '..'

interface InputPasswordProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError
  control?: Control
  validate?: RegisterOptions
}

export function InputPassword({
  error,
  control,
  validate,
  ...props
}: InputPasswordProps) {
  return (
    <Input.Root error={error} required={props.required}>
      <Input.Icon>
        <TbLock />
      </Input.Icon>

      <Input.Input
        id="password"
        type="password"
        name="password"
        placeholder="Senha"
        control={control}
        validate={validate}
        {...props}
      />
    </Input.Root>
  )
}
