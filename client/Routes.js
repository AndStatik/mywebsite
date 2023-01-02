import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'
import HomePage from './components/Pages/HomePage';
import ProjectsPage from './components/Pages/ProjectsPage';
import ContactMePage from './components/Pages/ContactMePage';
import AboutMePage from './components/Pages/AboutMePage';
import BlogPage from './components/Pages/BlogPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/projects" component={ProjectsPage} />
      <Route exact path="/about" component={AboutMePage} />
      <Route exact path="/contact" component={ContactMePage} />
      <Route exact path="/blog" component={BlogPage} />

      <Redirect to="/" />
    </Switch>
  )
}

const mapState = state => {
  return {
  }
}

const mapDispatch = dispatch => {
  return {
  }
}

export default connect(mapState, mapDispatch)(Routes)
