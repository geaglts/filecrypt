import { useState } from 'react'
import toast from 'react-hot-toast'
import { IconClipboardCheck } from '@tabler/icons-react'

import * as fileshare from '@api/fileshare'

import MainLayout from '@layouts/MainLayout'
import Button from '@common/Button'
import Input from '@common/Input'
import Textarea from '@common/Textarea'
import Modal from '@common/Modal'

import styles from '@styles/Fileshare.module.scss'

const validFormats = ['txt', 'json']

const Fileshare = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [link, setLink] = useState('')

  const onSubmit = async (evt) => {
    evt.preventDefault()
    try {
      const formData = Object.fromEntries(new FormData(evt.target))
      await toast.promise(fileshare.createNewFile(formData), {
        loading: 'Estamos generando tu archivo',
        success: 'El link  sido generado',
        error: 'No fue posible generar el archivo',
      })
      const link = await fileshare.createNewFile(formData)
      if (link) {
        setLink(link)
        setIsModalOpen(true)
        evt.target.reset()
      }
    } catch (error) {
      toast.error('No fue posible generar el archivo')
    }
  }

  const onCopyLink = () => {
    setIsModalOpen(false)
    navigator.clipboard.writeText(link)
  }

  return (
    <MainLayout title="Fileshare">
      <section className={styles.container}>
        <form onSubmit={onSubmit}>
          <div className={styles.formInputVertical}>
            <Input
              type="text"
              name="name"
              placeholder="Nombre del archivo"
              required
            />
            <select name="type">
              {validFormats.map((vf, i) => {
                return (
                  <option key={i + '_ValidFormats'} value={vf}>
                    {vf.toUpperCase()}
                  </option>
                )
              })}
            </select>
          </div>
          <Textarea
            name="content"
            placeholder="Contenido del archivo"
            rows={10}
            required
          />
          <input type="hidden" name="passkey" />
          <Button>Generar Enlace</Button>
        </form>
      </section>
      <Modal isOpen={isModalOpen} hideClose={true}>
        <div className={styles.modal}>
          <p>
            Este enlace <b>no se podrá consultar de nuevo</b>, así que guardalo muy
            bien
          </p>
          <div className={styles.linkContainer}>
            <Input type="text" placeholder="Link" value={link} readOnly />
            <button className={styles.copyButton} onClick={onCopyLink}>
              <IconClipboardCheck size={30} />
            </button>
          </div>
        </div>
      </Modal>
    </MainLayout>
  )
}

export default Fileshare
