import axios from 'axios'
import { SUCCESS_CODE } from '@helper/constants'
const Instance = axios.create({
  baseURL: '/'
  // baseURL: 'http://localhost:80' // ngnix反向代理
})
const Http = {}
Http.post = bizData => new Promise((resolve, reject) => {
  const { url, data } = bizData
  Instance.post(url, data)
    .then(response => {
      const { data } = response;
      if (data.code !== SUCCESS_CODE) {
        return reject(data && data.msg)
      }
      resolve(response.data)
    })
    .catch(error => reject(error))
})
Http.get = (bizData) => new Promise((resolve, reject) => {
  const { url, data } = bizData
  Instance.get(url, {
    params: data
  })
    .then(function (response) {
      const { data } = response;
      if (data.code !== SUCCESS_CODE) {
        return reject(data && data.msg)
      }
      resolve(response.data)
    })
    .catch(function (error) {
      reject(error)
    })
})
export default Http
