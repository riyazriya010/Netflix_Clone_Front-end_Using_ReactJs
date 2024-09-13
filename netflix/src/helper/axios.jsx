import axios from 'axios';

// Base URL to make request to the themovie database
const instance = axios.create({
    baseURL:`https://api.themoviedb.org/3`,
});

// instance.get('/foo-bar');

// https://api.themoviedb.org/3/foo-bar

export default instance;