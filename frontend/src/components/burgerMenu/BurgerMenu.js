import React from "react"
import { Link } from "react-router-dom"

import styles from "./BurgerMenu.module.css"

const BurgerMenu = ({ open }) => {
  const menuPostitionStyles = open ? styles.open : ""
  return (
    <nav className={`${styles.container} ${menuPostitionStyles}`} open={open}>
      <img
        className={styles.logo}
        src={require("../../assets/annie-logo.png")}
        alt="Annie May Rice logo"
      />
      <Link className={styles.menuLinks} to="/">
        About
      </Link>
      <Link className={styles.menuLinks} to="/classes">
        Classes
      </Link>
      <Link className={styles.menuLinks} to="/retreats">
        Retreats
      </Link>
      <Link className={styles.menuLinks} to="/corporate">
        Corporate
      </Link>
      <Link className={styles.menuLinks} to="/food">
        Food
      </Link>
      <Link className={styles.menuLinks} to="/blog">
        Blog
      </Link>
    </nav>
  )
}

export default BurgerMenu
