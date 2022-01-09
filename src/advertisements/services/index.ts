import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: 'https://ltct-api.2soft.top',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbmgudG5kZXY0MEBnbWFpbC5jb20iLCJpYXQiOjE2Mzk5MDU0ODksImV4cCI6MTY0MjQ5NzQ4OX0.1lELB1PMl_yL_ADLtMQKamit3amIHVU-pLv6KxPdBV4';
  config.headers['Authorization'] = `Bearer ${accessToken}`;
  return config;
});

export async function getAdvertisment() {
  const res = await axiosInstance.get('/admin/advertisements');
  return res.data;
}
