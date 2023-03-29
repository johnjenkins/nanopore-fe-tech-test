import { ReactNode } from 'react'

import { WrapperContainer } from './styles'

interface ContainerProps {
  children: ReactNode
}

const Container = ({ children }: ContainerProps) => (
  <WrapperContainer>{children}</WrapperContainer>
)

export default Container
