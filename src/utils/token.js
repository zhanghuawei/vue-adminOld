const TokenKey = 'Token'
const RolesKey = 'Role'

export function setToken(token) {
    return sessionStorage.setItem(TokenKey, token)
}

export function getToken() {
    return sessionStorage.getItem(TokenKey)
}

export function removeToken() {
    return sessionStorage.removeItem(TokenKey)
}

export function setRoles(role) {
    return sessionStorage.setItem(RolesKey, role)
}

export function getRoles() {
    return sessionStorage.getItem(RolesKey)
}

export function removeRoles() {
    return sessionStorage.removeItem(RolesKey)
}
