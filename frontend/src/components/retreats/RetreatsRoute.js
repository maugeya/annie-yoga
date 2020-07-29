import React from "react"

import styles from "./RetreatsRoute.module.css"
import JumboImageContainer from "../common/jumboImageContainer/JumboImageContainer"
import RetreatsSection from "../retreatsSection/RetreatsSection"
import LoadingSpinner from "../common/loadingSpinner/LoadingSpinner"
import useFetch from "../../hooks/useFetch"

export default function RetreatsRoute() {
  const res = useFetch("http://localhost:8000/retreats/", {})
  if (res.error.length) console.log("ERROR WIP", res.error)

  const retreats = res.data
  const isLoading = res.isLoading
  return (
    <div className={styles.container}>
      <JumboImageContainer
        headerTitle="Retreats and Workshops"
        headerSubTitle="More yoga, retreats and workshops"
        centerTextOverlay
      >
        <div className={`jumboImage ${styles.mainImage}`} />
      </JumboImageContainer>
      {isLoading && <LoadingSpinner />}
      <RetreatsSection retreats={retreats} />
    </div>
  )
}
