import React from 'react'
import styles from './index.module.css'

const Origam = ({ description, author }) => {
  return (
    <div className={styles.container}>
      <p className={styles.description}>
        {description}
      </p>
      <div>
        <span className={styles.user}>
          <small>Author: </small>
          {author.username}
        </span>
        
      </div>
    </div>
  )
}

export default Origam