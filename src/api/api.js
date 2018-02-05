import axios from 'axios'
import { baseUrl } from '../config/env'

export const login = params => {
  returnaxios.post(baseUrl + '/api/authenticate', params).then(res => res.data)
}