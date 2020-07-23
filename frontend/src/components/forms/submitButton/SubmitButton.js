import React from "react"

import styles from "../appButton/AppButton.module.css"

export default function SubmitButton({ title }) {
  return (
    <button
      className={`${styles.buttonGreen} ${styles.appButton}`}
      type="submit"
    >
      {title}
    </button>
  )
}
