import React from "react"
import { Parallax, Background } from "react-parallax"

import styles from "./HomeRoute.module.css"
import About from "./About"
import annieWarrior from "../../assets/annie-warrior-crop.png"
import YogaBackground from "./YogaBackground"
import ParallaxImage from "../common/ParallaxImage"
import Subscribe from "./Subscribe"

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
      <About />
      <ParallaxImage image={annieWarrior} />
      <YogaBackground />
      <Subscribe />
    </div>
  )
}
