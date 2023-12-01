import bookmarkService from '@database/service/bookmark'
import { Bookmark } from '@types';

const getBookmarksByUser = async ({ params, set }: { params: any; set: any }) => {
  try {
    const recipes = await bookmarkService.getBookmarksByUser(params.userId)
    set.status = 200
    return recipes
  } catch (error) {
    console.error(error)
    set.status = 500
    return ''
  }
}

const addBookmark = async ({
  request,
  set,
  body
}: {
  request: any
  set: any
  body: any
}) => {
  try {
    const bookmark = await bookmarkService.addBookmark(body.bookmark as Bookmark)
    set.status = 200
    return bookmark
  } catch (error) {
    console.error(error)
    set.status = 500
    return ''
  }
}

export default { getBookmarksByUser, addBookmark }
