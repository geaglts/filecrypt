import { useSelector } from 'react-redux'

import Button from '@common/Button'
import styles from '@styles/UploadedFiles.module.scss'
import { DeviceMobileMessage } from 'tabler-icons-react'

const UploadedFiles = ({
  onClearFiles,
  onEncrypt,
  onDecrypt,
  onDownload,
  children,
}) => {
  const files = useSelector((state) => state.files)

  return (
    <section className={styles.container}>
      <button className={styles.close_btn} onClick={onClearFiles}>
        Limpiar
      </button>
      <div className={styles.file_container}>
        <h2>Archivos</h2>
        <div className={styles.file_list}>{children}</div>
      </div>
      {files.toDownload.length === 0 && (
        <div className={styles.button_options}>
          {(files.selected_action === 'encrypt' || !files.selected_action) && (
            <Button onClick={onEncrypt}>Encriptar</Button>
          )}
          {(files.selected_action === 'decrypt' || !files.selected_action) && (
            <Button onClick={onDecrypt}>Desencriptar</Button>
          )}
        </div>
      )}
      {files.toDownload.length > 0 && (
        <Button typeStyle="success" onClick={onDownload}>
          Descargar archivos
        </Button>
      )}
    </section>
  )
}

export default UploadedFiles
