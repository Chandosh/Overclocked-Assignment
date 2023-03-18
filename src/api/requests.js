import axios from 'axios';
import { getToken } from 'src/utils/auth';

const baseURL = 'https://api.sfd.interview.ovckd.dev/v1';

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/son',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) config.headers.Authorization = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    {
      return {
        data: error.response.data,
        status: error.response.status,
        type: 'single',
      };
    }
  }
);

const request = {
  get: (url, params) => axiosInstance.get(url, { params }),
  post: (url, body) => axiosInstance.post(url, body),
  put: (url, body) => axiosInstance.put(url, body),
  patch: (url, body) => axiosInstance.patch(url, body),
  del: (url) => axiosInstance.delete(url),
  delWithData: (url, data) => axiosInstance.delete(url, { data }),
};

export default request;
