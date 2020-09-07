import React from "react"

import styles from "./Burger.module.css"

export default function Burger({ open, setOpen }) {
  const handleBurgerClick = () => {
    setOpen(!open)
  }

  const firstLinePosition = open
    ? styles.firstLinePositionOpen
    : styles.firstLinePositionClosed
  const secondLinePosition = open
    ? styles.secondLinePositionOpen
    : styles.secondLinePositionClosed
  const thirdLinePosition = open
    ? styles.thirdLinePositionOpen
    : styles.thirdLinePositionClosed

  return (
    <button
      className={styles.container}
      open={open}
      onClick={handleBurgerClick}
    >
      <div className={`${firstLinePosition}`} />
      <div className={`${secondLinePosition}`} />
      <div className={`${thirdLinePosition}`} />
    </button>
  )
}
