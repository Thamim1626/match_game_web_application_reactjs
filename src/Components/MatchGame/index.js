import {Component} from 'react'
import './index.css'
import NavGame from '../NavGame'
import MatchTab from '../MatchTab'
import MatchThumnail from '../MatchThumnail'

class MatchGame extends Component {
  constructor(props) {
    super(props)
    const {imagesList, tabsList} = this.props
    this.tabsList = tabsList
    this.imagesList = imagesList
    const initialImageList = imagesList.filter(
      eachItem => eachItem.category === tabsList[0].tabId,
    )
    this.state = {
      randomUrl: imagesList[0],
      activeTab: tabsList[0].tabId,
      initialImageLists: initialImageList,
      count: 60,
      isGameOver: false,
      score: 0,
    }
    const counter = setInterval(() => {
      this.setState(pervstate => ({count: pervstate.count - 1}))
    }, 1000)
    this.counter = counter
  }

  clearCounter = () => {
    clearInterval(this.counter)
    this.setState({isGameOver: true})
    this.setState({count: 60})
  }

  thumnailClick = id => {
    const {randomUrl} = this.state
    if (randomUrl.id === id) {
      this.setState(pervState => ({score: pervState.score + 1}))
      const randomNumber = Math.ceil(Math.random() * this.imagesList.length - 1)
      this.setState({randomUrl: this.imagesList[randomNumber]})
    } else {
      this.setState({count: 0})
      this.setState({isGameOver: true})
      clearInterval(this.counter)
    }
  }

  onclickReset = () => {
    this.setState({isGameOver: false})
    this.setState({randomUrl: this.imagesList[0]})
    this.setState({activeTab: this.tabsList[0].tabId})
    this.setState({score: 0})
    this.setState({count: 60})
    const counter = setInterval(() => {
      this.setState(pervstate => ({count: pervstate.count - 1}))
    }, 1000)
    this.counter = counter
  }

  onclickTab = tabId => {
    this.setState({activeTab: tabId})
    const filteredList = this.imagesList.filter(
      eachItem => eachItem.category === tabId,
    )
    this.setState({initialImageLists: filteredList})
  }

  render() {
    const {
      randomUrl,
      activeTab,
      initialImageLists,
      count,
      isGameOver,
      score,
    } = this.state

    const found = (
      <div className="match-body">
        <img src={randomUrl.imageUrl} alt="match" className="random-image" />
        <nav>
          <ul className="tab-container">
            {this.tabsList.map(eachItem => (
              <MatchTab
                eachItem={eachItem}
                key={eachItem.id}
                activeTab={activeTab}
                onclickTab={this.onclickTab}
              />
            ))}
          </ul>
        </nav>
        <ul className="thumnail-list">
          {initialImageLists.map(eachItem => (
            <MatchThumnail
              eachItem={eachItem}
              thumnailClick={this.thumnailClick}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )

    const notFound = (
      <div className="result-container">
        <div className="result-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt="trophy"
            className="trophy"
          />
          <h1 className="not-score">Your Score </h1>
          <h1 className="not-score"> {score} </h1>
          <button type="button" className="button" onClick={this.onclickReset}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
              className="reset-icon"
            />
            <p className="reset-text">Play Again</p>
          </button>
        </div>
      </div>
    )

    return (
      <div className="main-container">
        <NavGame
          key={1}
          count={count}
          score={score}
          clearCounter={this.clearCounter}
        />
        {isGameOver ? notFound : found}
      </div>
    )
  }
}

export default MatchGame
