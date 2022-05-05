export type GreetingProps = {
  name?: string
}

export default function Greeting({ name = 'world' }: GreetingProps) {
  return <p>Hello {name}!</p>
}
