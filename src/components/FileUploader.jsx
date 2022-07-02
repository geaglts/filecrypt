import { Upload } from 'tabler-icons-react'
import folderIcon from '@assets/icons/folder.svg'
import styles from '@styles/FileUploader.module.scss'

const FileUploader = ({ onLoadFiles, validFiles = '.txt' }) => {
  // const handleCryptFiles = () => {
  //   files.map(({ file, name }) => {
  //     const reader = new FileReader()
  //     reader.readAsText(file)
  //     reader.onload = async (e) => {
  //       const content = e.target.result
  //       const encryptedContent = await encryptFiles(content, 'secret')
  //       const blob = new Blob([encryptedContent], { type: file.type })
  //       const url = URL.createObjectURL(blob)
  //       setFileBlobs((prevState) => {
  //         return prevState.concat([{ url, name }])
  //       })
  //     }
  //   })
  // }

  // const checkContent = () => {
  //   console.log(fileBlobs)
  // }

  // const downloadFiles = () => {
  //   fileBlobs.map(({ url, name }) => {
  //     const a = document.createElement('a')
  //     a.href = url
  //     a.download = name
  //     a.click()
  //   })
  // }

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
