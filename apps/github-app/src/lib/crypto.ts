import CryptoJS from 'crypto-js'

const KEY = process.env.ENCRYPTION_KEY!

export function encryptApiKey(apiKey: string): string {
  return CryptoJS.AES.encrypt(apiKey, KEY).toString()
}

export function decryptApiKey(encrypted: string): string {
  const bytes = CryptoJS.AES.decrypt(encrypted, KEY)
  return bytes.toString(CryptoJS.enc.Utf8)
}