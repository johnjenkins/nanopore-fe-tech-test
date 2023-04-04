import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Home from '.'
import manifest from '../../../public/manifest.json'
import { theme } from '../../styles/global'

describe('<Home />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    )

    expect(
      screen.getByRole('heading', { name: manifest.name })
    ).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    )

    expect(container.childNodes[1]).toHaveStyleRule('color', '#90c6e7')
  })
})
