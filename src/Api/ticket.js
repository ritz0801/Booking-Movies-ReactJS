import axios from "axios";

const api = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/"
});
export default api;
