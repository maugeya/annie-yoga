import React, { useEffect, useState } from "react"
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
import RecipeDetailRoute from "./components/recipeDetail/RecipeDetailRoute"
import useScroll from "./hooks/useScroll"
import Footer from "./components/footer/Footer"
import {
  getUniqueRetreatLocations,
  getDatesForRetreatLocation,
  useFetchRetreats,
} from "./utils/retreats"
import { useFetchRecipes } from "./utils/recipes"
import Burger from "./components/burger/Burger"
import BurgerMenu from "./components/burgerMenu/BurgerMenu"

function App() {
  const [openMenu, setOpenMenu] = useState(false)

  const getRetreats = useFetchRetreats()
  const { retreats, isLoadingRetreats, retreatsError } = getRetreats
  if (retreatsError.length) console.log("ERROR WIP", retreatsError)

  const uniqueRetreatLocations = getUniqueRetreatLocations(retreats)

  const getRecipes = useFetchRecipes()
  const { recipes, isLoadingRecipes, recipesError } = getRecipes
  if (recipesError.length) console.log("ERROR WIP", recipesError)

  return (
    <Router>
      <div className="App">
        <div>
          <Burger open={openMenu} setOpen={setOpenMenu} />
          <BurgerMenu open={openMenu} />
        </div>
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
          <Route exact path="/food">
            <FoodRoute recipes={recipes} isLoading={isLoadingRecipes} />
          </Route>
          {recipes.map((recipe, i) => (
            <Route path={`/food/${recipe.id}`} key={i}>
              <RecipeDetailRoute recipe={recipe} />
            </Route>
          ))}
          <Route exact path="/retreats">
            <RetreatsRoute retreats={retreats} isLoading={isLoadingRetreats} />
          </Route>
          {uniqueRetreatLocations.map((retreatLocation, i) => (
            <Route path={`/retreats/${retreatLocation.id}`} key={i}>
              <RetreatLocationDetailRoute
                retreatLocation={retreatLocation}
                retreatDates={getDatesForRetreatLocation(
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
