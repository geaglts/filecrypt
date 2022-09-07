import { useState } from 'react'
import PropTypes from 'prop-types'

import classNames from '@utils/classNames'

import copyIcon from '@icons/copy.svg'

import styles from '@styles/CopyIcon.module.scss'

const CopyIcon = ({ onClick, classes }) => {
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    onClick()
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2500)
  }

  return (
    <button className={classNames(classes, styles.container)} onClick={handleClick}>
      {copied && <span className={styles.copyLabel}>Copiado 🎉</span>}
      <img src={copyIcon} alt="Copy key icon" />
    </button>
  )
}

CopyIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.string,
}

export default CopyIcon
