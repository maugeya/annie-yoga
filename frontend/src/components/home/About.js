import React from "react"

import styles from "./About.module.css"

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>ABOUT ME</div>
      <div>
        The Yoga Practice in association with Little Greene Yoga has been
        running adult yoga classes in the South Side of Glasgow, Scotland for
        the past 15 years. Classes are popular and are booked on a 6 week block
        basis, though there is the option to book a drop-in place if one is
        available. The Yoga Practice operates a booking system to control the
        class numbers therefore ensuring the comfort and safety of all students.
        Veronica Greene, Founder of Little Greene Yoga and the Yoga Practice,
        qualified as an Iyengar yoga instructor (Junior Intermediate Level 1).
        She is a fully qualified Children’s yoga instructor and a Senior Yoga
        Instructor under Yoga Alliance. Little Greene Yoga in association with
        The Yoga Practice is the only Registered Children’s Yoga School in
        Scotland.{" "}
      </div>
    </div>
  )
}
