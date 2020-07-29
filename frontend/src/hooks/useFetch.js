import { useEffect, useState } from "react"

const useFetch = (url, options) => {
  const [data, setData] = useState([])
  const [error, setError] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      try {
        const res = await fetch(url, options)
        const json = await res.json()
        setData(json)
        setIsLoading(false)
      } catch (err) {
        setError(error)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return { data, error, isLoading }
}

export default useFetch