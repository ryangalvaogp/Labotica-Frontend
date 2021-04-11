import axios from 'axios';


const api = axios.create(
    {
        baseURL: 'https://backendlabotica.herokuapp.com/',
    }
);

export default api;