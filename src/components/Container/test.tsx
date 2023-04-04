import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../../styles/global'
import Container from './'

describe('<Container  />', () => {
  it('renders its children and applies the correct styles', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Container>
          <p>Some text in the container</p>
        </Container>
      </ThemeProvider>
    )
    expect(container).toMatchSnapshot()

    const containerElement = container.querySelector('div')
    const childElement = container.querySelector('p')

    expect(containerElement).toBeInTheDocument()
    expect(containerElement).toContainElement(childElement)
    expect(containerElement).toHaveStyle('max-width: 100%;')
    expect(containerElement).toHaveStyle('padding: 0 1rem;')

    // Test media queries
    window.matchMedia = jest.fn().mockImplementation((query) => {
      return {
        matches: query === '(min-width: 576px)',
        media: query,
        addListener: jest.fn(),
        removeListener: jest.fn()
      }
    })

    expect(containerElement).toHaveStyle('max-width: 100%')
    expect(containerElement).toHaveStyle('padding: 0 1rem;')
    expect(containerElement).toHaveStyle('width: 100%;')
  })
})
