import Vue from 'vue'
import axios from 'axios'

const axiosInstance = axios.create({
  // ini salah disini, harusnta b nya kecil
  baseURL: 'http://localhost:3000'
})

Vue.prototype.$axios = axiosInstance
