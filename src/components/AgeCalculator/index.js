// Write your code here.
import './index.css'
import {Component} from 'react'

class AgeCalculator extends Component {
  state = {year: '', valid: false, age: '', error: false}

  onTakeValue = event => {
    this.setState({year: event.target.value})
  }

  onCheckYear = () => {
    const {year, age, error} = this.state
    const dateOfBirth = new Date(year)
    const dateOfBirthYear = dateOfBirth.getFullYear()
    const presentDate = new Date()
    const presentDateYear = presentDate.getFullYear()
    const value = presentDateYear - dateOfBirthYear

    if (year.length === 4 && value > 0) {
      this.setState({age: value, valid: true, error: false})
    } else {
      this.setState({error: true, valid: false})
    }
    return null
  }

  showMessage = () => {
    const {year, valid, age, error} = this.state
    if (valid) {
      if (age > 1) {
        return (
          <p className="show-message">
            You are {age} years old by the end of 2021
          </p>
        )
      }
      return (
        <p className="show-message">
          You are {age} year old by the end of 2021
        </p>
      )
    }
    return null
  }

  showErrorMsg = () => {
    const {year, valid, age, error} = this.state
    if (error) {
      return (
        <p className="show-error-message">Enter the year that you are Born</p>
      )
    }
    return null
  }

  render() {
    const {age, valid} = this.state
    return (
      <div className="bg-container">
        <div className="card-1">
          <h1 className="heading-1">Age Calculator</h1>
          <div className="input-container">
            <input
              type="text"
              className="input-style"
              placeholder="Enter the year that you are Born"
              onChange={this.onTakeValue}
            />
          </div>
          <div className="btn-container">
            <button className="btn-style" onClick={this.onCheckYear}>
              Calculate
            </button>
          </div>
          {this.showMessage()}
          {this.showErrorMsg()}
        </div>
        <img
          className="img-style"
          src="https://assets.ccbp.in/frontend/react-js/age-calculater-persons-img.png"
          alt="img"
        />
      </div>
    )
  }
}

export default AgeCalculator
