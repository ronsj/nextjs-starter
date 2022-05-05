import type { Story } from '@ladle/react'

type MyComponentProps = {
  label: string
  disabled: boolean
  count: number
  colors: string[]
  variant: string
  size: string
}

const MyComponent = ({
  count,
  disabled,
  label,
  colors,
  variant,
  size,
}: MyComponentProps) => {
  return (
    <>
      <p>Count: {count}</p>
      <p>Disabled: {disabled ? 'yes' : 'no'}</p>
      <p>Label: {label}</p>
      <p>Colors: {colors.join(',')}</p>
      <p>Variant: {variant}</p>
      <p>Size: {size}</p>
    </>
  )
}

const storyConfig = {
  title: 'Components',
}

export default storyConfig

export const MyComponentDefault: Story<MyComponentProps> = (props) => {
  return <MyComponent {...props} />
}

MyComponentDefault.storyName = 'MyComponent2'

MyComponentDefault.args = {
  label: 'Hello world',
  disabled: false,
  count: 2,
  colors: ['Red', 'Blue'],
}

MyComponentDefault.argTypes = {
  variant: {
    options: ['primary', 'secondary'],
    control: { type: 'radio' },
    defaultValue: 'primary',
  },
  size: {
    options: ['small', 'medium', 'big', 'huuuuge'],
    control: { type: 'select' },
  },
}
