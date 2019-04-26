import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-96106.firebaseio.com/'
});

export default instance;