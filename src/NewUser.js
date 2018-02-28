import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

export default class extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      idHolder: this.props.idHolder,
      confirmHolder: this.props.confirmHolder,
      repeatHolder: this.props.repeatHolder,
      buttonText: this.props.buttonText,
      idLast: this.props.idLast,
      idFirst: this.props.idFirst,
      idAge: this.props.idAge,
      idPhone: this.props.idPhone,
      idValue: '',
      confirmValue: '',
      firstValue: '',
      lastValue: '',
      ageValue: ''
    }
  }
  render() {
    const handleIDChange = (event) => {
      this.setState({ confirmValue: event.target.value })
    }
    const handleConfirmChange = (event) => {
      this.setState({ idValue: event.target.value })
    }
    const handleRepeatChange = (event) => {
      this.setState({ idValue: event.target.value })
    }
    const handleClick = () => {
      console.log(this.state.idValue + " - " + this.state.confirmValue)
    }
    
    const handleIDFirstChange = (event) => {
      this.setState({ firstValue: event.target.value})
      console.log(this.state.idFirst + " - " + this.state.firstValue)
    }
    const handleIDLastChange = (event) => {
      this.setState({ lastValue: event.target.value})
      console.log(this.state.idLast + " - " + this.state.lastValue)
    }
    const handleIDAgeChange = (event) => {
      this.setState({ ageValue: event.target.value})
      console.log(this.state.idAge + " - " + this.state.ageValue)
    }
    const handlePhoneChange = (event) => {
      this.setState({ phoneValue: event.target.value})
      console.log(this.state.idPhone + " - " + this.state.phoneValue)
    }
    return (
      <Paper>
        <h1>Register New User</h1>
        <form>
          <label for="idField">{this.state.idHolder}</label>
          <input name="idField" type="email" placeholder="Email" onChange={handleIDChange}/>
          <br/>
          <label for="confirm">{this.state.confirmHolder}</label>
          <input name="confirm" type="password" placeholder={this.state.confirmHolder} onChange={handleConfirmChange}/>
          <br/>
          <label for="repeat">{this.state.repeatHolder}</label>
          <input name="repeat" type="password" placeholder={this.state.repeatHolder} onChange={handleRepeatChange}/>
          <br/>
          <label for="idFirst">{this.state.idFirst}</label>
          <input name="idFirst" type="text" placeholder={this.state.idFirst} onChange={handleIDFirstChange}/>
          <br/>
          <label for="idLast">{this.state.idLast}</label>
          <input name="idLast" type="text" placeholder={this.state.idLast} onChange={handleIDLastChange}/>
          <br/>
          <label for="idAge">{this.state.idAge}</label>
          <input name="idAge" type="date" placeholder={this.state.idAge} onChange={handleIDAgeChange}/>
          <br/>
          <label for="idPhone">{this.state.idPhone}</label>
          <input name="idPhone" type="tel" placeholder={this.state.idPhone} onChange={handlePhoneChange}/>
          <br/>
          <RaisedButton label={this.state.buttonText} onClick={handleClick}/>
        </form>
      </Paper>
    )
  }
}