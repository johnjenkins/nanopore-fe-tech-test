import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'

import { theme } from '../../styles/global'
import NotFound from './'

describe('<NotFound />', () => {
  it('should render the 404 error message and home button', () => {
    render(
      <ThemeProvider theme={theme}>
        <NotFound />
      </ThemeProvider>
    )

    const title = screen.getByRole('heading', { name: /404 not found!/i })
    const subtitle = screen.getByText(
      /oops! the page you're looking for isn't here/i
    )
    const homeButton = screen.getByRole('button', { name: /home/i })

    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(homeButton).toBeInTheDocument()

    userEvent.click(homeButton)

    expect(window.location.pathname).toBe('/')
  })
})
