import axios from "axios";

const AxiosAPI = axios.create({
    // baseURL: "http://localhost:4000/api/v1/"
    baseURL: "https://cdw-feb-2024-node.vercel.app/api/v1/"
});

export default AxiosAPI;