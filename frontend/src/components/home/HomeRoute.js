import React from "react"

import styles from "./HomeRoute.module.css"

export default function HomeRoute() {
  return (
    <div className={styles.container}>
      <div className={styles.mainImage} />
      <div className={styles.textOverlay}>
        <h1 className={styles.annieTitle}>Annie May Rice</h1>
        <h2>Yoga</h2>
      </div>
    </div>
  )
}
