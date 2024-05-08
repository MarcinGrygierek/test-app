type Props = {
  name: string
}

export const App = ({ name }: Props) => {
  const a: string = 'Lorem Dolor sit amet and lorem ipsum'

  return (
    <div>
      {name} {a}
    </div>
  )
}
