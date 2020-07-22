import React from "react"
import { Link } from "react-router-dom"

import styles from "./NavBar.module.css"

export default function NavBar({ scrollY }) {
  const isPastScrollMin = (scrollY) => {
    return scrollY > 87.84
  }

  const darkNav = isPastScrollMin(scrollY)

  return (
    <div className={scrollY < 87.84 ? styles.container : styles.containerDark}>
      <div className={styles.logoContainer}>
        <a href="https://google.com">
          <img
            className={styles.logo}
            src={require("../../assets/annie-logo.png")}
            alt="Annie May Rice logo"
          />
        </a>
      </div>
      <ul className={styles.navLinkList}>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/classes">Classes</Link>
        </li>
        <li>
          <Link to="/retreats">Retreats</Link>
          <ul className={styles.retreatMenu}>
            <li>
              <Link to="/retreats/tuscan-hills">Tuscan Hills</Link>
            </li>
            <li>
              <Link to="/retreats/fire-and-water">About</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/corporate">Corporate</Link>
        </li>
        <li>
          <Link to="/food">Food</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  )
}
