const getFilteredRetreatsByLocation = (retreats, requiredLocationId) => {
  return retreats.filter(
    (retreat) => retreat.retreat_location.id === requiredLocationId
  )
}

const getDatesForRetreatLocation = (retreats, requiredLocationId) => {
  const filteredRetreats = getFilteredRetreatsByLocation(
    retreats,
    requiredLocationId
  )

  return filteredRetreats.map((retreat) => retreat.pretty_dates)
}

const getUniqueRetreatLocations = (retreats) => {
  const retreat_locations = []
  retreats.map((retreat) => retreat_locations.push(retreat.retreat_location))

  return [...new Map(retreat_locations.map((item) => [item.id, item])).values()]
}

export {
  getDatesForRetreatLocation,
  getUniqueRetreatLocations,
  getFilteredRetreatsByLocation,
}
