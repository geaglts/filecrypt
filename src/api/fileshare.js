import axios from 'axios'
import { endpoints } from './index'

export async function createNewFile(fileProps) {
  try {
    const { data } = await axios.post(endpoints.fileshare.createFile(), fileProps)
    return data.link
  } catch (error) {
    return false
  }
}
