import axios from "axios";
import apiKey from "../services/apiKey";

const useMovies = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: apiKey,
  },
});

export default useMovies;
