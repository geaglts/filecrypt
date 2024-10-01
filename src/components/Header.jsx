import styles from '@styles/Header.module.scss'
import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header className={styles.container}>
      <h1>{title}</h1>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
