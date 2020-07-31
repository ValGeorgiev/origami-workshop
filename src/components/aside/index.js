import React, { Component } from 'react'
import Link from '../link'
import styles from './index.module.css'
import getNavigation from '../../utils/navigation'
import UserContext from '../../Context'

class Aside extends Component {
  
  static contextType = UserContext

  render() {
    const {
      user
    } = this.context
    
    const links = getNavigation(user)
    return (
      <aside className={styles.container}>
        {
          links.map(navElement => {
            return (
              <Link
                key={navElement.title}
                href={navElement.link}
                title={navElement.title}
                type="aside"
              />
            )
          })
        }
      </aside>
    )
  }
}

export default Aside