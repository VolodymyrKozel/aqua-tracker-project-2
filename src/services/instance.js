import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://aqua-tracker-project-2-backend.onrender.com/',

  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
