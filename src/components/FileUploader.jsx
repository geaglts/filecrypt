import { useRef, useState } from 'react'
import CryptoJS from 'crypto-js'

import folderIcon from '@assets/icons/folder.svg'
import Button from '@common/Button'
import styles from '@styles/FileUploader.module.scss'

const VALID_FILES = '.env, .example, .txt'

const FileUploader = () => {
  const formRef = useRef(null)
  const [files, setFiles] = useState(null)

  const handleChangeFile = (e) => {
    const files = e.currentTarget.files
    const parsedFiles = [...files].map((file) => {
      return {
        ext: file.name.split('.').pop(),
        name: file.name,
        file,
      }
    })
    setFiles(parsedFiles)
  }

  const handleCryptFiles = async () => {}

  return (
    <form className={styles.container} ref={formRef}>
      {files ? (
        <section className={styles.file_list_container}>
          <button className={styles.close} onClick={() => setFiles(null)}>
            cerrar
          </button>
          <h2>Files</h2>
          <div className={styles.file_list}>
            {files.map((file, index) => {
              return (
                <div className={styles.file} key={`file-uploader_file_${index}`}>
                  <p>?</p>
                  <p>{file.ext}</p>
                </div>
              )
            })}
          </div>
        </section>
      ) : (
        <label className={styles.label} htmlFor="files">
          <img className={styles.icon} src={folderIcon} alt="icon" />
          <p>Selecciona tus archivos ({VALID_FILES})</p>
          <input
            className={styles.input}
            type="file"
            multiple
            accept={VALID_FILES}
            id="files"
            name="files"
            onChange={handleChangeFile}
          />
        </label>
      )}
      {files && (
        <div className={styles.button_options}>
          <Button type="button" onClick={handleCryptFiles}>
            Encriptar
          </Button>
          <Button type="button" onClick={handleCryptFiles}>
            Desencriptar
          </Button>
        </div>
      )}
    </form>
  )
}

export default FileUploader
