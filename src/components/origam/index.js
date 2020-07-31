import React from 'react'
import styles from './index.module.css'
import image from '../../images/blue-origami-bird.png'

const Origam = ({ description, author, index }) => {
  return (
    <div className={styles.container}>
      <img alt="origam" className={styles.image} src={image} />
      <p className={styles.description}>
        <span>{index} -</span>
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