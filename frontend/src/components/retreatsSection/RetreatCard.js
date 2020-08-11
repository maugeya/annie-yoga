import React from "react"
import { Link } from "react-router-dom"

import styles from "./RetreatCard.module.css"

export default function RetreatCard({ retreat_dates, retreat_location }) {
  const renderRetreatDetails = (retreat_dates) => {
    return retreat_dates.map((date, i) => {
      return (
        <li key={i}>
          <p>{date}</p>
        </li>
      )
    })
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImageContainer}>
        <Link
          className={styles.retreatLocationLink}
          to={`/retreats/${retreat_location.id}`}
        >
          <img
            className={styles.cardImage}
            src={retreat_location.s3_url}
            alt={retreat_location.name}
          />
          <div className={styles.imageTextOverlay}>
            <h3 className={styles.retreatName}>{retreat_location.name}</h3>
          </div>
        </Link>
      </div>
      <div className={styles.cardContentContainer}>
        <ul className={styles.retreatDatesList}>
          {renderRetreatDetails(retreat_dates)}
        </ul>

        <div className={styles.retreatLinkContainer}>
          <a
            className="inlineLink"
            href={retreat_location.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={styles.retreatLinkText}>
              {retreat_location.place}, {retreat_location.country}
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}
