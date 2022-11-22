import create from 'zustand'
import { Transaction } from './types'

interface TransactionStore {
  error: string | null
  isLoading: boolean
  transactions: Transaction[]
  setIsLoading: (isLoading: boolean) => void
  setTransactions: (transactions: Transaction[]) => void
}

export const useTransactionsStore = create<TransactionStore>((set, get) => ({
  error: null as string | null,
  isLoading: false,
  transactions: [],
  setIsLoading: (isLoading) => set({ isLoading }),
  setTransactions: async (transactions) => set({ transactions }),
}))
