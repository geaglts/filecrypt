import PropTypes from 'prop-types'

import Header from '@components/Header'
import Footer from '@components/Footer'
import Menu from '@components/Menu'

import styles from '@styles/MainLayout.module.scss'

const MainLayout = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <Header title={title} />
      <Menu />
      {children}
      <Footer />
    </div>
  )
}

MainLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default MainLayout
