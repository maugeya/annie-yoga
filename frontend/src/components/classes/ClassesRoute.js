import React, { useState, useEffect } from "react"

import styles from "./ClassesRoute.module.css"
import LoadingSpinner from "../common/loadingSpinner/LoadingSpinner"
import ClassesSection from "../classesSection/ClassesSection"
import JumboImageContainer from "../common/jumboImageContainer/JumboImageContainer"

export default function ClassesRoute() {
  const [yogaClasses, setYogaClasses] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8000/classes/")
      res
        .json()
        .then((res) => {
          setYogaClasses(res)
          setIsLoading(false)
        })
        .catch((err) => {
          setIsLoading(false)
          setError(err)
        })
    }
    fetchData()
  }, [])

  return (
    <div className={styles.container}>
      <JumboImageContainer
        headerTitle="Yoga"
        headerSubTitle="Come yoga with me"
      >
        <div className={`jumboImage ${styles.mainImage}`} />
      </JumboImageContainer>
      {isLoading && <LoadingSpinner />}
      <ClassesSection yogaClasses={yogaClasses} />
    </div>
  )
}
