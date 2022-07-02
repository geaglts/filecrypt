const generateBlobUrl = (data = '', config = {}) => {
  const blob = new Blob([data], config)
  const blobUrl = URL.createObjectURL(blob)
  return blobUrl
}

export default generateBlobUrl
