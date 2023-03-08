
import React from 'react'
import styles from './Card.module.css'

function Card({ userName , banda }) {
  return (
    <div className={styles.elem}>Hola {userName} tu banda favorita es: {banda}</div>
  )
}
export default Card