import React from "react"

import Layout from "../layout/Layout"
import SectionHeader from "../common/sectionHeader/SectionHeader"
import SectionText from "../common/sectionText/SectionText"

export default function RetreatsSection({ retreats }) {
  const uniqueRetreatNames = [
    ...new Set(retreats.map((retreat) => retreat.retreat_location.name)),
  ]

  const renderRetreatDetails = (retreats, name) => {
    const retreatsByDay = retreats.filter(
      (retreat) => retreat.retreat_location.name === name
    )
    return retreatsByDay.map((retreat, i) => {
      return (
        <div key={i}>
          <p>{retreat.pretty_dates}</p>
          <a
            className="inlineLink"
            href={retreat.retreat_location.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>{`${retreat.retreat_location.place}, ${retreat.retreat_location.country}`}</p>
          </a>
        </div>
      )
    })
  }

  return (
    <Layout>
      <section className="sectionContainer">
        <SectionHeader title="Upcoming retreats 2020" />
        <SectionText>
          {uniqueRetreatNames.map((name, i) => (
            <div key={i}>
              <h3>{name}</h3>
              {renderRetreatDetails(retreats, name)}
            </div>
          ))}
        </SectionText>
      </section>
    </Layout>
  )
}
