import React, { useState, useEffect } from "react"

import Layout from "../layout/Layout"

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
        .catch((err) => setError(err))
    }

    fetchData()
  }, [])
  return (
    <Layout>
      <div>CLASSESROUTE</div>
    </Layout>
  )
}
