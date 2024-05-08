type Props = {
  name: string
}

export const App = ({ name }: Props) => {
  const a = 10

  console.log(a)

  return <div>{name}</div>
}
