import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useTheme } from 'contexts/ThemeContext'
import { getApiErrorMessage } from 'utils/apiErrors'
import { showToastError } from 'utils/toasts'
import { createTransaction, getTransactions } from './api'
import { useTransactionsStore } from './store'

export const useTransactionsQuery = () => {
  const { setTransactions } = useTransactionsStore()

  return useQuery(['transactions'], () => getTransactions(), {
    onSuccess: (data) => {
      setTransactions(data)
    },
  })
}

export const useUpdateModule = () => {
  const { theme } = useTheme()

  const queryClient = useQueryClient()

  const createTransactionMutation = useMutation(createTransaction, {
    onSuccess: () => {
      queryClient.invalidateQueries(['trail'])
    },
    onError: (error) => {
      const errorMessage = getApiErrorMessage(error)

      showToastError(theme, errorMessage)
    },
  })

  return {
    createTransactionMutation,
  }
}
