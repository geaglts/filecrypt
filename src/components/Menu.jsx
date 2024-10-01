import { Link } from 'react-router-dom'
import { FileSymlink, Key } from 'tabler-icons-react'

import styles from '@styles/Menu.module.scss'

const elements = [
  { id: 1, label: 'Encrypt Text', icon: <Key size={25} />, to: '/' },
  { id: 2, label: 'Fileshare', icon: <FileSymlink size={25} />, to: '/fs' },
]

const Menu = () => {
  return (
    <section className={styles.container}>
      {elements.map((e) => {
        return (
          <Link to={e.to} className={styles.item} title={e.label} key={e.id}>
            {e.icon}
          </Link>
        )
      })}
    </section>
  )
}

export default Menu
