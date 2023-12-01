import axios from 'axios'

const baseUrl = `${process.env.EXPO_PUBLIC_API_URL}/api/users`

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
