import useFetch from "../hooks/useFetch"

const useFetchRecipes = () => {
  const res = useFetch("http://localhost:8000/recipes/", {})
  if (res.error.length) console.log("ERROR WIP", res.error)

  const recipes = res.data
  const isLoadingRecipes = res.isLoading
  const recipesError = res.error

  return { recipes, isLoadingRecipes, recipesError }
}

export { useFetchRecipes }
