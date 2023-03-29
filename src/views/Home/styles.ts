import styled from 'styled-components'

export const Logo = styled.img`
  width: ${(props) => props.theme.spacing['300']};
`

export const Title = styled.h1`
  color: ${(props) => props.theme.colours.secondary};
  font-size: ${(props) => props.theme.spacing['32']};
`

export const Description = styled.h2`
  font-size: ${(props) => props.theme.spacing['24']};
  line-height: 140%;
  font-weight: 400;
  width: min(${(props) => props.theme.spacing['720']}, 80%);
`
