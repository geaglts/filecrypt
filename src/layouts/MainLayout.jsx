import PropTypes from 'prop-types'

import Header from '@components/Header'
import Footer from '@components/Footer'

import styles from '@styles/MainLayout.module.scss'

const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
