import React from "react"

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
        <img className={styles.cardImage} src={retreat_location.s3_url} />
        <div className={styles.imageTextOverlay}>{retreat_location.name}</div>
      </div>
      <div className={styles.cardContentContainer}>
        <ul>{renderRetreatDetails(retreat_dates)}</ul>

        <div>
          <a className="inlineLink" href={retreat_location.url}>
            <p>
              {retreat_location.place}, {retreat_location.country}
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}
