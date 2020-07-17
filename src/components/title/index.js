import React from 'react'
import styles from './index.module.css'

const Title = ({ title }) => {
  return (
    <h1 className={styles.title}>{title}</h1>
  )
}

export default Title