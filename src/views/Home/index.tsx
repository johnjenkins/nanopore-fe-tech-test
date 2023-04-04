import ALink from 'components/ALink'
import Button from 'components/Button'
import Link from 'next/link'

import manifest from '../../../public/manifest.json'
import { Logo, Title, Description } from './styles'

const Home = ({ name = manifest.name, description = manifest.description }) => (
  <>
    <Link href="/">
      <Logo src="/img/ont-logo.svg" alt="Oxford nanopore Tech logo" />
    </Link>
    <Title>{name}</Title>
    <Description>{description}</Description>
    <ALink href="/my-account" passHref>
      <Button>Customers & Accounts</Button>
    </ALink>
  </>
)

export default Home
