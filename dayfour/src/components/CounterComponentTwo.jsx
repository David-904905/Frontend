const CounterComponentTwo = ({onClickHandler}) => {
    const handleClick = () => onClickHandler();
  return (
    <button onClick={handleClick}>Increment 2</button>
  )
}

export default CounterComponentTwo