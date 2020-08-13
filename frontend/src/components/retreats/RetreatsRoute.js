import React from "react"

import styles from "./RetreatsRoute.module.css"
import JumboImageContainer from "../common/jumboImageContainer/JumboImageContainer"
import RetreatsSection from "../retreatsSection/RetreatsSection"
import LoadingSpinner from "../common/loadingSpinner/LoadingSpinner"

export default function RetreatsRoute({ retreats, isLoading }) {
  return (
    <div className={styles.container}>
      <JumboImageContainer
        headerTitle="Retreats and Workshops"
        headerSubTitle="More yoga, retreats and workshops"
        centerTextOverlay
        imageS3Url="https://annie-may-rice-yoga.s3-eu-west-1.amazonaws.com/annie-retreat.jpg"
      >
        <div className={`jumboImage ${styles.mainImage}`} />
      </JumboImageContainer>
      {isLoading && <LoadingSpinner />}
      <RetreatsSection retreats={retreats} />
    </div>
  )
}
