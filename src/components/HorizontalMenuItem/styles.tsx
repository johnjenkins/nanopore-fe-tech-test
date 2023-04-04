import Link from 'next/link'
import styled from 'styled-components'

export const AlteredLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  padding: 8px 10px;
  border-radius: 6px;
  &.active {
    background: #e4f1f5;
    font-weight: bold;
  }
`
