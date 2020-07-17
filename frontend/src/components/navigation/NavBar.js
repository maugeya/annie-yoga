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
          <a href="https://google.com">
            <span className={styles.navLinkText}>About</span>
          </a>
        </li>
        <li>
          <a href="https://google.com">
            <span className={styles.navLinkText}>Classes</span>
          </a>
        </li>
        <li>
          <a href="https://google.com">
            <span className={styles.navLinkText}>Retreats</span>
          </a>
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
          <a href="https://google.com">
            <span className={styles.navLinkText}>Corporate</span>
          </a>
        </li>
        <li>
          <a href="https://google.com">
            <span className={styles.navLinkText}>Food</span>
          </a>
        </li>
        <li>
          <a href="https://google.com">
            <span className={styles.navLinkText}>Blog</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
