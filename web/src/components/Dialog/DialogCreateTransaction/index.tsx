import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { InputName } from 'components/Input/InputName'
import { useTheme } from 'contexts/ThemeContext'
import { useTransactions } from 'libs/transaction/hooks'
import {
  CreateTransactionFormData,
  createTransactionSchema,
} from 'libs/transaction/schemas'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { getApiErrorMessage } from 'utils/apiErrors'
import { showToastError, showToastSuccess } from 'utils/toasts'
import { Dialog } from '..'
import { DialogButtonsContainer } from '../styles'
import { CreateTransactionForm } from './styles'

export function DialogCreateTransaction() {
  const [isLoading, setIsLoading] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const { theme } = useTheme()

  const { createTransactionMutation } = useTransactions()

  const createTransactionForm = useForm<CreateTransactionFormData>({
    resolver: zodResolver(createTransactionSchema),
    defaultValues: {
      username: '',
      value: 0,
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = createTransactionForm

  const isSubmitDisabled =
    !!errors.username || !!errors.value || !watch('username') || !watch('value')

  const handleCreateTransaction = async ({
    username,
    value,
  }: CreateTransactionFormData) => {
    setIsLoading(true)

    console.log('username', username)
    console.log('value', value)

    try {
      await createTransactionMutation.mutateAsync({
        username,
        value,
      })

      showToastSuccess(theme, 'Transação feita com sucesso!')
      setIsDialogOpen(false)

      reset()
    } catch (error) {
      const errorMessage = getApiErrorMessage(error)

      showToastError(theme, errorMessage)
    }

    setIsLoading(false)
  }

  return (
    <Dialog
      isDialogOpen={isDialogOpen}
      setIsDialogOpen={setIsDialogOpen}
      title="Fazer Transação"
      triggerText="Fazer Transação"
    >
      <CreateTransactionForm onSubmit={handleSubmit(handleCreateTransaction)}>
        <InputName required error={errors.username} control={control as any} />

        <Input.Root
          error={errors.value}
          required
          label="Valor (R$)"
          labelFor="value"
        >
          <Input.Input
            id="value"
            name="value"
            step={0.01}
            min={0}
            max={1000000}
            type="number"
            placeholder="Valor"
            control={control as any}
          />
        </Input.Root>

        <DialogButtonsContainer>
          <Button
            type="submit"
            title="Enviar"
            isFullWidth
            isLoading={isLoading}
            disabled={isSubmitDisabled}
          >
            Enviar
          </Button>

          <Button
            type="button"
            title="Cancelar"
            isFullWidth
            onClick={() => {
              setIsDialogOpen(false)
              reset()
            }}
          >
            Cancelar
          </Button>
        </DialogButtonsContainer>
      </CreateTransactionForm>
    </Dialog>
  )
}
