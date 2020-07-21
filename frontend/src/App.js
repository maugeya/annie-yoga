import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "./App.css"
import NavBar from "./components/navigation/NavBar"
import HomeRoute from "./components/home/HomeRoute"
import ClassesRoute from "./components/classes/ClassesRoute"
import RetreatsRoute from "./components/retreats/RetreatsRoute"
import CorporateRoute from "./components/corporate/CorporateRoute"
import FoodRoute from "./components/food/FoodRoute"
import BlogRoute from "./components/blog/BlogRoute"

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/blog">
            <BlogRoute />
          </Route>
          <Route path="/classes">
            <ClassesRoute />
          </Route>
          <Route path="/corporate">
            <CorporateRoute />
          </Route>
          <Route path="/food">
            <FoodRoute />
          </Route>
          <Route path="/retreats">
            <RetreatsRoute />
          </Route>

          <Route path="/">
            <HomeRoute />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
