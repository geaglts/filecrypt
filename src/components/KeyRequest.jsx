import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ArrowBigRightLines } from 'tabler-icons-react'
import PropTypes from 'prop-types'

import Button from '@common/Button'
import Info from '@common/Info'

import styles from '@styles/KeyRequest.module.scss'

const KeyRequest = ({ onContinue }) => {
  const [key, setKey] = useState('')
  const files = useSelector((state) => state.files)

  const handleGenerateKey = () => {
    setKey('secret')
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>CLAVE</h3>
      <input
        className="input"
        type="text"
        placeholder="Ingresa la clave"
        onChange={(e) => setKey(e.target.value)}
      />
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
