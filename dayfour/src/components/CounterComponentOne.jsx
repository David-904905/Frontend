const CounterComponentOne = ({onClickHandler}) => {
    const handleClick = () => onClickHandler();
  return (
    <button onClick={handleClick}>Increment 1</button>
  )
}

export default CounterComponentOne