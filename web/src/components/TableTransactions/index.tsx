import { Heading } from 'components/Heading'
import { Loader } from 'components/Loader'
import { SelectTransactionCreatedAt } from 'components/Select/SelectTransactionCreatedAt'
import { SelectTransactionType } from 'components/Select/SelectTransactionType'
import { useTheme } from 'contexts/ThemeContext'
import { useTransactionsQuery } from 'libs/transaction/hooks'
import { useTransactionsStore } from 'libs/transaction/store'
import { GetTransactionsFilters } from 'libs/transaction/types'
import { useState } from 'react'
import { FiltersWrapper, StyledTable, TableTransactionsSection } from './styles'

export function TableTransactions() {
  const [transactionsFilters, setTransactionsFilters] =
    useState<GetTransactionsFilters>({
      isOnlyCashOut: false,
      isOnlyCashIn: false,
      createdAt: '',
    })

  const { theme } = useTheme()

  const { isLoading } = useTransactionsQuery(transactionsFilters)

  const { transactions } = useTransactionsStore()

  return (
    <TableTransactionsSection>
      <Heading asChild size="lg">
        <h1>Transações</h1>
      </Heading>

      <FiltersWrapper>
        <SelectTransactionCreatedAt
          setTransactionsFilters={setTransactionsFilters}
        />

        <SelectTransactionType
          setTransactionsFilters={setTransactionsFilters}
        />
      </FiltersWrapper>

      {isLoading ? (
        <Loader />
      ) : (
        <StyledTable theme={theme}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Valor</th>
              <th>Usuário Creditado</th>
              <th>Usuário Debitado</th>
              <th>Data</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map(
              ({
                id,
                formattedValue,
                creditedAccount: {
                  user: { username: creditedUsername },
                },
                debitedAccount: {
                  user: { username: debitedUsername },
                },
                createdAt,
              }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{formattedValue}</td>
                  <td>{creditedUsername}</td>
                  <td>{debitedUsername}</td>
                  <td>{createdAt}</td>
                </tr>
              )
            )}
          </tbody>
        </StyledTable>
      )}
    </TableTransactionsSection>
  )
}
