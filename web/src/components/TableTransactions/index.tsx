import { Heading } from 'components/Heading'
import { Loader } from 'components/Loader'
import { useTheme } from 'contexts/ThemeContext'
import { useTransactionsQuery } from 'libs/transaction/hooks'
import { useTransactionsStore } from 'libs/transaction/store'
import { StyledTable, TableTransactionsSection } from './styles'

export function TableTransactions() {
  const { theme } = useTheme()

  const { isLoading } = useTransactionsQuery()

  const { transactions } = useTransactionsStore()

  return (
    <TableTransactionsSection>
      <Heading asChild size="lg">
        <h1>Transações</h1>
      </Heading>

      {isLoading ? (
        <Loader />
      ) : (
        <StyledTable theme={theme}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Valor</th>
              <th>Conta Creditada</th>
              <th>Conta Debitada</th>
              <th>Data</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.formattedValue}</td>
                <td>{transaction.creditedAccount.user.username}</td>
                <td>{transaction.debitedAccount.user.username}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      )}
    </TableTransactionsSection>
  )
}
