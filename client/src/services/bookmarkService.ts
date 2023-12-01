import { Bookmark } from '@types'
import axios from 'axios'

const baseUrl = `http://192.168.0.103:3001/api/bookmarks`

const getBookmarks = async (userId: number) => {
  try {
    const res = await axios.get(`${baseUrl}/${userId}`)
    return res.data
  } catch (error) {
    console.error(error)
  }
}

const addBookmark = async (bookmark: Bookmark) => {
  try {
    const res = await axios.post(baseUrl, { bookmark: bookmark })
    return res.data
  } catch (error) {
    console.error(error)
  }
}

export default { getBookmarks, addBookmark }
