type Props = {
  name: string
}

export const App = ({ name }: Props) => {
  const a: string = 'Dolor sit amet and lorem ipsum'

  return (
    <div>
      {name}
    </div>
  )
}
