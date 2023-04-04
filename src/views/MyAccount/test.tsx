import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/global'

import accountsData from '../../data/accounts.json'
import customersData from '../../data/customers.json'
import MyAccount from './'

jest.mock('react-toastify/dist/ReactToastify.css', () => {
  return {}
})

describe('MyAccount component', () => {
  beforeAll(() => {
    global.fetch = jest.fn(() =>
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
  })

  afterAll(() => {
    global.fetch.mockRestore()
  })

  it('should render without problems and match snapshot', async () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <MyAccount />
      </ThemeProvider>
    )
    await screen.findAllByText('Select account below')
    expect(container).toMatchSnapshot()
  })

  it('should check if all elements in accounts dropdown have values', async () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <MyAccount />
      </ThemeProvider>
    )
    expect(container).toMatchSnapshot()

    // Wait for accounts and customers to load
    await screen.findAllByText('Select account below')

    const accountDropdown = screen.getByTestId(
      'account-select'
    ) as HTMLSelectElement
    console.log(accountDropdown)

    expect(accountDropdown.children.length).toBeGreaterThan(0)
    for (let i = 0; i < accountDropdown.children.length; i++) {
      expect(accountDropdown.children[i].hasAttribute('value')).toBe(true)
    }
  })
})
