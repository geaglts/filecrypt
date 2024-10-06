import { useState } from 'react'
import { IconEyeClosed, IconEyeEdit } from '@tabler/icons-react'
import styles from '@styles/Input.module.scss'
import PropTypes from 'prop-types'

const iconSize = 28

const Input = (props) => {
  const [showPassword, setShowPassword] = useState(false)

  const toggleShow = () => {
    setShowPassword(!showPassword)
  }

  if (props.type === 'password') {
    return (
      <div className={styles.passwordInputContainer}>
        <input
          className={styles.input}
          {...props}
          type={showPassword ? 'text' : 'password'}
        />
        {showPassword ? (
          <IconEyeClosed
            className={styles.inputIcon}
            size={iconSize}
            onClick={toggleShow}
          />
        ) : (
          <IconEyeEdit
            className={styles.inputIcon}
            size={iconSize}
            onClick={toggleShow}
          />
        )}
      </div>
    )
  }

  return <input className={styles.input} {...props} />
}

Input.propTypes = {
  type: PropTypes.string,
}

export default Input
