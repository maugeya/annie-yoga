import { useEffect, useState } from "react"
import { camelizeKeys } from "humps"

const useFetch = (url, options) => {
  const [data, setData] = useState([])
  const [error, setError] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      try {
        const res = await fetch(url, options)
        const json = camelizeKeys(await res.json())
        setData(json)
        setIsLoading(false)
      } catch (err) {
        setError(error)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { data, error, isLoading }
}

export default useFetch
