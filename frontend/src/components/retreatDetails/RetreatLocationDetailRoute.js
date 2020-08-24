import React from "react"
import JumboImageContainer from "../common/jumboImageContainer/JumboImageContainer"
import RetreatLocationDetailSection from "./RetreatLocationDetailSection"

export default function RetreatLocationDetailRoute({
  retreatLocation,
  retreatDates,
}) {
  return (
    <div className="container">
      <JumboImageContainer
        headerTitle={retreatLocation.name}
        headerSubTitle={retreatLocation.subtitle}
        centerTextOverlay
        imageUrl={`${retreatLocation.retreatMainImageS3Url}`}
      />
      <RetreatLocationDetailSection
        retreatLocation={retreatLocation}
        retreatDates={retreatDates}
      />
    </div>
  )
}
