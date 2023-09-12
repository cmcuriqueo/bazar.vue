//api url
export const API_URL = 'http://localhost:3000/'

//api endpoints
export const API_ENDPOINTS = {
  PRODUCTS: 'products',
  PRODUCT: 'products'
}

//api methods
export const API_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
}

//api headers
export const API_HEADERS = {
  'Content-Type': 'application/json'
}

//api timeout
export const API_TIMEOUT = 10000 //10 seconds

//api error messages
export const API_ERROR_MESSAGES = {
  NO_INTERNET: 'No internet connection',
  TIMEOUT: 'Request timed out',
  SERVER_ERROR: 'Server error',
  UNKNOWN_ERROR: 'Unknown error'
}

//api error codes
export const API_ERROR_CODES = {
  NO_INTERNET: 0,
  TIMEOUT: 1,
  SERVER_ERROR: 2,
  UNKNOWN_ERROR: 3
}

//api error types
export const API_ERROR_TYPES = {
  NO_INTERNET: 'NO_INTERNET',
  TIMEOUT: 'TIMEOUT',
  SERVER_ERROR: 'SERVER_ERROR',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR'
}
