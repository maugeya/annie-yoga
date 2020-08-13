import React from "react"

import styles from "./JumboImageContainer.module.css"

export default function JumboImageContainer({
  headerTitle,
  headerSubTitle,
  centerTextOverlay,
  imageS3Url,
}) {
  return (
    <div className={styles.jumboContainer}>
      <img src={imageS3Url} />
      <div
        className={
          centerTextOverlay ? styles.centerTextOverlay : styles.rightTextOverlay
        }
      >
        <h1 className="animatedUnderline headerTitle">{headerTitle}</h1>
        <h2>{headerSubTitle}</h2>
      </div>
    </div>
  )
}
