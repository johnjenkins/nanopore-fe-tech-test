import Link from 'next/link'
import styled from 'styled-components'

export const Title = styled.h1`
  color: ${(props) => props.theme.colours.primary};
`

export const Subtitle = styled.p`
  font-size: ${(props) => props.theme.spacing['24']};
  margin: ${(props) => props.theme.spacing['20']} 0;
`

export const Home = styled(Link)`
  font-size: ${(props) => props.theme.spacing['24']};
`
