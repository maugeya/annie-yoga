import React from "react"

import styles from "./Testimonial.module.css"

export default function Testimonial({ children }) {
  return <div className={styles.container}>{children}</div>
}
