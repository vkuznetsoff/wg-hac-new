
const CardButton = ({ text, textColor, icon, showPath, destination, width }) => {
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
    onClick={() => showPath(undefined, destination)}
  ><p>{text}</p>{icon}</div>
}

export default CardButton