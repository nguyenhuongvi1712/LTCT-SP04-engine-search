import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: 'https://module-user-ltct.herokuapp.com/api/user/',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = '82|kRpnCMitqFG4SBwyxLrwIym1ChZXDkffPMzUxaQN';
  config.headers['Authorization'] = `Bearer ${accessToken}`;
  return config;
});

export async function getAllUsers() {
  const res = await axiosInstance.get('/');
  return res.data;
}
