import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'
import WhySolar from './Why-solar'
import AboutUs from './About-us'
import GetInTouch from './Get-in-touch'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Solar V</h1>
        <ul role="nav">
          <li><Link to="/" activeClassName="active" onlyActiveOnIndex>Home</Link></li>
          <li><NavLink to="/why-solar">Why Solar</NavLink></li>
          <li><NavLink to="/about-us">About us</NavLink></li>
          <li><NavLink to="/get-in-touch">Get in touch</NavLink></li>
        </ul>
        <div>
          {this.props.children || <Home/>}
        </div>
      </div>
    )
  }
})
