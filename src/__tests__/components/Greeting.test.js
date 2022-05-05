import { render, screen } from '@testing-library/react'
import Greeting from '@/src/components/Greeting'

describe('Greeting', () => {
  it('renders default text', () => {
    render(<Greeting />)

    const text = screen.getByText(/^hello world!$/i)

    screen.logTestingPlaygroundURL()
    expect(text).toBeInTheDocument()
  })

  it('renders name prop', () => {
    render(<Greeting name="Foo" />)

    const text = screen.getByText(/^hello foo!$/i)

    screen.logTestingPlaygroundURL()
    expect(text).toBeInTheDocument()
  })
})
