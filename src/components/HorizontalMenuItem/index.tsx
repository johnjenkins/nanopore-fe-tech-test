import { AlteredLink } from './styles'

interface HorizonalMenuItemProps {
  href: string
  children: React.ReactNode
  passHref?: boolean
  className?: string
}

const HorizonalMenuItem = ({
  href,
  passHref,
  className,
  children
}: HorizonalMenuItemProps) => (
  <AlteredLink href={href} passHref={passHref} className={className}>
    {children}
  </AlteredLink>
)

export default HorizonalMenuItem
