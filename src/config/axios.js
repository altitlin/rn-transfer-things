import axios from 'axios'

import { API_ROUTE } from './api'

const PORT = 4200
const BASE_URL = `http://192.168.0.113:${PORT}${API_ROUTE}`

export const instance = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
})
