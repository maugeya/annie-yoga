import React from "react"

import styles from "./Burger.module.css"

export default function Burger({ open, setOpen }) {
  const handleBurgerClick = () => {
    setOpen(!open)
  }

  return (
    <button
      className={styles.container}
      open={open}
      onClick={handleBurgerClick}
    >
      <div
        className={`${
          open ? styles.firstLinePositionOpen : styles.firstLinePositionClosed
        }`}
      />
      <div
        className={`${
          open ? styles.secondLinePositionOpen : styles.secondLinePositionClosed
        }`}
      />
      <div
        className={`${
          open ? styles.thirdLinePositionOpen : styles.thirdLinePositionClosed
        }`}
      />
    </button>
  )
}
