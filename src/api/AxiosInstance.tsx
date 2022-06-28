import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: "http://192.168.1.9:8080/comercio-seguro"
})

export default AxiosInstance;