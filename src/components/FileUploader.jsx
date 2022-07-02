import { Upload } from 'tabler-icons-react'
import PropTypes from 'prop-types'
import styles from '@styles/FileUploader.module.scss'

const FileUploader = ({ onLoadFiles, validFiles = '.txt' }) => {
  return (
    <label className={styles.container} htmlFor="files">
      <Upload size={42} />
      <p>Selecciona tus archivos ({validFiles})</p>
      <input
        className={styles.input}
        type="file"
        multiple
        accept={validFiles}
        id="files"
        name="files"
        onChange={onLoadFiles}
      />
    </label>
  )
}

FileUploader.propTypes = {
  onLoadFiles: PropTypes.func.isRequired,
  validFiles: PropTypes.string,
}

export default FileUploader
