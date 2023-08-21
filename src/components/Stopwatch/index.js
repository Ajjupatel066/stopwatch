// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timeElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onClickResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onClickStartTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  onClickStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  getSeconds = () => {
    const {timeElapsedInSeconds} = this.state

    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  getMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.getMinutes()}:${this.getSeconds()}`

    return (
      <div className="app-container">
        <div className="stop-watch-container">
          <h1 className="title">Stopwatch</h1>
          <div className="timer-card">
            <div className="card-title-img">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-img"
              />
              <p className="timer-title">Timer</p>
            </div>
            <p className="timer">{time}</p>
            <div className="timer-controller">
              <button
                className="button start"
                type="button"
                onClick={this.onClickStartTimer}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                className="button stop"
                type="button"
                onClick={this.onClickStopTimer}
              >
                Stop
              </button>
              <button
                className="button reset"
                type="button"
                onClick={this.onClickResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
