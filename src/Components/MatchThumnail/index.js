import './index.css'

const MatchThumnail = props => {
  const {eachItem, thumnailClick} = props
  const {thumbnailUrl, id} = eachItem
  const thumClick = () => {
    thumnailClick(id)
  }

  return (
    <li className="thumnail-item">
      <img
        src={thumbnailUrl}
        onClick={thumClick}
        className="thumnail-image"
        alt="thamim"
      />
    </li>
  )
}

export default MatchThumnail
