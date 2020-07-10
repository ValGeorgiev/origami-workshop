import React from 'react'
import Link from '../link'
import styles from './index.module.css'

const Header = () => {
  return (
    <header className={styles.navigation}>
      <Link href="#" title="Going to 1" type="header" />
      <Link href="#" title="Going to 2" type="header" />
      <Link href="#" title="Going to 3" type="header" />
      <Link href="#" title="Going to 4" type="header" />
      <Link href="#" title="Going to 5" type="header" />
      <Link href="#" title="Going to 6" type="header" />
    </header>
  )
}

export default Header