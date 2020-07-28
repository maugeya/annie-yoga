import React from "react"

import styles from "./JumboImageContainer.module.css"

export default function JumboImageContainer({
  children,
  headerTitle,
  headerSubTitle,
}) {
  return (
    <div className={styles.jumboContainer}>
      {children}
      <div className={styles.rightTextOverlay}>
        <h1 className="animatedUnderline">{headerTitle}</h1>
        <h2>{headerSubTitle}</h2>
      </div>
    </div>
  )
}
