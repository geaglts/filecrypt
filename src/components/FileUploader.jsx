import { useEffect, useRef } from 'react'
import { Upload } from 'tabler-icons-react'
import PropTypes from 'prop-types'
import styles from '@styles/FileUploader.module.scss'

const FileUploader = ({ onLoadFiles, validFiles }) => {
  const dropZoneRef = useRef(null)

  const onDragOver = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    const dropZone = dropZoneRef.current
    dropZone.addEventListener('drop', onLoadFiles)
    dropZone.addEventListener('drag', onDragOver)
    return () => {
      dropZone.removeEventListener('drop', onLoadFiles)
      dropZone.removeEventListener('drag', onDragOver)
    }
  }, [onLoadFiles, onDragOver])

  return (
    <label ref={dropZoneRef} className={styles.container} htmlFor="files">
      <Upload size={42} />
      <p>Arrastra o selecciona tus archivos</p>
      <p>({validFiles})</p>
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
