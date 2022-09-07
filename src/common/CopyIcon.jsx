import { useState } from 'react'
import PropTypes from 'prop-types'

import copyIcon from '@icons/copy.svg'

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
    <button className={classes} onClick={handleClick}>
      {copied && <span>Copiado 🎉</span>}
      <img src={copyIcon} alt="Copy key icon" />
    </button>
  )
}

CopyIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.string,
}

export default CopyIcon
