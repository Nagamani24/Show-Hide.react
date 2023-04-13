// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstNameClass: '',
    firstName: '',
    lastNameClass: '',
    lastName: '',
    btn: '',
  }

  showHideFirstName = () => {
    const {firstNameClass} = this.state

    if (firstNameClass === '') {
      this.setState({
        firstNameClass: 'name-container',
        firstName: 'Joe',
        btn: 'btnClass',
      })
    } else {
      this.setState({firstNameClass: '', firstName: ''})
    }
  }

  showHideLastName = () => {
    const {lastNameClass} = this.state

    if (lastNameClass === '') {
      this.setState({
        lastNameClass: 'name-container',
        lastName: 'Jonas',
        btn: 'btnClass',
      })
    } else {
      this.setState({lastNameClass: '', lastName: ''})
    }
  }

  render() {
    const {firstNameClass, firstName, lastNameClass, lastName, btn} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="container">
          <div>
            <button
              type="button"
              onClick={this.showHideFirstName}
              className={btn}
            >
              Show/Hide Firstname
            </button>
            <div className={firstNameClass}>
              <p className="name">{firstName}</p>
            </div>
          </div>
          <div>
            <button
              type="button"
              onClick={this.showHideLastName}
              className={btn}
            >
              Show/Hide Lastname
            </button>
            <div className={lastNameClass}>
              <p className="name">{lastName}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
