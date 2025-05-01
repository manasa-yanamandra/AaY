import request from 'superagent'
// import { logError } from './api-utils'
import { Gallery } from '../../models/gallery'

const rootUrl = '/api/v1/aay'
export async function getAllGallery(): Promise<Gallery[]> {
  try {
    const response = await request.get(`${rootUrl}/memories`).then((res) => {
      console.log('api', res.body.memories)
      return res.body
    })
    return response
  } catch (logError) {
    logError
  }
}

//   console.log('api', response.body);
//   return response.body as Gallery[];
// } catch (error) {
//   logError(error);
//   throw error;
// }}
