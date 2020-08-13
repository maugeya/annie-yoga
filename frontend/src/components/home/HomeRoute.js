import React from "react"

import styles from "./HomeRoute.module.css"
import AboutSection from "../aboutSection/AboutSection"
import annieWarrior from "../../assets/annie-warrior-crop.png"
import YogaBackgroundSection from "../yogaBackgroundSection/YogaBackgroundSection"
import ParallaxImage from "../common/parallaxImage/ParallaxImage"
import SubscribeSection from "../subscribeSection/SubscribeSection"
import JumboImageContainer from "../common/jumboImageContainer/JumboImageContainer"

export default function HomeRoute() {
  return (
    <div className={styles.container}>
      <JumboImageContainer
        headerTitle="Annie May Rice"
        headerSubTitle="Yoga"
        imageS3Url="https://annie-may-rice-yoga.s3-eu-west-1.amazonaws.com/about-annie.png"
      ></JumboImageContainer>
      <AboutSection />
      <ParallaxImage image={annieWarrior} />
      <YogaBackgroundSection />
      <SubscribeSection />
    </div>
  )
}
