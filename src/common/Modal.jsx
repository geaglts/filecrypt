import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'

import styles from '@styles/Modal.module.scss'

const Modal = ({ isOpen = false, onClose = () => {}, children, hideClose }) => {
  if (!isOpen) return null
  return createPortal(
    <div className={styles.container}>
      <div className={styles.content}>
        {!hideClose && (
          <button className={styles.close_btn} onClick={onClose}>
            cerrar
          </button>
        )}
        {children}
      </div>
    </div>,
    document.getElementById('modal')
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
  hideClose: PropTypes.bool,
}

export default Modal
