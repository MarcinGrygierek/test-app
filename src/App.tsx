type Props = {
  name: string
}

export const App = ({ name }: Props) => {
  const a: boolean = "Lorem ipsum"

  return (
    <div>
      {name} {a}
    </div>
  )
}
