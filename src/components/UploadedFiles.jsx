import Button from '@common/Button'
import styles from '@styles/UploadedFiles.module.scss'

const UploadedFiles = ({
  onClearFiles,
  onEncrypt,
  onDecrypt,
  onDownload,
  children,
}) => {
  return (
    <section className={styles.container}>
      <button className={styles.close_btn} onClick={onClearFiles}>
        Limpiar
      </button>
      <div className={styles.file_container}>
        <h2>Files</h2>
        <div className={styles.file_list}>{children}</div>
      </div>
      <div className={styles.button_options}>
        <Button onClick={onEncrypt}>Encriptar</Button>
        <Button onClick={onDecrypt}>Desencriptar</Button>
      </div>
      <Button onClick={onDownload}>Descargar archivos</Button>
    </section>
  )
}

export default UploadedFiles
