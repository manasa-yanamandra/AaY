import request from 'superagent'
import { logError } from './api-utils'
import { Songs } from '../../models/songs'
// import { logError } from './api-utils'

const rootUrl = '/api/v1/aay'
export async function getAllSongs(): Promise<Songs[]> {
  return request
    .get(`${rootUrl}`)
    .then((res) => {
      console.log('api', res.body)
      return res.body
    })
    .catch(logError)
}
// export const getAllSongs = async (id: number): Promise<Songs[]> => {
//   // ... your API call logic
//   const response = await fetch(`${rootUrl}/${id}`)
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`)
//   }
//   const data = await response.json()
//   return data as Songs[] // Explicitly cast the data
// }
