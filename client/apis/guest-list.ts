import request from 'superagent'
import { logError } from './api-utils'
import { GuestList } from '../../models/guestlist'

const rootUrl = '/api/v1/aay'
export async function getAllGuestList(): Promise<GuestList[]> {
  try {
    const res = await request.get(`${rootUrl}`)
    console.log('API Response:', res.body)
    return res.body as GuestList[] // Explicitly cast the response body to Guest[]
  } catch (error) {
    logError(error)
    throw error
  }
}
