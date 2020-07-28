import React from "react"

import styles from "./RetreatsRoute.module.css"
import JumboImageContainer from "../common/jumboImageContainer/JumboImageContainer"

export default function RetreatsRoute() {
  return (
    <div className={styles.container}>
      <JumboImageContainer
        headerTitle="Retreats and Workshops"
        headerSubTitle="More yoga, retreats and workshops"
        centerTextOverlay
      >
        <div className={`jumboImage ${styles.mainImage}`} />
      </JumboImageContainer>
    </div>
  )
}
