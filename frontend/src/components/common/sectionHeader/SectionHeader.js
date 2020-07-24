import React from "react"

import styles from "./SectionHeader.module.css"

export default function SectionHeader({ title }) {
  return (
    <div className={styles.sectionTitle}>
      <h1
        className={`darkTitle leftPartialUnderline ${styles.sectionTitleHeader}`}
      >
        {title}
      </h1>
    </div>
  )
}
