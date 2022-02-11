type ButtonProps = {
  text: string
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  return (
    <button
      type="submit"
      className="font-bold py-2 px-4 rounded bg-blue-500 hover:bg-blue-800 text-white"
    >
      {props.text}
    </button>
  )
}

export default Button
