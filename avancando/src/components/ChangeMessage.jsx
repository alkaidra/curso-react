const ChangeMessage = ({ handleMessage }) => {
    const message = ['Olá', 'Olá Mundo', 'Buta']

  return (
    <div>
        <button onClick={() => {handleMessage(message[0])}}>1</button>
        <button onClick={() => {handleMessage(message[1])}}>2</button>
        <button onClick={() => {handleMessage(message[2])}}>3</button>
    </div>
  )
}

export default ChangeMessage