import PropTypes from 'prop-types'
import { InfoCircle } from 'tabler-icons-react'

import classNames from '@utils/classNames'

const Info = ({ children, classes = [] }) => {
  return (
    <p className={classNames('info', ...classes)}>
      <InfoCircle />
      <span>{children}</span>
    </p>
  )
}

Info.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.array,
}

export default Info
