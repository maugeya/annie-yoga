import React from "react"

import styles from "./ClassesRoute.module.css"
import LoadingSpinner from "../common/loadingSpinner/LoadingSpinner"
import ClassesSection from "../classesSection/ClassesSection"
import JumboImageContainer from "../common/jumboImageContainer/JumboImageContainer"
import useFetch from "../../hooks/useFetch"

export default function ClassesRoute() {
  const res = useFetch("http://localhost:8000/classes/", {})
  if (res.error.length) console.log("ERROR WIP", res.error)

  const yogaClasses = res.data
  const isLoading = res.isLoading
  return (
    <div className={styles.container}>
      <JumboImageContainer
        headerTitle="Yoga"
        headerSubTitle="Come yoga with me"
        centerTextOverlay
      >
        <div className={`jumboImage ${styles.mainImage}`} />
      </JumboImageContainer>
      {isLoading && <LoadingSpinner />}
      <ClassesSection yogaClasses={yogaClasses} />
    </div>
  )
}
