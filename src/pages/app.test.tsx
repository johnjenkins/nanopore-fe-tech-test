import { render } from '@testing-library/react'
import { AppProps } from 'next/app'
import { Router } from 'next/router'
import { ThemeProvider } from 'styled-components'

import accountsData from '../data/accounts.json'
import customersData from '../data/customers.json'
import { theme } from '../styles/global'
import App from './_app'
jest.mock('react-toastify/dist/ReactToastify.css', () => {
  return {}
})

const mockFetch = jest.fn(() =>
  Promise.resolve({
    headers: new Headers(),
    status: 200,
    statusText: 'OK',
    json: () =>
      Promise.resolve({
        accounts: accountsData.accounts,
        customers: customersData.customers
      })
  })
)

beforeAll(() => {
  ;(global as any).fetch = mockFetch
})

afterAll(() => {
  ;(global as any).fetch.mockRestore()
})

describe('<App />', () => {
  const mockProps: AppProps = {
    Component: () => null,
    pageProps: {},
    router: {} as Router
  }

  it('should render correctly', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <App {...mockProps} />
      </ThemeProvider>
    )

    expect(container).toMatchSnapshot()
  })
})
