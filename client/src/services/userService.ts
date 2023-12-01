import axios from 'axios'

const baseUrl = `http://192.168.0.103:3001/api/users`

const getUser = async (id: number) => {
  try {
    const res = await axios.get(baseUrl + `/${id}`)
    return res.data
  } catch (error) {
    console.error(error)
  }
}

export default {
  getUser
}
