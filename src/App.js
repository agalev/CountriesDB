import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Error from './Components/Error'
import Tableview from './Components/Tableview'
import Gridview from './Components/Gridview'

export default class App extends Component {
  constructor() {
    super()
    this.state = {countries: []}
  }

  componentDidMount() {
    axios.get("https://restcountries.eu/rest/v2/all")
      .then(results => {
        this.setState({countries: results.data})
      })
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" render={(props) => <Home countries={this.state.countries} />} exact />
            <Route path="/Tableview" render={(props) => <Tableview countries={this.state.countries} />} />
            <Route path="/Gridview" render={(props) => <Gridview countries={this.state.countries} />} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}