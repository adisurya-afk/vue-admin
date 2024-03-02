import request from '@/utils/request'

export function login(data) {
  return request({
    baseURL: process.env.VUE_APP_BASE_API_USER,
    url: '/users/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    baseURL: process.env.VUE_APP_BASE_API_USER,
    url: '/users/me',
    method: 'post'
  })
}
