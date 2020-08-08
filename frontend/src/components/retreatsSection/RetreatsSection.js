import React from "react"

import Layout from "../layout/Layout"
import SectionHeader from "../common/sectionHeader/SectionHeader"
import SectionText from "../common/sectionText/SectionText"

export default function RetreatsSection({ retreats }) {
  const uniqueRetreatNames = [
    ...new Set(retreats.map((retreat) => retreat.retreat_location.name)),
  ]

  const retreat_locations = []
  retreats.map((retreat) => retreat_locations.push(retreat.retreat_location))

  const uniqueRetreatLocations = [
    ...new Map(retreat_locations.map((item) => [item.id, item])).values(),
  ]

  const renderRetreatDetails = (retreats, name) => {
    const retreatsByDay = retreats.filter(
      (retreat) => retreat.retreat_location.name === name
    )
    return retreatsByDay.map((retreat, i) => {
      return (
        <div key={i}>
          <p>{retreat.pretty_dates}</p>
        </div>
      )
    })
  }
  return (
    <Layout>
      <section className="sectionContainer">
        <SectionHeader title="Upcoming retreats 2020" />
        <SectionText>
          {uniqueRetreatLocations.map((retreat_location, i) => (
            <div key={i}>
              <h3>{retreat_location.name}</h3>
              {renderRetreatDetails(retreats, retreat_location.name)}
              <a className="inlineLink" href={retreat_location.url}>
                <p>
                  {retreat_location.place}, {retreat_location.country}
                </p>
              </a>
            </div>
          ))}
        </SectionText>
      </section>
    </Layout>
  )
}
