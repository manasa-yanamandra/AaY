import request from 'superagent'
import { logError } from './api-utils'

const rootUrl = '/api/v1/aay'

export function getLogin(): Promise<string[]> {
  return request
    .get(rootUrl + '/login')
    .then((res) => {
      return res.body.login
    })
    .catch(logError)
}
