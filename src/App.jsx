import React from 'react'
import {
  BrowserRouter as Router, Route, Switch,
  Redirect, Link,
} from 'react-router-dom'
import Chat from './Chat.jsx'

function NavBar(props) {
  const { match: { params: { type } } } = props
  const names = ['Работа', 'Общение']
  const navItems = ['duty', 'fun'].map((typeName, index) => (
    <li key={typeName} className={`nav-item${type === typeName ? ' active' : ''}`}>
      <Link className="nav-link" to={`/${typeName}`}>
        <i className={`fa ${index === 0 ? 'fa-id-card' : 'fa-gamepad'}`} />
        &nbsp;
        {names[index]}
      </Link>
    </li>
  ))
  return (
    <nav className="navbar navbar-expand bg-light navbar-light sticky-top">
      <ul className="navbar-nav">
        <a className="navbar-brand" target="_blank" rel="noreferrer" href="http://arthur-grigoryan.ga">
          <i className="fa fa-user" />
        </a>
        {navItems}
      </ul>
    </nav>
  )
}

export default function App() {
  return (
    <Router>
      <div className="container">
        <Route path={['/:type(duty)', '/:type(fun)']} component={NavBar} />
        <Switch>
          <Route
            exact
            strict
            path="/:type(duty)"
            component={Chat}
          />
          <Route
            exact
            strict
            path="/:type(fun)"
            component={Chat}
          />
          <Redirect to="/duty" />
        </Switch>
      </div>
    </Router>
  )
}
