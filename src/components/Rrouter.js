import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link }
from 'react-router-dom'
import { Image } from 'react-bootstrap'
const Example1 = () => (
  <div>
    <Image src='http://images3.wikia.nocookie.net/__cb20091227085815/dogs-cats/images/0/0f/Beagle-puppy.jpg' responsive />
  </div>
)

const Example2 = () => (
  <div>
    <Image src='http://youbeagle.com/it/wp-content/uploads/2009/02/you-beagle.jpg' responsive />
  </div>
)

const Example3 = () => (
  <div>
    <Image src='http://www.beaglepuppybreeders.co.uk/wp-content/uploads/2015/06/K-litter2.jpg' responsive />
  </div>
)

const Example4 = () => (
  <div>
    <Image src='https://s-media-cache-ak0.pinimg.com/236x/4a/75/76/4a75764e042ca019d7d9c8ecc09b052a.jpg' responsive />
  </div>
)

export default class Rrouter extends Component {
  render () {
    return <div>
      <h2>Beagle pictures</h2>
      <Router>
        <ul>
          <li><Link to='/'>Beage pic 1</Link></li>
          <li><Link to='/ex1'>Beage pic 2</Link></li>
          <li><Link to='/ex2'>Beage pic 3</Link></li>
          <li><Link to='/ex3'>Beage pic 4</Link></li>
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
