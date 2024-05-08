type Props = {
  name: string
}

export const App = ({ name }: Props) => {
  const a: string = 'Lorem ipsum'
  const b: string = 'Dolor sit amet'

  return (
    <div>
      {name} {a} {b}
    </div>
  )
}
