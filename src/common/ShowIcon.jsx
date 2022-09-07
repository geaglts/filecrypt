import { useState } from 'react'
import PropTypes from 'prop-types'

import eyeAltIcon from '@icons/eyeAlt.svg'
import eyeCloseIcon from '@icons/eyeClose.svg'

const ShowIcon = ({ onClick, classNames }) => {
  const [buttonStatus, setButtonStatus] = useState(0)

  const handleClick = () => {
    setButtonStatus(buttonStatus > 0 ? 0 : 1)
    onClick()
  }

  const status = buttonStatus ? 'Close' : 'Open'
  const Icon = buttonStatus ? eyeAltIcon : eyeCloseIcon

  return (
    <button title={status} onClick={handleClick} className={classNames}>
      <img src={Icon} alt={`${status} icon`} />
    </button>
  )
}

ShowIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  classNames: PropTypes.string,
}

export default ShowIcon
