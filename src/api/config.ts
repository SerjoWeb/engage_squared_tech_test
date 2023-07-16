import axios, { type AxiosRequestHeaders } from 'axios';

// Create an instance of axios
const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  headers: {
    'Cache-Control': 'no-cache'
  }
});

// implement interceptor request
// in case we need to pass some additional headers
// as an example: Authorization
API.interceptors.request.use(
  (config) => {
    const settings = { ...config };

    if (!settings.headers) {
      settings.headers = {} as AxiosRequestHeaders;
    }

    return settings;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// implement interceptor response
// to catch the response or handle error
API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
