import request from '@/utils/request'

export function fetchList(query) {
  return request({
    baseURL: process.env.VUE_APP_BASE_API_TRANSACTION,
    url: '/items',
    method: 'get',
    params: query
  })
}

export function createItem(data) {
  return request({
    baseURL: process.env.VUE_APP_BASE_API_TRANSACTION,
    url: '/items',
    method: 'post',
    data
  })
}

export function updateItem(id, data) {
  return request({
    baseURL: process.env.VUE_APP_BASE_API_TRANSACTION,
    url: `/items/${id}`,
    method: 'put',
    data
  })
}

export function deleteItem(id) {
  return request({
    baseURL: process.env.VUE_APP_BASE_API_TRANSACTION,
    url: `/items/${id}`,
    method: 'delete'
  })
}

export function getTotalItems(query) {
  return request({
    baseURL: process.env.VUE_APP_BASE_API_TRANSACTION,
    url: '/items/total',
    method: 'get'
  })
}
