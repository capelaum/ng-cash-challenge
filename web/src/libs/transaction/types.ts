export type Transaction = {
  id: string
  value: number
  formattedValue: string
  createdAt: string
  debitedAccount: {
    id: string
    user: {
      username: string
    }
  }
  creditedAccount: {
    id: string
    user: {
      username: string
    }
  }
}

export type CreateTransaction = {
  username: string
  value: number
}
