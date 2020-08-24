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
        imageUrl={require("../../assets/retreat-main.jpg")}
      />
      {isLoading && <LoadingSpinner />}
      <RetreatsSection retreats={retreats} />
    </div>
  )
}
