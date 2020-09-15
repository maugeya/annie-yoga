import React from "react"

import styles from "./SubscribeSection.module.css"
import SubmitButton from "../forms/submitButton/SubmitButton"
import AppInput from "../forms/appInputGroup.js/AppInputGroup"

export default function SubscribeSection() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("form submitted!")
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.sectionHeader}>Subscribe</h3>
      <div className={styles.textContainer}>
        <p>
          I send out a monthly or so email with thoughts and recipes, links and
          yoga info, would you like it? Sign up here:
        </p>
      </div>

      <form className={formStyles.form} onSubmit={handleSubmit}>
        <AppInput type="email" label="Email:" />
        <div className={formStyles.formSubmit}>
          <SubmitButton title="Subscribe" />
        </div>
      </form>
    </div>
  )
}
