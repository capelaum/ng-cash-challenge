import { useTransactionsStore } from 'libs/transaction/store'
import { GetTransactionsFilters } from 'libs/transaction/types'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Select } from '..'

interface SelectTransactionCreatedAtProps {
  setTransactionsFilters: Dispatch<SetStateAction<GetTransactionsFilters>>
}

export function SelectTransactionCreatedAt({
  setTransactionsFilters,
}: SelectTransactionCreatedAtProps) {
  const [selectedValue, setSelectedValue] = useState('all')
  const initialItems = [
    {
      value: '',
      text: 'Data',
    },
  ]

  const { transactionsDates } = useTransactionsStore()

  const transactionsDatesItems = transactionsDates.map((date) => ({
    value: date,
    text: date,
  }))

  const allTransactionsDates = [...initialItems, ...transactionsDatesItems]

  useEffect(() => {
    if (selectedValue === 'all') {
      setTransactionsFilters((v) => ({
        ...v,
        createdAt: '',
      }))
    }

    if (selectedValue !== 'all') {
      setTransactionsFilters((v) => ({
        ...v,
        createdAt: selectedValue,
      }))
    }
  }, [selectedValue, setTransactionsFilters])

  return (
    <Select
      items={allTransactionsDates}
      title="Selecione a data da transação"
      ariaLabel="Selecione a data da transação"
      placeholder="Data"
      onValueChange={(value) => {
        setSelectedValue(value)
      }}
    />
  )
}
