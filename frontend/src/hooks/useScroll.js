import { useState, useEffect } from "react"

export default function useScroll() {
  const [scrollYPercentage, setScrollYPercentage] = useState(0)

  function logScroll() {
    setScrollYPercentage((window.pageYOffset / window.innerHeight) * 100)
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logScroll)
    }
    watchScroll()
    return () => {
      window.removeEventListener("scroll", logScroll)
    }
  }, [scrollYPercentage])
  return scrollYPercentage
}
