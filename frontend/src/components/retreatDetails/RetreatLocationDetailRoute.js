import React from "react"

export default function RetreatLocationDetailRoute({ retreatDetails }) {
  return (
    <div>
      {retreatDetails.map((retreat) => (
        <p>{retreat.pretty_dates}</p>
      ))}
    </div>
  )
}
