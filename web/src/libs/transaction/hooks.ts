import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useTheme } from 'contexts/ThemeContext'
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

export const useTransactions = () => {
  const { theme } = useTheme()

  const queryClient = useQueryClient()

  const createTransactionMutation = useMutation(createTransaction, {
    onSuccess: () => {
      queryClient.invalidateQueries(['transactions'])
    },
  })

  return {
    createTransactionMutation,
  }
}
