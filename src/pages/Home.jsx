import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import File from '@common/File'
import Modal from '@common/Modal'
import UploadedFiles from '@components/UploadedFiles'
import FileUploader from '@components/FileUploader'
import KeyRequest from '@components/KeyRequest'
import MainLayout from '@layouts/MainLayout'

import { setError } from '@redux/reducers/uiSlice'
import {
  setFiles,
  clearFiles,
  setFileToDownload,
  clearFileToDownload,
  setSelectedAction,
} from '@redux/reducers/fileSlice'

import encryptFile, { asyncFileRaeder } from '@utils/files'
import generateBlobUrl from '@utils/generateBlobUrl'

import styles from '@styles/Home.module.scss'

const VALID_FILES = '.env, .json, .txt'

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()
  const ui = useSelector((state) => state.ui)
  const files = useSelector((state) => state.files)

  const toggleModal = (selectedAction) => () => {
    setIsModalOpen(!isModalOpen)
    selectedAction && dispatch(setSelectedAction(selectedAction))
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
    dispatch(clearFileToDownload())
    dispatch(setSelectedAction(null))
  }

  const handleTransformFiles = (key) => () => {
    switch (files.selected_action) {
      case 'encrypt':
        {
          files.registered.forEach(async (file) => {
            const fileData = await asyncFileRaeder(file)
            const encryptedFile = await encryptFile(fileData, key)
            const blobConfig = { type: file.type }
            const blobUrl = generateBlobUrl(encryptedFile, blobConfig)
            dispatch(setFileToDownload(blobUrl))
          })
        }
        break
      case 'decrypt':
        {
        }
        break
      default:
        return null
    }
    toggleModal()()
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
            onEncrypt={toggleModal('encrypt')}
            onDecrypt={toggleModal('decrypt')}
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
      <Modal isOpen={isModalOpen} onClose={toggleModal()}>
        <KeyRequest onContinue={handleTransformFiles} />
      </Modal>
    </MainLayout>
  )
}

export default Home
