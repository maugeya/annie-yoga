import React from "react"
import styles from "./NavBar.module.css"

export default function NavBar() {
  return (
    <div className={styles.container}>
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
          <a href="https://google.com">About</a>
        </li>
        <li>
          <a href="https://google.com">Classes</a>
        </li>
        <li>
          <a href="https://google.com">Retreats</a>
          <ul className={styles.retreatMenu}>
            <li>
              <a href="https://google.com">Tuscan hills</a>
            </li>
            <li>
              <a href="https://google.com">Fire and Water</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="https://google.com">Corporate</a>
        </li>
        <li>
          <a href="https://google.com">Food</a>
        </li>
        <li>
          <a href="https://google.com">Blog</a>
        </li>
      </ul>
    </div>
  )
}
