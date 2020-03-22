import axios from 'axios';

const api = axios.create({
    baseURL: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/'
})

export default api;
