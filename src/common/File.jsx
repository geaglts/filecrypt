import PropTypes from 'prop-types'
import styles from '@styles/File.module.scss'

const File = ({ ext }) => {
  return (
    <div className={styles.container}>
      <p>?</p>
      <p>{ext}</p>
    </div>
  )
}

File.propTypes = {
  ext: PropTypes.string,
}

export default File
