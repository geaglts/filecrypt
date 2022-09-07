import axios from 'axios'
import { endpoints } from './index'

export async function getKey() {
  try {
    const { data } = await axios.get(endpoints.keyGenerator.getRandomKey(), {})
    return data.key
  } catch (error) {
    return false
  }
}
