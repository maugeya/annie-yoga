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
      <form
        action="https://tinyletter.com/anniemayrice"
        method="post"
        target="popupwindow"
        onsubmit="window.open('https://tinyletter.com/anniemayrice', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
      >
        <p>
          <label for="tlemail">Enter your email address</label>
        </p>
        <p>
          <AppInput type="text" name="email" id="tlemail" aria-label="email" />
        </p>
        <input type="hidden" value="1" name="embed" />
        <SubmitButton type="submit" title="Subscribe" />
        <p>
          <a
            href="https://tinyletter.com"
            target="_blank"
            className="inlineLink"
          >
            powered by TinyLetter
          </a>
        </p>
      </form>
    </div>
  )
}
