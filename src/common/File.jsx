import styles from '@styles/File.module.scss'

const File = ({ ext }) => {
  return (
    <div className={styles.container}>
      <p>?</p>
      <p>{ext}</p>
    </div>
  )
}

export default File
