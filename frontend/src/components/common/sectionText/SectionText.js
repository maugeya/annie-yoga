import React from "react"

import styles from "./SectionText.module.css"

export default function SectionText({ children }) {
  return <div className={styles.sectionText}>{children}</div>
}
