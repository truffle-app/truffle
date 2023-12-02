import { Bookmark } from '@types'
import axios from 'axios'
import {API_URL} from '@env'

const baseUrl = `${API_URL}/api/bookmarks`

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
