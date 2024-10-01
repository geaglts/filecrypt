import styles from '@styles/Textarea.module.scss'

const Textarea = (props) => {
  return <textarea className={styles.textarea} {...props} />
}

export default Textarea
