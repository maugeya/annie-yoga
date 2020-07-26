import React, { useState, useEffect } from "react"

import Layout from "../layout/Layout"
import LoadingSpinner from "../common/loadingSpinner/LoadingSpinner"

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
    <Layout>
      {isLoading && <LoadingSpinner />}
      <div>{isLoading.toString()}</div>
      {yogaClasses.map((yogaClass, i) => (
        <p key={i}>
          {yogaClass.where},{yogaClass.day_of_week}, {yogaClass.time}
        </p>
      ))}
    </Layout>
  )
}
