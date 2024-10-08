import axios from 'axios';

export const httpRequest = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});
