const TokenKey = 'Admin-Token'
const Username = 'Username'

export function setToken(token) {
  return sessionStorage.setItem(TokenKey, token)
}

export function getToken() {
  return sessionStorage.getItem(TokenKey)
}

export function removeToken() {
  return sessionStorage.removeItem(TokenKey)
}

export function setUsername(val) {
  return sessionStorage.setItem(Username, val)
}

