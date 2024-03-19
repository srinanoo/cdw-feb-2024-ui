import axios from "axios";

const AxiosAPI = axios.create({
    baseURL: "http://localhost:4000/api/v1/"
});

export default AxiosAPI;