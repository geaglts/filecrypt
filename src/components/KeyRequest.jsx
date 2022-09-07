import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ArrowBigRightLines } from 'tabler-icons-react'
import PropTypes from 'prop-types'

import * as keyGenerator from '@api/keyGenerator'

import Button from '@common/Button'
import Info from '@common/Info'
import ShowIcon from '@common/ShowIcon'
import CopyIcon from '@common/CopyIcon'

import styles from '@styles/KeyRequest.module.scss'

const KeyRequest = ({ onContinue }) => {
  const [key, setKey] = useState('')
  const [showKey, setShowKey] = useState(false)
  const files = useSelector((state) => state.files)

  const handleGenerateKey = async () => {
    const randomSecret = await keyGenerator.getKey()
    setKey(randomSecret)
  }

  const handleCopy = () => {
    try {
      window.navigator.clipboard.writeText(key)
    } catch {
      return
    }
  }

  const handleShow = () => {
    setShowKey(!showKey)
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>CLAVE</h3>
      <div className={styles.inputContainer}>
        <input
          className="input"
          type={showKey ? 'text' : 'password'}
          placeholder="Ingresa la clave"
          onChange={(e) => setKey(e.target.value)}
          value={key}
        />
        <ShowIcon classNames={styles.showIconButton} onClick={handleShow} />
        <CopyIcon classes={styles.copyIconButton} onClick={handleCopy} />
      </div>
      {files.selected_action !== 'decrypt' && (
        <>
          <Info classes={[styles.info]}>
            Guarda bien esta clave, ya que la necesitaras para poder regresar tus
            archivos a la normalidad.
          </Info>
          <button className={`link ${styles.link}`} onClick={handleGenerateKey}>
            generar una clave aleatoria
          </button>
        </>
      )}
      <Button onClick={onContinue(key)}>
        Continuar <ArrowBigRightLines />
      </Button>
    </div>
  )
}

KeyRequest.propTypes = {
  onContinue: PropTypes.func.isRequired,
}

export default KeyRequest
