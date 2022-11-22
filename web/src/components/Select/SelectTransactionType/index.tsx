import { GetTransactionsFilters } from 'libs/transaction/types'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Select } from '..'

interface SelectTransactionTypeProps {
  setTransactionsFilters: Dispatch<SetStateAction<GetTransactionsFilters>>
}

const transactionTypes = [
  {
    value: 'all',
    text: 'Tipo de transação',
  },
  {
    value: 'cashIn',
    text: 'Entradas',
  },
  {
    value: 'cashOut',
    text: 'Saídas',
  },
]

export function SelectTransactionType({
  setTransactionsFilters,
}: SelectTransactionTypeProps) {
  const [selectedValue, setSelectedValue] = useState('all')

  useEffect(() => {
    if (selectedValue === 'all') {
      setTransactionsFilters((v) => ({
        ...v,
        isOnlyCashIn: false,
        isOnlyCashOut: false,
      }))
    }

    if (selectedValue === 'cashIn') {
      setTransactionsFilters((v) => ({
        ...v,
        isOnlyCashIn: true,
        isOnlyCashOut: false,
      }))
    }

    if (selectedValue === 'cashOut') {
      setTransactionsFilters((v) => ({
        ...v,
        isOnlyCashIn: false,
        isOnlyCashOut: true,
      }))
    }
  }, [selectedValue, setTransactionsFilters])

  return (
    <Select
      onValueChange={(value) => {
        setSelectedValue(value)
      }}
      items={transactionTypes}
      title="Selecione o tipo de transação"
      ariaLabel="Selecione o tipo de transação"
      placeholder="Tipo de transação"
    />
  )
}
