import React from "react"

import styles from "./CorporateRoute.module.css"
import CorporateSection from "../corporateSection/CorporateSection"

export default function CorporateRoute() {
  return (
    <div className={styles.container}>
      <div className="jumboContainer">
        <div className={`jumboImage ${styles.mainImage}`} />
        <div className="centerTextOverlay">
          <h1 className="animatedUnderline">Corporate Yoga</h1>
          <h2>Get Involved</h2>
        </div>
      </div>
      <CorporateSection />
    </div>
  )
}
