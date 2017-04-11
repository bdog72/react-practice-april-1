import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link }
from 'react-router-dom'
import TicTacToe from './TicTacToe'
import Rrouter from './Rrouter.js'
const Example1 = () => (
  <div>
    <div className='wrapper'>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
    </div>
  </div>
)

const Example2 = () => (
  <div>
    <TicTacToe />
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>(match.params.topicId)</h3>
  </div>
)

const Example3 = ({ match }) => (
  <div>
    <h2>Examples</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
        Example1
      </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Example2
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Example3
        </Link>
      </li>
    </ul>
    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a example</h3>
    )} />
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Css Grid Example</Link></li>
        <li><Link to='/1'>React Tic Tac Toe</Link></li>
        <li><Link to='/2'>Example3</Link></li>
      </ul>
      <hr />
      <Route exact path='/' component={Example1} />
      <Route exact path='/1' component={Example2} />
      <Route exact path='/2' component={Example3} />
    </div>
  </Router>
)

export default class App extends Component {
  render () {
    return <div>
      <BasicExample />
      <br />
      <Rrouter />
    </div>
  }
}
