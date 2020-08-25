import React from "react"

import styles from "./RetreatLocationDetailSection.module.css"
import Layout from "../layout/Layout"
import Testimonial from "../common/testimonial/Testimonial"
import AppImageGrid from "../common/imageGrid/AppImageGrid"

export default function RetreatLocationDetailSection({
  retreatLocation,
  retreatDates,
}) {
  const {
    description,
    retreatGalleryS3Urls,
    dailySchedule,
    costIncludes,
    costExcludes,
    optionalExtras,
    testimonial1,
    testimonial2,
    url,
  } = retreatLocation

  return (
    <Layout>
      <section
        className={`sectionContainer ${styles.retreatDetailSectionContainer}`}
      >
        <div className={styles.retreatSectionHeader}>
          <div className={styles.retreatDates}>
            {retreatDates.map((date, i) => (
              <h3 key={i}>{date}</h3>
            ))}
          </div>
          <div>
            <h3>
              <a
                className="inlineLink"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {retreatLocation.place}{" "}
                {retreatLocation.country && `, ${retreatLocation.country}`}
              </a>
            </h3>
          </div>
          <div className={styles.retreatCost}>
            <h3>Cost: £{retreatLocation.cost}</h3>
          </div>
        </div>
        <div className={styles.retreatSectionContent}>
          <div className={styles.retreatDescription}>
            {description.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className={styles.retreatTestimonial}>
            <Testimonial>
              <p>{testimonial1}</p>
            </Testimonial>
          </div>
        </div>
      </section>
      <section className={styles.imageGridSection}>
        <AppImageGrid imageURLs={retreatGalleryS3Urls} />
      </section>
      <section className={styles.retreatDetailSectionContainer}>
        <div className={styles.retreatSectionHeader}>
          <h3>daily schedule</h3>
        </div>
        <div className={styles.retreatSectionContent}>
          <div>
            {dailySchedule.map((scheduleItem, i) => (
              <p key={i}>{scheduleItem}</p>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.retreatDetailSectionContainer}>
        <div className={styles.retreatSectionHeader}>
          <h3>Cost includes</h3>
        </div>
        <div className={styles.retreatSectionContent}>
          <ul className={styles.retreatDetailList}>
            {costIncludes.map((item, i) => (
              <li key={i}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {costExcludes && (
        <section className={styles.retreatDetailSectionContainer}>
          <div className={styles.retreatSectionHeader}>
            <h3>Cost excludes</h3>
          </div>
          <div className={styles.retreatSectionContent}>
            <ul className={styles.retreatDetailList}>
              {costExcludes.map((item, i) => (
                <li key={i}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {optionalExtras && (
        <section className={styles.retreatDetailSectionContainer}>
          <div className={styles.retreatSectionHeader}>
            <h3>Optional extras</h3>
          </div>
          <div className={styles.retreatSectionContent}>
            <ul className={styles.retreatDetailList}>
              {optionalExtras.map((item, i) => (
                <li key={i}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      <section>
        <div className={styles.retreatTestimonial}>
          <Testimonial>
            <p>{testimonial2}</p>
          </Testimonial>
        </div>
      </section>
    </Layout>
  )
}
