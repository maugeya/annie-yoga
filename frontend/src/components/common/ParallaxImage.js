import React from "react"
import { Parallax } from "react-parallax"

import styles from "./ParallaxImage.module.css"

export default function ParallaxImage({ image }) {
  return (
    <div>
      <Parallax bgImage={image} bgImageAlt="Annie warrior pose" strength={-200}>
        <div className={styles.imageContainer} />
      </Parallax>
    </div>
  )
}
