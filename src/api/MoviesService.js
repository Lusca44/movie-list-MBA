import axios from "axios";

const API_KEY = 'b6772c6f33e92bdc5222c9c91cec3214'
const BASE_URL = 'https://api.themoviedb.org/3/'
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`

export class MoviesService {

    static getMovies(){
        return axios(withBaseUrl('/movie/popular'));
    }

    static getMoviesById(id){
        return axios(withBaseUrl(`/movie/${id}`));
    }

}

// https://api.themoviedb.org/3/movie/550?api_key=b6772c6f33e92bdc5222c9c91cec3214  /movie/popular