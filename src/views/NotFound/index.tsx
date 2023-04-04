import Button from 'components/Button'

import { Title, Subtitle, Home } from './styles'

const NotFound = () => (
  <>
    <Title>404 Not found!</Title>
    <Subtitle>
      Oops! The page you&apos;re looking for isn&apos;t here. Please try again
      or contact us for assistance.
    </Subtitle>
    <Home href="/" passHref>
      <Button>Home</Button>
    </Home>
  </>
)

export default NotFound
