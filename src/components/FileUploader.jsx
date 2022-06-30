import { useRef, useState } from 'react'

import folderIcon from '@assets/icons/folder.svg'
import Button from '@common/Button'
import styles from '@styles/FileUploader.module.scss'
import encryptFiles from '@utils/encryptFiles'

const VALID_FILES = '.env, .json, .txt'

const FileUploader = () => {
  const formRef = useRef(null)
  const [files, setFiles] = useState(null)
  const [fileBlobs, setFileBlobs] = useState([])

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

  const handleCryptFiles = () => {
    files.map(({ file, name }) => {
      const reader = new FileReader()
      reader.readAsText(file)
      reader.onload = async (e) => {
        const content = e.target.result
        const encryptedContent = await encryptFiles(content, 'secret')
        const blob = new Blob([encryptedContent], { type: file.type })
        const url = URL.createObjectURL(blob)
        setFileBlobs((prevState) => {
          return prevState.concat([{ url, name }])
        })
      }
    })
  }

  const checkContent = () => {
    console.log(fileBlobs)
  }

  const downloadFiles = () => {
    fileBlobs.map(({ url, name }) => {
      const a = document.createElement('a')
      a.href = url
      a.download = name
      a.click()
    })
  }

  return (
    <form className={styles.container} ref={formRef}>
      {files ? (
        <section className={styles.file_list_container}>
          <button
            className={styles.close}
            onClick={() => {
              setFiles(null)
              setFileBlobs([])
            }}
          >
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
          <Button type="button" onClick={checkContent}>
            Desencriptar
          </Button>
        </div>
      )}
      {fileBlobs.length > 0 && (
        <Button type="button" onClick={downloadFiles}>
          Descargar archivos
        </Button>
      )}
    </form>
  )
}

export default FileUploader
