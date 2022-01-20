import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: 'https://module-user-ltct.herokuapp.com/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// axiosInstance.interceptors.request.use(async (config) => {
//   const accessToken = localStorage.getItem('userToken')
//     ? localStorage.getItem('userToken')
//     : '';
//   config.headers['Authorization'] = `Bearer ${accessToken}`;
//   return config;
// });

export async function getAllUsers(token) {
  try {
    const res = await axiosInstance.get('/user/', {
      headers: {
        Authorization: 'Bearer ' + token, //the token is a variable which holds the token
      },
    });

    return res.data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function login(username, password) {
  try {
    const res = await axiosInstance.post('/login', { username, password });
    console.log('res', res);
    return res.data;
  } catch (error) {
    return error;
  }
}
