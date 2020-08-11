import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "./App.css"
import "./styles/common.css"
import NavBar from "./components/navigation/NavBar"
import HomeRoute from "./components/home/HomeRoute"
import ClassesRoute from "./components/classes/ClassesRoute"
import RetreatsRoute from "./components/retreats/RetreatsRoute"
import CorporateRoute from "./components/corporate/CorporateRoute"
import FoodRoute from "./components/food/FoodRoute"
import BlogRoute from "./components/blog/BlogRoute"
import RetreatLocationDetailRoute from "./components/retreatDetails/RetreatLocationDetailRoute"
import useScroll from "./hooks/useScroll"
import useFetch from "./hooks/useFetch"
import Footer from "./components/footer/Footer"
import {
  getUniqueRetreatLocations,
  getFilteredRetreatsByLocation,
} from "./utils/retreats"

function App() {
  const scrollYPercentage = useScroll()
  const res = useFetch("http://localhost:8000/retreats/", {})
  if (res.error.length) console.log("ERROR WIP", res.error)

  const retreats = res.data
  const isLoading = res.isLoading
  const uniqueRetreatLocations = getUniqueRetreatLocations(retreats)

  return (
    <Router>
      <div className="App">
        <NavBar
          scrollYPercentage={scrollYPercentage}
          retreatLocations={uniqueRetreatLocations}
        />
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
          <Route exact path="/retreats">
            <RetreatsRoute retreats={retreats} isLoading={isLoading} />
          </Route>
          {uniqueRetreatLocations.map((retreatLocation) => (
            <Route path={`/retreats/${retreatLocation.id}`}>
              <RetreatLocationDetailRoute
                retreatDetails={getFilteredRetreatsByLocation(
                  retreats,
                  retreatLocation.id
                )}
              />
            </Route>
          ))}
          <Route path="/">
            <HomeRoute />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
