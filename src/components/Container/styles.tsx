import styled from 'styled-components'

export const WrapperContainer = styled.div`
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing['16']};
  max-width: 100%;
  width: 100%;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xs}) {
    max-width: 540px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    max-width: 720px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 960px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {
    max-width: 1140px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.xl}) {
    max-width: 1400px;
  }
`
