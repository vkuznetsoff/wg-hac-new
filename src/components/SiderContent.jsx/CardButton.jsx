

const CardButton = ({ text, textColor, icon, showPath, destination, width, setDrawPath }) => {
  return <div style={{
    border: '1px solid #0D60D3',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'baseline',
    width: width,
    borderRadius: '15px',
    color: textColor,
    cursor: 'pointer',
    fontSize: 12
  }}
    onClick={() => {
      console.log('!!')
      showPath(undefined, destination)
      setDrawPath(true)
    }}
  ><p>{text}</p>{icon}</div>
}

export default CardButton