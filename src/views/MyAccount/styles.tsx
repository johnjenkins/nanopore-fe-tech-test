import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const LogoWrapper = styled.div`
  width: 200px;
  margin-bottom: 15px;
`
export const Logo = styled.img`
  width: 100%;
`

export const Header = styled.div`
  background: #005c76;
  display: flex;
`

export const Contents = styled.div`
  background: #ffffff;
  display: flex;
  padding: 15px;
  text-align: left;
  li {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  a {
    font-size: ${(props) => props.theme.spacing['20']};
    color: #005c75;
  }
  hr {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  h2 {
    color: black;
  }
`

export const LeftSidebar = styled.div`
  width: calc(20% - 15px);
  ul {
    list-style-type: none;
  }
`
export const Main = styled.div`
  margin-left: 20px;
  flex: 1;
`

export const UserWrapper = styled.div`
  padding: 10px;
  min-height: 80px;
  background: #ffffff;
  width: 20%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: #1890b2;
  font-weight: bold;
  img {
    border-radius: 100%;
  }
  .userDetails {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: left;
    div:nth-child(2) {
      font-weight: 300;
      font-size: 14px;
      margin-top: 5px;
    }
  }
  select {
    width: 100%;
    font-size: 16px;
    background-color: #fff;
    border: 1px solid #89c5d7;
    padding: 5px;
    border-radius: 7px;
    margin-top: 10px;
  }
`

export const MenuWrapper = styled.div`
  background: #045a72;
  color: #7cb8d8;
  font-weight: bold;
  flex: 1;
  text-align: left;
  padding-left: 40px;
  h2 {
    color: white;
    font-size: ${(props) => props.theme.spacing['20']};
  }
`

export const UserDetails = styled.div`
  display: flex;
`

export const Navigation = styled.div`
  margin-top: 30px;
`

export const StyledFaIcon = styled(FontAwesomeIcon)`
  margin-right: 20px;
`

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 0 auto;
  color: black;

  th {
    background-color: #e4f1f5;
    text-align: left;
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }

  td {
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }
`

export const StyledButton = styled.button`
  background: transparent;
  border: 1px solid #89c5d7;
  padding: 7px;
  border-radius: 7px;
  &:hover {
    cursor: pointer;
  }
`

export const RoleDropdown = styled.select`
  background: transparent;
  border: 1px solid #89c5d7;
  padding: 7px;
  border-radius: 7px;
`
