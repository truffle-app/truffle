import { User } from '@types'
import axios from 'axios'
import {API_URL} from '@env'

const baseUrl = `${API_URL}/api/users`

const getUser = async (id: number) => {
  try {
    const res = await axios.get(baseUrl + `/${id}`)
    return res.data
  } catch (error) {
    console.error(error)
  }
}

const login = async (user: User) => {
  try {
    const res = await axios.post(`${baseUrl}/login`, { credentials: user })
    return res.data
  } catch (error) {
    console.error(error)
  }
}

const register = async (user: User) => {
  try {
    const res = await axios.post(`${baseUrl}/register`, { user: user })
    return res.data
  } catch (error) {
    console.error(error)
  }
}

export default { getUser, login, register }
