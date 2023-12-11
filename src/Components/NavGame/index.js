import './index.css'

const NavGame = props => {
  const {count, clearCounter, score} = props
  if (count <= 0) {
    clearCounter()
  }
  return (
    <nav className="nav-container">
      <div className="nav-left">
        {' '}
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="nav-logo"
        />
      </div>
      <div className="nav-right">
        {' '}
        <p className="nav-score">
          Score : <span className="change">{score}</span>{' '}
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
          className="nav-timmer"
        />
        <p className="nav-timming change">{count} sec</p>
      </div>
    </nav>
  )
}

export default NavGame
