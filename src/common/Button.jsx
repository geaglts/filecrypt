import PropTypes from 'prop-types'
import classNames from '@utils/classNames'
import styles from '@styles/Button.module.scss'

const Button = ({ children, typeStyle = 'primary', ...rest }) => {
  return (
    <button {...rest} className={classNames(styles.container, styles[typeStyle])}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  typeStyle: PropTypes.string,
}

export default Button
