import React from "react"

import styles from "./AppImageGrid.module.css"

export default function AppImageGrid({ imageURLs }) {
  return (
    <div className={styles.galleryContainer}>
      {imageURLs.map((imageURL, i) => (
        <div className={styles.imageContainer} key={i}>
          <img src={imageURL} alt="retreat" />
        </div>
      ))}
    </div>
  )
}
