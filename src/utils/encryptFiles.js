import CryptoJS from 'crypto-js'

export const asyncFileRaeder = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = (evt) => {
      resolve(evt.target.result)
    }
    reader.onerror = (evt) => {
      reject(false)
    }
  })
}

function encryptFiles(content, secret) {
  // const decryptFile = CryptoJS.AES.decrypt(cryptFile, secret)
  //   console.log('cryptFile', cryptFile.toString())
  //   console.log('decryptFile', decryptFile.toString(CryptoJS.enc.Utf8))
  return CryptoJS.AES.encrypt(content, secret).toString()
  //   const fileBlob = new Blob([encryptedFile.toString()], {
  //     type: fileType,
  //   })
  //   return URL.createObjectURL(fileBlob)
  //   output.file = URL.createObjectURL(fileBlob)
  //   output.fileName = `_.${fileExt}`

  //   const encryptedFiles = files.map(async (file) => {
  //     const text = await testAsyncFileRaeder(file.file)
  //     return text

  // let output = ''
  // const fileExt = file.ext
  // const fileType = file.file.type
  // const reader = new FileReader()
  // reader.readAsText(file.file)
  // reader.onload = (evt) => {
  //   const encryptedFile = CryptoJS.AES.encrypt(evt.target.result, secret)
  //   // const decryptFile = CryptoJS.AES.decrypt(cryptFile, secret)
  //   //   console.log('cryptFile', cryptFile.toString())
  //   //   console.log('decryptFile', decryptFile.toString(CryptoJS.enc.Utf8))
  //   const fileBlob = new Blob([encryptedFile.toString()], {
  //     type: fileType,
  //   })
  //   output = URL.createObjectURL(fileBlob)
  //   //   output.file = URL.createObjectURL(fileBlob)
  //   //   output.fileName = `_.${fileExt}`
  // }
  // return output
  //   })
  return encryptedFiles
}

export default encryptFiles
