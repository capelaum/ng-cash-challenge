import { Button, ButtonProps } from 'components/Button'
import { useAuth } from 'contexts/AuthContext'
import { TbLogout } from 'react-icons/tb'
import { Wrapper } from './styles'

interface ButtonLogoutProps extends ButtonProps {}

export function ButtonLogout({ ...props }: ButtonLogoutProps) {
  const { logout } = useAuth()

  return (
    <Wrapper>
      <Button onClick={logout} isOnlyIcon isRounded title="Sair" {...props}>
        <TbLogout />
      </Button>
    </Wrapper>
  )
}
