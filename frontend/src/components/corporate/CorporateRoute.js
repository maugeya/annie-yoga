import React from "react"

import styles from "./CorporateRoute.module.css"
import CorporateSection from "../corporateSection/CorporateSection"
import JumboImageContainer from "../common/jumboImageContainer/JumboImageContainer"

export default function CorporateRoute() {
  return (
    <div className={styles.container}>
      <JumboImageContainer
        headerTitle="Corporate Yoga"
        headerSubTitle="Get Involved"
        centerTextOverlay
        imageUrl={require("../../assets/corporate-main.jpg")}
      />
      <CorporateSection />
    </div>
  )
}
