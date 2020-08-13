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
        imageS3Url="https://annie-may-rice-yoga.s3-eu-west-1.amazonaws.com/annie-corporate.jpg"
      />
      <CorporateSection />
    </div>
  )
}
