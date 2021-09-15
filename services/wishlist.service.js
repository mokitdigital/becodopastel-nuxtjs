import axios from 'axios'
// require('dotenv').config()

const urlApi = 'https://murmuring-journey-61233.herokuapp.com/api'
// const urlApi = 'http://localhost:5000/api'

export const wishlistService = {
  create,
  deleteOne,
  find,
  findById,
  updateOne
}

function create (wish) {
  const requestConfig = {
    method: 'POST'
  }

  return axios.post(`${urlApi}/wishlists`, wish, requestConfig)
}

function deleteOne (id) {
  const requestConfig = {
    method: 'DELETE'
  }

  return axios.delete(`${urlApi}/wishlists?id=${id}`, requestConfig)
}

function find () {
  const requestConfig = {
    method: 'GET'
  }

  return axios.get(`${urlApi}/wishlists`, requestConfig)
}

function findById (id) {
  const requestConfig = {
    method: 'GET'
  }

  return axios.get(`${urlApi}/wishlists?id=${id}`, requestConfig)
}

function updateOne (change) {
  const requestConfig = {
    method: 'PUT'
  }

  return axios.put(`${urlApi}/wishlists`, change, requestConfig)
}
