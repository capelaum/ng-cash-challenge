import { BallTriangle } from 'react-loader-spinner'
import { LoaderWrapper } from './styles'

export function Loader() {
  return (
    <LoaderWrapper>
      <BallTriangle
        height={56}
        width={56}
        radius={4}
        color="#0ea5e9"
        ariaLabel="Carregando..."
        visible={true}
      />
    </LoaderWrapper>
  )
}
