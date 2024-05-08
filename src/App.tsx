type Props = {
  name: string
}

export const App = ({ name }: Props) => {
  const a: string = 'Lorem ipsum'

  return (
    <div>
      {name} {a}
    </div>
  )
}
