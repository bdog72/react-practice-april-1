import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link }
from 'react-router-dom'
const Example1 = () => (
  <div>
    <h1>Bdog</h1>
  </div>
)

const Example2 = () => (
  <div>
    <h1>Bdog1</h1>
  </div>
)

const Example3 = () => (
  <div>
    <h1>Bdog2</h1>
  </div>
)

const Example4 = () => (
  <div>
    <h1>Bdog3</h1>
  </div>
)

export default class Rrouter extends Component {
  render () {
    return <div>
      <h2>Examples</h2>
      <Router>
        <ul>
          <li><Link to='/'>Example1</Link></li>
          <li><Link to='/ex1'>Example2</Link></li>
          <li><Link to='/ex2'>Example3</Link></li>
          <li><Link to='/ex3'>Example4</Link></li>
          <hr />
          <Route exact path='/' component={Example1} />
          <Route path='/ex1' component={Example2} />
          <Route path='/ex2' component={Example3} />
          <Route path='/ex3' component={Example4} />
        </ul>
      </Router>
    </div>
  }
}
