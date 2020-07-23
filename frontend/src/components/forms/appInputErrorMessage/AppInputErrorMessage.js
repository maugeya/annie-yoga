import React from "react"

import styles from "./AppInputErrorMessage.module.css"

export default function AppInputErrorMessage({ error }) {
  return (
    <div className={styles.errorMessageContainer}>
      <p className={styles.errorMessage}>{error}</p>
    </div>
  )
}
