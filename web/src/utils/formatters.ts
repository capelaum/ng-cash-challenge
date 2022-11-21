export const currencyFormatter = (n: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(n)
}

export const dateFormatter = (date: Date | string) => {
  return new Date(date).toLocaleDateString('pt-BR')
}
