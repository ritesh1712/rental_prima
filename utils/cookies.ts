import Cookies from 'js-cookie'

export const setCookie = (name: string, value: string, options = {}) => {
  Cookies.set(name, value, {
    ...options,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Lax',
  })
}

export const getCookie = (name: string) => {
  return Cookies.get(name)
}

export const removeCookie = (name: string) => {
  Cookies.remove(name)
}

export const setAuthTokens = (token: string, refreshToken: string) => {
  setCookie('authToken', token)
  setCookie('refreshToken', refreshToken)
}

export const removeAuthTokens = () => {
  removeCookie('authToken')
  removeCookie('refreshToken')
}

export const getAuthTokens = () => {
  return {
    token: getCookie('authToken'),
    refreshToken: getCookie('refreshToken'),
  }
}
