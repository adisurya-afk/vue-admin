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

export function getUsers() {
  return request({
    baseURL: process.env.VUE_APP_BASE_API_USER,
    url: '/users',
    method: 'get'
  })
}

export function createUsers(data) {
  return request({
    baseURL: process.env.VUE_APP_BASE_API_USER,
    url: '/users',
    method: 'post',
    data
  })
}

export function updateUsers(id, data) {
  return request({
    baseURL: process.env.VUE_APP_BASE_API_USER,
    url: `/users/${id}`,
    method: 'put',
    data
  })
}

export function deleteUsers(id) {
  return request({
    baseURL: process.env.VUE_APP_BASE_API_USER,
    url: `/users/${id}`,
    method: 'delete'
  })
}
