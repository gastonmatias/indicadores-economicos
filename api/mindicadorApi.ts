import axios from 'axios'

const mindicadorApi = axios.create({
    baseURL: 'https://mindicador.cl/api'
})

export default mindicadorApi