import React from "react"
import { Link } from "react-router-dom"

import styles from "./BurgerMenu.module.css"

const BurgerMenu = ({ open, setOpen }) => {
  const menuPostitionStyles = open ? styles.open : ""

  return (
    <nav className={`${styles.container} ${menuPostitionStyles}`} open={open}>
      <div className={styles.logoContainer}>
        <img
          className={styles.logo}
          src={require("../../assets/annie-logo.png")}
          alt="Annie May Rice logo"
        />
      </div>
      <div className={styles.linkContainer}>
        <Link
          className={styles.menuLinks}
          to="/"
          onClick={() => setOpen(false)}
        >
          About
        </Link>
        <Link
          className={styles.menuLinks}
          to="/classes"
          onClick={() => setOpen(false)}
        >
          Classes
        </Link>
        <Link
          className={styles.menuLinks}
          to="/retreats"
          onClick={() => setOpen(false)}
        >
          Retreats
        </Link>
        <Link
          className={styles.menuLinks}
          to="/corporate"
          onClick={() => setOpen(false)}
        >
          Corporate
        </Link>
        <Link
          className={styles.menuLinks}
          to="/food"
          onClick={() => setOpen(false)}
        >
          Food
        </Link>
        <Link
          className={styles.menuLinks}
          to="/blog"
          onClick={() => setOpen(false)}
        >
          Blog
        </Link>
      </div>
    </nav>
  )
}

export default BurgerMenu
