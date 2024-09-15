import request from '@/utils/request'

export function fetchList(query) {
  return request({
    baseURL: process.env.VUE_APP_BASE_API_TRANSACTION,
    url: '/transactions',
    method: 'get',
    params: query
  })
}

export function createTransaction(data) {
  return request({
    baseURL: process.env.VUE_APP_BASE_API_TRANSACTION,
    url: '/transactions',
    method: 'post',
    data
  })
}

export function updateTransaction(id, data) {
  return request({
    baseURL: process.env.VUE_APP_BASE_API_TRANSACTION,
    url: `/transactions/${id}`,
    method: 'put',
    data
  })
}

export function deleteTransaction(id) {
  return request({
    baseURL: process.env.VUE_APP_BASE_API_TRANSACTION,
    url: `/transactions/${id}`,
    method: 'delete'
  })
}

export function getGraphicTransaction(id) {
  return request({
    baseURL: process.env.VUE_APP_BASE_API_TRANSACTION,
    url: `/transactions/graphic/${id}`,
    method: 'get'
  })
}

export function getGraphicSpecificTransaction(id, type) {
  return request({
    baseURL: process.env.VUE_APP_BASE_API_TRANSACTION,
    url: `/transactions/graphic-specific/${id}/${type}`,
    method: 'get'
  })
}

export function getReportTransaction(m, y) {
  return request({
    baseURL: process.env.VUE_APP_BASE_API_TRANSACTION,
    url: `/transactions/monthly-report/${m}/${y}`,
    method: 'get'
  })
}
