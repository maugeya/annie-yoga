import React from "react"

import Layout from "../layout/Layout"
import styles from "./CorporateRoute.module.css"

export default function CorporateRoute() {
  return (
    <div className={styles.container}>
      <div className="jumboContainer">
        <div className={styles.mainImage} />
        <div className="centerTextOverlay">
          <h1 className="animatedUnderline">Corporate Yoga</h1>
          <h2>Get Involved</h2>
        </div>
      </div>
    </div>
  )
}
