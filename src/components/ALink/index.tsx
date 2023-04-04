import { AlteredLink } from './styles'

interface ALinkProps {
  href: string
  children: React.ReactNode
  passHref?: boolean
  className?: string
}

const ALink = ({ href, passHref, className, children }: ALinkProps) => (
  <AlteredLink href={href} passHref={passHref} className={className}>
    {children}
  </AlteredLink>
)

export default ALink
