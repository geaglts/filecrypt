import CryptoJS from 'crypto-js'

export const asyncFileRaeder = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = (evt) => {
      resolve(evt.target.result)
    }
    reader.onerror = () => {
      reject(false)
    }
  })
}

export function encryptFile(content, secret) {
  return CryptoJS.AES.encrypt(content, secret).toString()
}

export function decrytFile(content, secret) {
  return CryptoJS.AES.decrypt(content, secret).toString(CryptoJS.enc.Utf8)
}
