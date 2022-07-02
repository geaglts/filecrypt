import { Upload } from 'tabler-icons-react'
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

export default FileUploader
