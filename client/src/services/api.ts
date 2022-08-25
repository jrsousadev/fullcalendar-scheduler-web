import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9000/',
});

export default api;

