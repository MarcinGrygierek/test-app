type Props = {
  name: string
}

export const App = ({ name }: Props) => {
  var a = 10

  return (
    <div>
      {name} {a}
    </div>
  )
}
