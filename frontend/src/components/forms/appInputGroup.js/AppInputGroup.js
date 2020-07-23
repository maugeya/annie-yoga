import React from "react"

import AppInputErrorMessage from "../appInputErrorMessage/AppInputErrorMessage"
import styles from "./AppInputGroup.module.css"
import formStyles from "../forms.module.css"

export default function AppInput({ type, label }) {
  return (
    <div className={formStyles.formGroupSingle}>
      <label>
        {label}
        <input className={styles.input} type={type} />
        <AppInputErrorMessage error={false} />
      </label>
    </div>
  )
}
