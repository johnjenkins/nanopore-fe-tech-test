import styled from 'styled-components'

export const Button = styled.button`
  background-color: transparent;
  color: white;
  border: ${(props) => props.theme.spacing['2']} solid
    ${(props) => props.theme.colours.secondary};
  border-radius: ${(props) => props.theme.spacing['4']};
  padding: ${(props) => props.theme.spacing['16']}
    ${(props) => props.theme.spacing['24']};
  font-size: ${(props) => props.theme.spacing['20']};
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.25s, color 0.5s;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colours.secondary};
    color: ${(props) => props.theme.colours.background};
  }
`

export default Button
