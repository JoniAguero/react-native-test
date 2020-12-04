const URL = 'https://jsonplaceholder.typicode.com'

export const GetUsersApi = () => fetch(`${URL}/users`)
export const GetPostsApi = (userId) => fetch(`${URL}/posts?userId=${userId}`)


