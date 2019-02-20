import axios from 'axios';

export default axios.create({
  baseURL: process.env.NODE_ENV ? 'http://localhost:3030' : ''
});