import axios from 'axios';

const ipAddress = '192.168.15.2';

const api = axios.create({
  baseURL: `http://${ipAddress}:3333`,
});

export default api;
