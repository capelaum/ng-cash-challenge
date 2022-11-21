export type User = {
  id: string
  username: string
  createdAt: string
  updatedAt: string
  account: {
    id: string
    balance: number
    formattedBalance: string
  }
}
