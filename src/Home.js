import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Login from './Login'
import NewUser from './NewUser'

export default class extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Login idHolder="Username"
                 confirmHolder="Password"
                 buttonText="Submit"/>
          <NewUser idHolder="Username"
                   confirmHolder="Password"
                   repeatHolder="Retype Password"
                   idFirst="First Name"
                   idLast="Last Name"
                   idAge="Date of Birth"
                   idPhone="Telephone"
                   buttonText="Submit"/>
        </MuiThemeProvider>
      </div>
    )
  }
}