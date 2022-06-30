import styles from '@styles/Button.module.scss'
import classNames from '@utils/classNames'

const Button = ({ children, typeStyle = 'primary', ...rest }) => {
  return (
    <button {...rest} className={classNames(styles.container, styles[typeStyle])}>
      {children}
    </button>
  )
}

export default Button
