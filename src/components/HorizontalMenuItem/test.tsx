import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import ALink from '.'
import { theme } from '../../styles/global'

describe('<ALink />', () => {
  it('should render the link with the given href', () => {
    const href = 'https://example.com'
    const { container } = render(
      <ThemeProvider theme={theme}>
        <ALink href={href}>Click me</ALink>
      </ThemeProvider>
    )

    expect(screen.getByRole('link', { name: /click me/i })).toHaveAttribute(
      'href',
      href
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
