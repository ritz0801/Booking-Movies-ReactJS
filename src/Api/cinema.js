import axios from 'axios';

const api = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/http://movie0706.cybersoft.edu.vn/api/QuanLyRap/'
});
export default api;