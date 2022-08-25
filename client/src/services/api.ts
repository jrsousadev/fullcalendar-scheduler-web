import axios from 'axios';
import { BASE_URL_BACKEND } from '../environments/values';

 export const api = axios.create({
    baseURL: BASE_URL_BACKEND,
  });