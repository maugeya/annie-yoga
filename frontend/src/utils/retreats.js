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

export {
  getDatesForRetreatLocation,
  getUniqueRetreatLocations,
  getFilteredRetreatsByLocation,
}
