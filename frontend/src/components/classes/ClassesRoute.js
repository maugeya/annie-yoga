import React, { useState, useEffect } from "react"

import styles from "./ClassesRoute.module.css"
import LoadingSpinner from "../common/loadingSpinner/LoadingSpinner"
import ClassesSection from "../classesSection/ClassesSection"

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
    <div classesName={styles.container}>
      <div className="jumboContainer">
        <div className={`jumboImage ${styles.mainImage}`} />
        <div className="rightTextOverlay">
          <h1 className="animatedUnderline">Yoga</h1>
          <h2>Come yoga with me</h2>
        </div>
      </div>
      {isLoading && <LoadingSpinner />}
      <ClassesSection yogaClasses={yogaClasses} />
    </div>
  )
}
