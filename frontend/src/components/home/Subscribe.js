import React from "react"

import styles from "./Subscribe.module.css"
import formStyles from "../forms/forms.module.css"
import SubmitButton from "../forms/submitButton/SubmitButton"

export default function Subscribe() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p>
          I send out a monthly or so email with thoughts and recipes, links and
          yoga info, would you like it? Sign up here:
        </p>
      </div>

      <form className={formStyles.form}>
        <div className={formStyles.formGroup}>
          <label>
            Email:
            <input type="email" />
          </label>
        </div>
        <div className={formStyles.formSubmit}>
          <SubmitButton title="Subscribe" />
        </div>
      </form>
    </div>
  )
}
