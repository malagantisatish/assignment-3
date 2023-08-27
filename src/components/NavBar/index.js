import './index.css'

const NavBar = props => {
  const {score, timer} = props
  return (
    <>
      <nav className="navbar-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
        <ul className="score-timer">
          <li>
            <p className="score">
              Score:<span className="score-timer">{score}</span>
            </p>
          </li>

          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              className="timer-image"
              alt="timer"
            />
          </li>

          <li>
            <p className="score-timer">{timer} sec</p>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
