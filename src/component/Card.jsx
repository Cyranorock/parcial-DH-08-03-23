
import React from 'react'
import styles from './Card.module.scss'

function Card({ userName , banda }) {
  return (
    <div>Hola {userName} tu banda favorito es {banda}</div>
  )
}
export default Card