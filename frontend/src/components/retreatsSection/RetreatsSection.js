import React from "react"

import styles from "./RetreatsSection.module.css"
import Layout from "../layout/Layout"
import SectionHeader from "../common/sectionHeader/SectionHeader"
import SectionText from "../common/sectionText/SectionText"
import RetreatCard from "./RetreatCard.js"
import {
  getDatesForRetreatLocation,
  getUniqueRetreatLocations,
} from "../../utils/retreats"

export default function RetreatsSection({ retreats }) {
  const uniqueRetreatLocations = getUniqueRetreatLocations(retreats)
  return (
    <Layout>
      <section className="sectionContainer">
        <SectionHeader title="Upcoming retreats 2020" />
        <SectionText>
          <div className={styles.cardTableContainer}>
            {uniqueRetreatLocations.map((retreat_location, i) => (
              <RetreatCard
                retreat_dates={getDatesForRetreatLocation(
                  retreats,
                  retreat_location.id
                )}
                retreat_location={retreat_location}
                key={i}
              />
            ))}
          </div>
        </SectionText>
      </section>
    </Layout>
  )
}
