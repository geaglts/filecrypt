function classNames(...classes) {
  try {
    return classes.join(' ')
  } catch (error) {
    return ''
  }
}

export default classNames
