import create from 'zustand'
import { Transaction } from './types'

interface TransactionStore {
  error: string | null
  isLoading: boolean
  transactions: Transaction[]
  transactionsDates: string[]
  userLoggedOut: boolean
  setIsLoading: (isLoading: boolean) => void
  setTransactions: (transactions: Transaction[]) => void
  setTransactionsDates: (transactionsDates: string[]) => void
  setUserLoggedOut: (userLoggedOut: boolean) => void
}

export const useTransactionsStore = create<TransactionStore>((set, get) => ({
  error: null as string | null,
  isLoading: false,
  userLoggedOut: false,
  transactions: [],
  transactionsDates: [],
  setIsLoading: (isLoading) => set({ isLoading }),
  setTransactions: async (transactions) => set({ transactions }),
  setTransactionsDates: async (transactionsDates) => set({ transactionsDates }),
  setUserLoggedOut: async (userLoggedOut) => set({ userLoggedOut }),
}))
