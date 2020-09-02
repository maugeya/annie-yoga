import useFetch from "../hooks/useFetch"

const getFilteredRetreatsByLocation = (retreats, requiredLocationId) => {
  return retreats.filter(
    (retreat) => retreat.retreatLocation.id === requiredLocationId
  )
}

const getDatesForRetreatLocation = (retreats, requiredLocationId) => {
  const filteredRetreats = getFilteredRetreatsByLocation(
    retreats,
    requiredLocationId
  )

  return filteredRetreats.map((retreat) => retreat.prettyDates)
}

const getUniqueRetreatLocations = (retreats) => {
  const retreatLocations = []
  retreats.map((retreat) => retreatLocations.push(retreat.retreatLocation))

  return [...new Map(retreatLocations.map((item) => [item.id, item])).values()]
}

const useFetchRetreats = () => {
  const res = useFetch("http://localhost:8000/retreats/", {})
  if (res.error.length) console.log("ERROR WIP", res.error)

  const retreats = res.data
  const isLoadingRetreats = res.isLoading
  const retreatsError = res.error

  return { retreats, isLoadingRetreats, retreatsError }
}

export {
  getDatesForRetreatLocation,
  getUniqueRetreatLocations,
  getFilteredRetreatsByLocation,
  useFetchRetreats,
}
