import React from "react"

import styles from "./RetreatLocationDetailSection.module.css"
import Layout from "../layout/Layout"

export default function RetreatLocationDetailSection({
  retreatLocation,
  retreatDates,
}) {
  console.log(retreatLocation.description)
  console.log(retreatLocation)
  const { description } = retreatLocation
  return (
    <Layout>
      <section
        className={`sectionContainer ${styles.retreatDetailSectionContainer}`}
      >
        <div className={styles.retreatLogisitics}>
          <div className={styles.retreatDates}>
            {retreatDates.map((date, i) => (
              <h3 key={i}>{date}</h3>
            ))}
          </div>
          <div>
            <h3>
              <a className="inlineLink">
                {retreatLocation.place}{" "}
                {retreatLocation.country && `, ${retreatLocation.country}`}
              </a>
            </h3>
          </div>
        </div>
        <div className={styles.retreatContent}>
          {description.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </div>
      </section>
    </Layout>
  )
}
