import {Component} from 'react'
import NavBar from '../NavBar'
import ThumbnailImages from '../ThumbnailImages'
import Tabs from '../Tabs'
import './index.css'

let timerId

class MatchGame extends Component {
  state = {
    currentTab: 'FRUIT',
    currentImageId: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
    score: 0,
    currentImage:
      'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
    timer: 60,
    isGameIsInPrograss: true,
  }

  componentDidMount() {
    this.setTheTimer()
  }

  setTheTimer = () => {
    timerId = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {timer} = this.state
    if (timer > 0) {
      const count = timer * 1000 - 1000
      this.setState({timer: count / 1000})
    } else {
      clearInterval(timerId)
      this.setState({isGameIsInPrograss: false})
    }
  }

  getTheRandomImage = () => {
    const {imagesList} = this.props
    const randomIndex = Math.floor(Math.random() * imagesList.length)
    this.setState({
      currentImageId: imagesList[randomIndex].id,
      currentImage: imagesList[randomIndex].imageUrl,
    })
  }

  changeTheTab = currentTabId => {
    this.setState({currentTab: currentTabId})
  }

  countTheScoreAndChange = imageId => {
    const {currentImageId} = this.state
    this.getTheRandomImage()
    if (currentImageId === imageId) {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
    } else {
      clearInterval(timerId)
      this.setState({isGameIsInPrograss: false, timer: 0})
    }
  }

  renderTheMatchGame = () => {
    const {imagesList, tabsList} = this.props
    const {currentTab, currentImageId, currentImage, score, timer} = this.state
    const currentTabItems = imagesList.filter(
      eachItem => eachItem.category === currentTab,
    )
    return (
      <>
        <img src={currentImage} alt="match" className="match-image" />
        <ul className="tabs-container">
          {tabsList.map(each => (
            <Tabs
              isActive={currentTab === each.tabId}
              key={each.tabId}
              tabDetails={each}
              changeTheTab={this.changeTheTab}
            />
          ))}
        </ul>
        <ul className="thumbnail-container">
          {currentTabItems.map(each => (
            <ThumbnailImages
              key={each.id}
              thumbnailDetails={each}
              countTheScoreAndChange={this.countTheScoreAndChange}
            />
          ))}
        </ul>
      </>
    )
  }

  resetTheGame = () => {
    this.setState({timer: 60, isGameIsInPrograss: true, score: 0})
    this.setTheTimer()
  }

  renderTheMatchFinishCard = () => {
    const {score} = this.state
    return (
      <div className="finished-match-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy-image"
        />
        <p>YOUR SCORE</p>
        <p>{score}</p>
        <div>
          <button
            type="button"
            className="play-again-button"
            onClick={this.resetTheGame}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
              className="reset-image"
            />
            PLAY AGAIN
          </button>
        </div>
      </div>
    )
  }

  render() {
    const {imagesList} = this.props
    const {score, timer, isGameIsInPrograss, currentTab} = this.state
    const currentTabItems = imagesList.filter(
      eachItem => eachItem.category === currentTab,
    )
    console.log(timer)
    return (
      <>
        <NavBar score={score} timer={timer} />
        <div className="match-game-container">
          {isGameIsInPrograss
            ? this.renderTheMatchGame()
            : this.renderTheMatchFinishCard()}
        </div>
      </>
    )
  }
}

export default MatchGame
