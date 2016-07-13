// Auth utilities for messing with localStorage
export function saveAuthToken(token) {
  localStorage.setItem('token', token)
}

export function killToken() {
  localStorage.removeItem('token')
}

export function getAuthToken(token) {
  localStorage.getItem('token');
}
