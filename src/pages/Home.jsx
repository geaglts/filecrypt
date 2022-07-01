import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import File from '@common/File'
import Modal from '@common/Modal'
import UploadedFiles from '@components/UploadedFiles'
import FileUploader from '@components/FileUploader'
import MainLayout from '@layouts/MainLayout'

import { setError } from '@redux/reducers/uiSlice'
import { setFiles, clearFiles } from '@redux/reducers/fileSlice'

// import { asyncFileRaeder } from '@utils/encryptFiles'

import styles from '@styles/Home.module.scss'

const VALID_FILES = '.env, .json, .txt'

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()
  const ui = useSelector((state) => state.ui)
  const files = useSelector((state) => state.files)

  const toggleModal = () => {
    console.log(isModalOpen)
    setIsModalOpen(!isModalOpen)
  }

  const handleLoadFiles = (e) => {
    try {
      const files = [...e.currentTarget.files]
      dispatch(setFiles(files))
    } catch (error) {
      dispatch(setError('ops!, something went wrong'))
    }
  }

  const handleClearFiles = () => {
    dispatch(clearFiles())
  }

  const handleEncryptFiles = () => {
    const file = files[0]
    console.log({ file })
  }

  if (ui.error) {
    return <div>{ui.error}</div>
  }

  return (
    <MainLayout>
      <div className={styles.container}>
        {files.registered.length > 0 ? (
          <UploadedFiles
            onClearFiles={handleClearFiles}
            onEncrypt={toggleModal}
            onDecrypt={() => {}}
            onDownload={() => {}}
          >
            {files.registered.map((file) => (
              <File key={file.name} ext={file.name.split('.').pop()} />
            ))}
          </UploadedFiles>
        ) : (
          <FileUploader onLoadFiles={handleLoadFiles} validFiles={VALID_FILES} />
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <div>hola</div>
      </Modal>
    </MainLayout>
  )
}

export default Home
