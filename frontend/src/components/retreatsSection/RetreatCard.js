import React from "react"
import { Link } from "react-router-dom"

import styles from "./RetreatCard.module.css"

export default function RetreatCard({ retreatDates, retreatLocation }) {
  const renderRetreatDetails = (retreatDates) => {
    return retreatDates.map((date, i) => {
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
          to={`/retreats/${retreatLocation.id}`}
        >
          <img
            className={styles.cardImage}
            src={retreatLocation.cardImageS3Url}
            alt={retreatLocation.name}
          />
          <div className={styles.imageTextOverlay}>
            <h3 className={styles.retreatName}>{retreatLocation.name}</h3>
          </div>
        </Link>
      </div>
      <div className={styles.cardContentContainer}>
        <ul className={styles.retreatDatesList}>
          {renderRetreatDetails(retreatDates)}
        </ul>

        <div className={styles.retreatLinkContainer}>
          <a
            className="inlineLink"
            href={retreatLocation.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className={styles.retreatLinkText}>
              {retreatLocation.place}{" "}
              {retreatLocation.country && `, ${retreatLocation.country}`}
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}
