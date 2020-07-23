import React from "react"

import styles from "./HomeRoute.module.css"
import AboutSection from "../aboutSection/AboutSection"
import annieWarrior from "../../assets/annie-warrior-crop.png"
import YogaBackgroundSection from "../yogaBackgroundSection/YogaBackgroundSection"
import ParallaxImage from "../common/parallaxImage/ParallaxImage"
import SubscribeSection from "../subscribeSection/SubscribeSection"

export default function HomeRoute() {
  return (
    <div className={styles.container}>
      <div className={styles.jumboContainer}>
        <div className={styles.mainImage} />
        <div className={styles.textOverlay}>
          <h1 className={styles.animatedUnderline}>Annie May Rice</h1>
          <h2>Yoga</h2>
        </div>
      </div>
      <AboutSection />
      <ParallaxImage image={annieWarrior} />
      <YogaBackgroundSection />
      <SubscribeSection />
    </div>
  )
}
