import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import Button from '.'
import { theme } from '../../styles/global'

const content = 'Button'

const Component = () => (
  <Button>
    <p role="text">{content}</p>
  </Button>
)

describe('<Button />', () => {
  it('should render the button and content', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Component />
      </ThemeProvider>
    )

    expect(screen.getByRole('button')).toBeInTheDocument()

    expect(screen.getByRole('text')).toBeInTheDocument()

    expect(screen.getByText(content)).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Component />
      </ThemeProvider>
    )

    const button = screen.getByRole('button')

    expect(button).toHaveStyleRule('color', 'white')

    expect(button).toHaveStyleRule('background-color', 'transparent')
  })
})
