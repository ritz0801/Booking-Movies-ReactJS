import axios from 'axios';

const api = axios.create({
    baseURL: 'http://movie0706.cybersoft.edu.vn/api/QuanLyRap/'
});
export default api;